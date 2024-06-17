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
            <table className=" w-[100%] h-[50vh] bg-white overflow-scroll rounded-lg">
                <thead className="bg-yellow-500 h-12">
                    <tr>
                        <th>Patente</th>
                        <th>Fecha inicio</th>
                        <th>Hora inicio</th>
                        <th>Zona</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {reservas.map((reserva) => (
                        <tr key={reserva.id} className="text-center max-h-14 ">
                            <td>{reserva.patente}</td>
                            <td>{reserva.fecha_inicio}</td>
                            <td>{reserva.hora_inicio}</td>
                            <td>{reserva.idZona}</td>
                            <td><button className="bg-blue-500 text-white p-2 rounded-lg font-bold">CheckOut</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}