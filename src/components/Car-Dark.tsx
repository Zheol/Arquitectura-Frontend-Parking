import Image from "next/image"

interface slotType {
    id: number,
    aviable: boolean
}
export default function CarDark({slot} : {slot: slotType}) {
    const {aviable} = slot;
    return(
        <div>
            <Image src={aviable ? "/car.png" : "/car-yellow.png"} alt="Imagen de un coche"width={500} height={300} />
        </div>
    )}