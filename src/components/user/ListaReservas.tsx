import Link from "next/link"


interface Reserva {
    id: number,
    fecha_inicio: string,
    hora_inicio: string,
    fecha_fin: string,
    hora_fin: string,
    patente: string,
    idZona: number,
    idUsuario: number
}

export default function ListaReservas({id} : {id: number}) {

    const reservas = [
        {
            id: 1,
            fecha_inicio: '2024-06-10',
            hora_inicio: '08:00',
            fecha_fin: '',
            hora_fin: '',
            patente: 'ABCD12',
            idZona: 1,
            idUsuario: 1
        },
        {
            id: 2,
            fecha_inicio: '2024-06-10',
            hora_inicio: '08:00',
            fecha_fin: '',
            hora_fin: '',
            patente: 'EFGH34',
            idZona: 2,
            idUsuario: 2
        },
        {
            id: 3,
            fecha_inicio: '2024-06-10',
            hora_inicio: '08:00',
            fecha_fin: '',
            hora_fin: '',
            patente: 'IJKL56',
            idZona: 3,
            idUsuario: 3
        }
    ]

    return (
         <section className="w-[100%] mt-4 ">
                <h2 className="text-3xl">Mis reservas:</h2>
                {
                    reservas.map((reserva) => (
                        <div key={reserva.id} className="bg-white p-4 my-4 rounded-lg border-2  border-gray-500">
                            <Link href={`/User/Parking/${reserva.id}`}>
                                <p>Patente: {reserva.patente}</p>
                                <p>Fecha inicio: {reserva.fecha_inicio}</p>
                                <p>Hora inicio: {reserva.hora_inicio}</p>
                                <p>Zona: {reserva.idZona}</p>
                            </Link>
                        </div>
                    ))
                }
            </section>
    )
}