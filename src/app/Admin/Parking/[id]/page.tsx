import Ticket from "@/components/Ticket";
import parkingSlots from "@/mocks/ParkingSlots";
//@ts-ignore
export default function CarDetails({params}){
    const {id} = params;
    const car = parkingSlots.find(slot => slot.id == id);
    return(
        <div>  
            <Ticket props={{ idCar: car?.id || 0, llegada: car?.llegada || '', salida: car?.salida || '' , patente:car?.patente|| ""}}/>
        </div>
    )
}