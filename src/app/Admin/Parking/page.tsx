import CarDark from '@/components/Car-Dark';
import Ticket from '@/components/Ticket';
import parkingSlots from '@/mocks/ParkingSlots';
import Image from 'next/image';

export default function Parking(){
    const slots = parkingSlots;

    return (
     <main>
        <Ticket props={{ idCar: 1, llegada: "", salida: "", patente:"XXXX99" }} />
     </main>
    )
}