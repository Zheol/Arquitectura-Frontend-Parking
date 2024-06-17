"use client";
import axios from 'axios';
import React, { useState } from 'react';
import { BsFillBackspaceFill } from "react-icons/bs";
import ModalSignin from './modal-sigin';
import { useUserStore } from '@/store/UserStorage';


import { useRouter } from 'next/navigation'



const ModalLogin = () => {
    const router = useRouter()
    const { setIdUser, setEmailUser, setTipoUser, setToken, tipoUser } = useUserStore();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [isModalSigninOpen, setIsModalSigninOpen] = useState<boolean>(false);
    const [loginLoading, setLoginLoading] = useState<boolean>(false);

    const [isError, setIsError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const [isOpen, setIsOpen] = useState<boolean>(true);
    const openModalSignin = () => {
        setIsOpen(false);
        setIsModalSigninOpen(true);
    };
    const closeModalSignin = () => {
        setIsOpen(true);
        setIsModalSigninOpen(!isModalSigninOpen);
    };


    const fetchLogin = async (email: string, password: string) => {
        setLoginLoading(true);
        setIsError(false);
        try {
            const response = await axios.post(`https://backend-plataforma.onrender.com/api/login`, {
                email: email,
                password: password
            });
            console.log(response.data);
            
            setIdUser(response.data.id);
            setEmailUser(response.data.email);
            
            // setToken(response.data.token);

            console.log(response.data.role)
            if(tipoUser == '1'){
                router.push('/Admin/');
            }
            setLoginLoading(false);

        }
        catch (error) {
            setLoginLoading(false);
            setIsError(true);
            setErrorMessage("Error al iniciar sesión, intente de nuevo.");
            console.log("Error: ", error);
        };
    };

    return (
        <>
        <ModalSignin isOpen={isModalSigninOpen} onClose={closeModalSignin} />
          {
            isOpen && (
          
                <div className="">
                    <div className="">
                      
                        <div className="col-span-1 flex flex-col">
                            <div className="flex flex-col justify-center my-auto items-center">
                                <div className='text-black font-bold text-2xl flex items-center'>Bienvenido</div>
                                <input
                                    type="email"
                                    placeholder="Correo Electrónico"
                                    className="p-2 mx-5 my-2 border border-gray-300 rounded-md text-black font-semibold w-full"
                                    onChange={(event) => setEmail(event.target.value)} />
                                <input
                                    type="password"
                                    placeholder="Contraseña"
                                    className="p-2 mx-5 my-2 border border-gray-300 rounded-md text-black font-semibold w-full"
                                    onChange={(event) => setPassword(event.target.value)} />
                                <button disabled={loginLoading} className="bg-yellow-500 text-black p-2 m-2 rounded-md w-full font-bold" onClick={() => fetchLogin(email, password)}>{loginLoading ? 'Cargando...' : 'Iniciar Sesión'}</button>
                                <button className="bg-blue-500 text-white p-2 m-2 rounded-md w-full font-bold" onClick={openModalSignin}>Registrarse</button>
                            {isError ? (
                                <div className='h-12'></div>
                            ) : (
                                <div className="flex justify-center items-center h-12 text-red-500 font-bold">
                                    {errorMessage}
                                </div>
                            
                            )
                            }
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
export default ModalLogin;