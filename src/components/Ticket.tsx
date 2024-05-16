import Image from "next/image"

interface ticketProps {
    idCar:   number,
    llegada:    string,
    salida: string,
    patente: string
}

export default function Ticket({props}:{props : ticketProps}){
    const {idCar, llegada, salida, patente} = props;
    return(
        <div style={{ display:"flex", flexDirection:'column', justifyContent:'space-between', height:'100%',gap:4}}>
             {/* arrow up */}
             <div className='flex justify-center h-[10%] pb-4'>
                <Image src={'/arrow.png'} alt='arrowUp' height={30} width={80}/>
            </div>
            {/* Qr */}
            <section className=' flex justify-center items-center h-32 mb-4'>
                <Image className='rounded-xl' src={'/qr.png'} height={150} width={150} alt='codigo qr'/>
            </section>
            {/* Datos del ticket */}
            <div className=' text-center text-xl text-black'>
                <p className='text-2xl font-bold'>Gracias por su visita!</p>
                {/* Date */}
                <p className=''>16/05/2024</p>
                {llegada != '' ? (<p>Llegada: {llegada}</p>): (<p>Llegada: esperando...</p>)}
                {salida != '' ? (<p>Salida: {salida}</p>) : (<p>Salida: esperando...</p>)}
                
            </div>
            {/* Patente */}
            <div className="flex justify-center">
                <div className="bg-white p-2 text-black text-center text-2xl font-bold w-[30%] border-black border-4 rounded-xl">
                    {patente != "" ? (<p>{patente}</p>) : (<p>XXXX99</p>)}
                </div>
            </div>
            <h1 className='text-5xl text-center font-bold text-black pt-4'>Parking ticket</h1>
            {/* Car Illustration */}
            <div className=' items-end flex h-[15%]'>
                <Image className=" drop-shadow-xl shadow-black hover:opacity-85 hover:cursor-pointer hover:scale-110 ease-linear transition-all" src={"/front-car.png"} alt="Imagen de un coche" width={125} height={50} />
            </div>
        </div>
    )
}