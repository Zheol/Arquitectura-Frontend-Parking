'use client';
import ModalRegisterCar from "@/components/modal-register-car"
import Card from "@/components/ui/Card"
import ListaReservas from "@/components/user/ListaReservas"
import Link from "next/link"
import { IoMdAddCircle } from "react-icons/io"
import { FaPlus, FaUser } from "react-icons/fa"
import { useState } from "react"
import { MdLocalParking } from "react-icons/md";

export default function Page() {
    const [modalOpen, setModalOpen] = useState(false);
    const closeModalLogin = () => {
        setModalOpen(false);
    }

    return (

        <div>
            <ModalRegisterCar isOpen={modalOpen} onClose={closeModalLogin} />

            <h1 className="text-4xl font-bold">Parking</h1>
            <div className=' flex gap-x-4 my-4 justify-between'>
                <Link href={'User/Profile'} className='rounded-lg  hover:cursor-pointer  transform transition-transform duration-500 hover:scale-110  border-2 bg-white border-gray-500 shadow-md h-24 w-48  flex flex-col items-center justify-center' >
                    <FaUser size={35} />
                    <p className='text-2xl font-bold'> Ver datos</p>
                </Link>
                <Link href={'User/Parking'} className='rounded-lg  hover:cursor-pointer  transform transition-transform duration-500 hover:scale-110  border-2 bg-white border-gray-500 shadow-md h-24 w-48  flex flex-col items-center justify-center' >
                    <MdLocalParking size={40} />
                    <p className='text-2xl font-bold'> Ver reservas </p>
                </Link>
                <button onClick={() => { setModalOpen(!modalOpen) }} className='rounded-lg  hover:cursor-pointer  transform transition-transform duration-500 hover:scale-110  border-2 bg-white border-gray-500 shadow-md h-24 w-48  flex flex-col items-center justify-center' >
                    <FaPlus size={45} />
                    <p>Ingresar auto</p>
                </button>
            </div>
            <div className="flex justify-center items-center">

                <div className="w-[50%]">
                    <ListaReservas id={1} />
                </div>
                <aside className="w-[50%]">
                   
                </aside>
            </div>
        </div>
    )
}