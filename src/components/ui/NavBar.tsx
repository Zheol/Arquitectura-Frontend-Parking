'use client'
import Image from "next/image";
import Link from "next/link";
import { use, useState, useEffect } from "react";
import ModalLogin from "../login/modal-login";

export default function NavBar() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [email, setEmail] = useState<string | null>(localStorage.getItem('email'));

    useEffect(() => {
        if (localStorage.getItem('email')) {
            setIsLogin(true);
            console.log(localStorage.getItem('email'))
        }
    }, [localStorage.getItem('email')])
    const closeModalLogin = () => {
        setIsOpenModal(false);
    }


    return (
        <nav className="h-16 w-[100%] bg-slate-800">
            <ModalLogin isOpen={isOpenModal} onClose={closeModalLogin} />
            <div className="flex items-center justify-between h-full px-4">
                <Link href={'/'} className="flex items-center w-[10%] justify-around">
                    <Image src="/parking.png" alt="logo" width={50} height={50} />
                    <h1 className="text-2xl text-white">Parking</h1>
                </Link>

                {
                    isLogin ?
                        (
                            <div className="flex items-center gap-4">
                                <Link className="bg-yellow-400 p-2 px-5 rounded-lg" href={'/Admin'}>
                                    <p className=" text-slate-800 font-bold">{email}</p>
                                </Link>
                            </div>)
                        :
                        (
                            <div className="flex items-center gap-4">
                                <button  onClick={() => setIsOpenModal(true)}>
                                    <p className="text-white">Login</p>
                                </button>
                            </div>
                        )

                }

            </div>
        </nav>
    );
}