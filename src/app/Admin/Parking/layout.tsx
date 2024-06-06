
import CarDark from '@/components/Car-Dark';
import parkingSlots from '@/mocks/ParkingSlots';
import Link from 'next/link';


export default function LayoutCarDetails({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const slots = parkingSlots;
    return (

    <aside>
        <h1 className=" text-5xl font-bold text-black">Parking Slots</h1>
         {/* Sector de autos */}
         
         <div className='w-[100%] h-[100%] flex'>
         <div style={{ display: 'grid', gridTemplateRows: 'repeat(8, 1fr)', gridAutoFlow:'column', width:'60%'}}>
                    {slots.map((slot,index) => (
                        <Link key={index} href={`/Admin/Parking/${slot.id}`}>
                            <CarDark  slot={slot}/>
                        </Link>
                    ))}
                </div>
         <div className=' w-96 rounded-xl bg-[#F1C40F] h-[100%] p-2'>
            {children}
         </div>
         </div>
    </aside>
  );
}