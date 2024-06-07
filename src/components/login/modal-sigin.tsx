"use client";

import axios from "axios";
import React, { useState } from "react";
import { BsFillBackspaceReverseFill } from "react-icons/bs";


interface ModalSigninProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalSignin: React.FC<ModalSigninProps> = ({ isOpen, onClose }) => {
    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rut, setRut] = useState<string>('');
    const [category, setCategory] = useState<string>('');

    const handleClose = () => {
        onClose();
    };
    const fetchSigin = async (email: string, password: string, name: string, lastName: string) => {
        try {
            const response = await axios.post(`https://backend-plataforma.onrender.com/api/register`, {
                rut: rut,
                email: email,
                password: password,
                name: name,
                lastname: lastName,
                category: category,
            });
            handleClose();
        } catch (error) {
            console.log(error);
        }
    }

    const previsiones = [
        {
            label: "Fonsa",
            id: 1
        },
        {
            label: "Isapre",
            id: 2,
        },
        {
            label: "Particular",
            id: 3
        }
    ]

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none">
                    <div className="fixed inset-0 transition-opacity"></div>
                    <div className="z-50 h-[70%] w-[50%] p-4 mx-auto bg-white rounded-md shadow-lg grid grid-cols-3 gap-4">
                        <div className="col-span-1 flex flex-col">
                            <div className="flex justify-start">
                                <button onClick={handleClose}>
                                    <BsFillBackspaceReverseFill size={35} color='emerald' />
                                </button>
                            </div>
                            <div className="flex flex-col justify-center my-auto items-center">
                                <div className='text-black font-bold text-2xl flex items-center'>Registra tus datos</div>
                                <input
                                    type="text"
                                    placeholder="RUT"
                                    className="p-2 mx-5 my-2 border border-gray-300 rounded-md text-black font-semibold w-full"
                                    onChange={(event) => setRut(event.target.value)} />
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

                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    className="p-2 mx-5 my-2 border border-gray-300 rounded-md text-black font-semibold w-full"
                                    onChange={(event) => setName(event.target.value)} />

                                <input
                                    type="text"
                                    placeholder="Apellido"
                                    className="p-2 mx-5 my-2 border border-gray-300 rounded-md text-black font-semibold w-full"
                                    onChange={(event) => setLastName(event.target.value)} />
                                <select
                                    className="p-2 mx-5 my-2 border border-gray-300 rounded-md text-black font-semibold w-full"
                                    onChange={(event) => setCategory(event.target.value)}
                                >
                                    <option value="fonasa">Fonasa</option>
                                    <option value="isapre">Isapre</option>
                                    <option value="dipreca">Particular</option>
                                </select>
                                <button className="bg-emerald-500 text-white p-2 m-2 rounded-md w-full font-bold" onClick={() => fetchSigin(email, password, name, lastName)}>Registrarse</button>
                            </div>
                        </div>
                        <div className="col-span-2 flex flex-col justify-center items-center rounded-md p-3">
                            <img src={'https://static.vecteezy.com/system/resources/previews/015/773/865/original/illustration-of-the-group-of-medical-workers-health-professional-team-concept-illustration-vector.jpg'} alt="login" className="w-full h-full" />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default ModalSignin;