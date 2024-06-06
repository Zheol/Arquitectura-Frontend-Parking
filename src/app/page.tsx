'use client';
import NavBar from "@/components/ui/NavBar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [searchingCar, setSearchingCar] = useState(false);
  const [isError, setIsError] = useState(false)
  const handleSearchCar = () => {
  
    setSearchingCar(!searchingCar);
  }
  return (
    <div className="h-[100%]">
      <NavBar />
      <main
        className="flex flex-col items-center justify-center h-[90vh] w-[100%] bg-cover bg-center"
        style={{ backgroundImage: `url('/background.png')` }}
      >


        <div className="flex flex-col-2 h-[80vh] w-[100%]">
          <aside className="h-[100%] w-[100%] flex flex-col text-center items-center p-10 ">
            <h1 className="text-5xl font-bold">PARKING CLIFT!</h1>
            <h3 className="text-2xl font-bold">
              Ingresa tu patente para saber la informacion de tu auto
            </h3>
            {/* Input */}
            <div className=" h-[50%]">
              {
                searchingCar ? (
                  <div className="flex flex-col gap-4 items-center justify-center h-[100%] m-10">
                    <p className="font-bold text-xl">Su auto se encuentra en la zona 1</p>
                    <p className=" text-lg">Llegada: 12:00</p>
                    <p className=" text-lg">Salida: 18:00</p>
                    <div className="bg-white p-2 text-black mx-auto text-center text-2xl font-bold w-36 border-black border-4 rounded-xl">
                      <p>XXXX99</p>
                    </div>
                    <p className="text-2xl font-bold">Gracias por su visita!</p>
                    <button onClick={handleSearchCar} className="bg-yellow-500 text-2xl font-bold p-2 rounded-lg">
                      Pagar
                    </button>
                  </div>
                ) :
                  <div className="flex flex-col gap-4 mt-4 items-center justify-center h-[100%] m-10">

                    <input
                      type="text"
                      placeholder="Ingrese su patente"
                      className="text-center text-2xl  font-bold border-2 border-black rounded-lg p-2"
                    />
                    <button onClick={handleSearchCar} className="bg-yellow-500 text-2xl font-bold p-2 rounded-lg">
                      Buscar
                    </button>
                    <div className="h-10">
                      {
                        isError && <p className="text-red-500 font-bold text-lg">Patente no encontrada!</p>
                      }
                    </div>
                  </div>
              }
            </div>
          </aside>
          <section className="h-[100%] w-[100%]"></section>
        </div>

      </main>
    </div>
  );
}
