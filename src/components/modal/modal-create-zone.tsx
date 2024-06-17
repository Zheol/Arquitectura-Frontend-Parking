"use client";
import axios from "axios";
import React, { useState } from "react";
import { BsFillBackspaceReverseFill } from "react-icons/bs";

interface ModalSigninProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalCreateZone: React.FC<ModalSigninProps> = ({ isOpen, onClose }) => {
    const [name, setName] = useState<string>('');
    const [cantEstacionamientosTotales, setCantEstacionamientosTotales] = useState<string>('0');
    const [cantEstacionamientosOcupados, setCantEstacionamientosOcupados] = useState<string>('0');


    const handleClose = () => {
        onClose();
    };
    const fetchZone = async (name: string, cantEstacionamientosTotales: string, cantEstacionamientosOcupados: string) => {
        try {
            const response = await axios.post(`https://backend-plataforma.onrender.com/api/register`, {
                name: name,
                cantEstacionamientosTotales: cantEstacionamientosTotales,
                cantEstacionamientosOcupados: cantEstacionamientosOcupados,
            });
            handleClose();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none">
                    <div className="fixed inset-0 transition-opacity"></div>
                    
                    <div className="z-50 h-[70%] w-[40%] p-4 mx-auto bg-white rounded-md shadow-lg flex justify-center items-center gap-4 bg-cover bg-center" style={{backgroundImage:`url('/background.png')`}}>
                        
                    
                        <section className="col-span-1 flex flex-col w-[70%]">
                            <div className="flex justify-start">
                                <button onClick={handleClose}>
                                    <BsFillBackspaceReverseFill size={35} color='emerald' />
                                </button>
                            </div>
                            <div className="flex flex-col justify-center my-auto items-center">
                                <div className='text-black font-bold flex items-center my-10 text-4xl'>Crear zona</div>
                                    <input
                                        type="text"
                                        placeholder="Nombre de zona"
                                        className="p-2 shadow-lg mx-5 my-2 border border-gray-300 rounded-md text-black font-semibold w-full"
                                        onChange={(event) => setName(event.target.value)} />

                                    <input
                                        type="text"
                                        placeholder="Estacionamientos totales"
                                        className="p-2 shadow-lg mx-5 my-2 border border-gray-300 rounded-md text-black font-semibold w-full"
                                        onChange={(event) => setCantEstacionamientosTotales(event.target.value)} />


                                    <button className="bg-blue-500 text-white p-2 m-2 rounded-md w-full font-bold" onClick={() => fetchZone(name, cantEstacionamientosTotales, cantEstacionamientosOcupados)}>Crear zona</button>
                            </div>
                        </section>
                        
                    </div>
                </div>
            )}
        </>
    );
};
export default ModalCreateZone;