'use client'
import Image from "next/image";
import Link from "next/link";
import { use, useState, useEffect } from "react";
import ModalLogin from "../login/modal-login";
import { useUserStore } from "@/store/UserStorage";

export default function NavBar() {
    const {id_user, email_user, clearUser} = useUserStore();
    const [isOpenModal, setIsOpenModal] = useState(false);

    const closeModalLogin = () => {
        setIsOpenModal(false);
    }

    return (
        <nav className="h-16 w-[100%] bg-slate-800">
            <div className="flex items-center justify-between h-full px-4">
                <Link href={'/'} className="flex items-center w-[10%] justify-around">
                    <Image src="/parking.png" alt="logo" width={50} height={50} />
                    <h1 className="text-2xl text-white">Parking</h1>
                </Link>

                {
                    id_user != -1 &&
                        (
                            <div className="flex items-center gap-4">
                                <button onClick={clearUser} className="bg-yellow-400 p-2 px-5 rounded-lg" >
                                    <p className=" text-slate-800 font-bold">
                                        Cerrar Sesión
                                    </p>
                                </button>
                            </div>)
                        

                }

            </div>
        </nav>
    );
}