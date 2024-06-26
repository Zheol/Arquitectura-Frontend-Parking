'use client'
import CarDark from '@/components/Car-Dark';
import ModalCreateZone from '@/components/modal/modal-create-zone';
import ModalRegisterCar from '@/components/modal/modal-register-car';
import parkingSlots from '@/mocks/ParkingSlots';
import Link from 'next/link';
import { useState } from 'react';
import { FaPlus, FaPlusCircle } from 'react-icons/fa';

interface Zona
{
  id: number;
  nombre_zona: string;
  cant_estacionamientos_totales: number;
  cant_estacionamientos_ocupados: number;
}

export default function LayoutCarDetails({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const slots = parkingSlots;
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenZone, setModalOpenZone] = useState(false);

  const [selectedZone, setSelectedZone] = useState<Zona | null>(null);
  const closeModalLogin = () => {
    setModalOpen(false);
}

  const closeModalZone = () => {
    setModalOpenZone(false);
  }
  const zonas = [
    {
      id: 1, 
      nombre_zona : 'Zona 1',
      cant_estacionamientos_totales: 20,
      cant_estacionamientos_ocupados: 16
    },
    {
      id: 2, 
      nombre_zona : 'Zona 2',
      cant_estacionamientos_totales: 20,
      cant_estacionamientos_ocupados: 10
    },
    {
      id: 3, 
      nombre_zona : 'Zona 3',
      cant_estacionamientos_totales: 20,
      cant_estacionamientos_ocupados: 6
    }
  ]

  return (
    <main className='w-[100%] flex gap-10'> 
       <ModalRegisterCar isOpen={modalOpen} onClose={closeModalLogin} />
      <ModalCreateZone isOpen={modalOpenZone} onClose={closeModalZone} />
      <aside className='w-[70%] h-[100%]'>
        <h1 className=" text-5xl font-bold text-black">Parking Slots</h1>
        {/* Sector de autos */}
        {/* Zonas de parking */}
        <div className='flex justify-between items-center'>
          <div className="flex flex-row gap-2">
            {
              zonas.map((zona, index) => {
                return (
                  <button key={index} onClick={() => { setSelectedZone(zona) }} className={` ${selectedZone?.id == zona.id ? "bg-yellow-300" : 'bg-white'}  w-10 h-10 rounded-full flex justify-center items-center`}><p className='font-bold'>{zona.id}</p></button>
                )
              })
            }
          </div>
            { selectedZone?.id ? null : (<p className='font-bold'>Seleccione una zona para ver la info.</p>)}
        </div>
        <div className=' flex gap-x-4 my-4 justify-between'>
          <div className='rounded-lg  hover:cursor-pointer  transform transition-transform duration-500 hover:scale-110  border-2 bg-white border-gray-500 shadow-md h-24 w-48  flex flex-col items-center justify-center' >
            <p className='text-4xl font-bold'> {selectedZone?.cant_estacionamientos_totales || "-"}</p>
            <p>Espacios totales</p>
          </div>
          <div className='rounded-lg  hover:cursor-pointer  transform transition-transform duration-500 hover:scale-110  border-2 bg-white border-gray-500 shadow-md h-24 w-48  flex flex-col items-center justify-center' >
            <p className='text-4xl font-bold'> {selectedZone?.cant_estacionamientos_ocupados || '-'}</p>
            <p>Espacios ocupados</p>
          </div>
          <button onClick={()=> {setModalOpenZone(!modalOpenZone)}} className='rounded-lg  hover:cursor-pointer  transform transition-transform duration-500 hover:scale-110  border-2 bg-white border-gray-500 shadow-md h-24 w-48  flex flex-col items-center justify-center' >
            <FaPlus size={45} />
            <p>Crear zona</p>
          </button>
        </div>
        <div className='h-[60vh] overflow-scroll bg-white p-4 rounded-lg border-2 border-gray-500'>

       <table className='w-full'>
          <thead className='bg-gray-100 p-2 rounded-md'>
            <tr>
              <th>Patente</th>
              <th>Llegada</th>
              <th>Estado</th>
              <th className=' w-[20%]'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            { selectedZone == null ? 
              (
                <tr className='border-b-2 text-center'>
                  <td colSpan={4}>Seleccione una zona para ver los detalles.</td>
                </tr>
              )
            :
            (

              slots.map((slot, index) => {
                return (
                  
                  <tr key={index} className='border-b-2 text-center'>
                      <td>{slot.aviable ? <p>{slot.patente}</p> : <p>-----------</p>}</td>
                      <td>{slot.aviable ? <p>{slot.llegada}</p> : <p>-----------</p>}</td>
                      <td>{slot.aviable ? <p>Ocupado</p> : <p>Disponible</p>}</td>
                      <td> 
                        <Link href={`/Admin/Parking/${slot.id}`}>
                          <p className='bg-yellow-500 p-2 text-white rounded-lg'>Ver Detalles</p>
                        </Link>
                      </td>
                      </tr>
                )
              })
            )
            }
          </tbody>
        </table>
        </div>
      </aside>
      <section>
      <div className=' w-80 rounded-xl my-10 bg-white h-[80vh] shadow-lg p-2'>
            {children}
          </div>
      </section>
    </main>
  );
}