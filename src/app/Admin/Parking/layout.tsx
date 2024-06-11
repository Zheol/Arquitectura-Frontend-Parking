'use client'
import CarDark from '@/components/Car-Dark';
import ModalRegisterCar from '@/components/modal-register-car';
import parkingSlots from '@/mocks/ParkingSlots';
import Link from 'next/link';
import { useState } from 'react';
import { FaPlus, FaPlusCircle } from 'react-icons/fa';


export default function LayoutCarDetails({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const slots = parkingSlots;
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedZone, setSelectedZone] = useState(1);
  const closeModalLogin = () => {
    setModalOpen(false);
}
  return (
    <main className='w-[100%] flex gap-10'> 
       <ModalRegisterCar isOpen={modalOpen} onClose={closeModalLogin} />

      <aside className='w-[70%] h-[100%]'>
        <h1 className=" text-5xl font-bold text-black">Parking Slots</h1>
        {/* Sector de autos */}
        {/* Zonas de parking */}
        <div className="flex flex-row gap-2">
          <button onClick={() => { setSelectedZone(1) }} className={` ${selectedZone == 1 ? "bg-yellow-300" : 'bg-white'}  w-10 h-10 rounded-full flex justify-center items-center`}><p className='font-bold'>1</p></button>
          <button onClick={() => { setSelectedZone(2) }} className={` ${selectedZone == 2 ? "bg-yellow-300" : 'bg-white'}  w-10 h-10 rounded-full flex justify-center items-center`}><p className='font-bold'>2</p></button>
          <button onClick={() => { setSelectedZone(3) }} className={` ${selectedZone == 3 ? "bg-yellow-300" : 'bg-white'}  w-10 h-10 rounded-full flex justify-center items-center`}><p className='font-bold'>3</p></button>
        </div>
        <div className=' flex gap-x-4 my-4 justify-between'>
          <div className='rounded-lg  hover:cursor-pointer  transform transition-transform duration-500 hover:scale-110  border-2 bg-white border-gray-500 shadow-md h-24 w-48  flex flex-col items-center justify-center' >
            <p className='text-4xl font-bold'> 20</p>
            <p>Espacios totales</p>
          </div>
          <div className='rounded-lg  hover:cursor-pointer  transform transition-transform duration-500 hover:scale-110  border-2 bg-white border-gray-500 shadow-md h-24 w-48  flex flex-col items-center justify-center' >
            <p className='text-4xl font-bold'> 4</p>
            <p>Espacios disponibles</p>
          </div>
          <button onClick={()=> {setModalOpen(!modalOpen)}} className='rounded-lg  hover:cursor-pointer  transform transition-transform duration-500 hover:scale-110  border-2 bg-white border-gray-500 shadow-md h-24 w-48  flex flex-col items-center justify-center' >
            <FaPlus size={45} />
            <p>Ingresar auto</p>
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
            {
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