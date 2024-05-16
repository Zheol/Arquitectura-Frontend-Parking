import CarDark from '@/components/Car-Dark';
import parkingSlots from '@/mocks/ParkingSlots';

export default function Parking(){
    const slots = parkingSlots;

    return (
        <main className="flex min-h-screen flex-col w-full p-6 px-24 bg-slate-200  rounded-s-2xl">
         <h1 className=" text-5xl font-bold text-black">Parking Slots</h1>
         {/* Sector de autos */}
         <div className='w-[100%] h-[100%]'>
                <div className='flex flex-row gap-x-4'>
                    {slots.map((slot,index) => (
                        <CarDark key={index} slot={slot}/>
                    ))}
                </div>
         </div>
        </main>

    )
}