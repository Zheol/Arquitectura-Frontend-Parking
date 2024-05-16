import Image from "next/image"

interface slotType {
    id: number,
    aviable: boolean
}
export default function CarDark({slot} : {slot: slotType}) {
    const {aviable} = slot;
    return(
        <div>
            <Image className=" drop-shadow-xl shadow-black hover:opacity-85 hover:cursor-pointer hover:scale-110 ease-linear transition-all" src={aviable ? "/car.png" : "/car-yellow.png"} alt="Imagen de un coche" width={80} height={50} />
        </div>
    )}