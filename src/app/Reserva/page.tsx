import NavBar from "@/components/ui/NavBar";

export default function Reserva() {
    return (
        <div>
        <NavBar/>
        <main
        className="flex flex-col items-center justify-center h-[90vh] w-[100%] bg-cover bg-center"
        style={{ backgroundImage: `url('/background.png')` }}  >
            {/* Formulario de reserva */}
            <div className="flex flex-col gap-4 items-center justify-center h-[100%] m-10 bg-slate-800 p-10 rounded-lg text-white">
                <h3 className="text-4xl font-bold">Registrar reserva</h3>
                <input
                    type="text"
                    placeholder="Ingrese su patente"
                    className="text-center text-2xl  font-bold border-2 border-black rounded-lg p-2"
                />
                {/* input calendario */}
                <input
                    type="date"
                    className="text-center text-2xl w-full font-bold border-2 border-black rounded-lg p-2"
                />
                {/* input hora */}
                <input
                    type="time"
                    className="text-center text-2xl w-full font-bold border-2 border-black rounded-lg p-2"
                />
                <button className="bg-yellow-500 text-2xl font-bold p-2 rounded-lg">
                    Reservar
                </button>
            </div>
        </main>
        </div>
    )
}