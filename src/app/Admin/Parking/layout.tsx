'use client'
import CarDark from '@/components/Car-Dark';
import parkingSlots from '@/mocks/ParkingSlots';
import Link from 'next/link';
import { useState } from 'react';


export default function LayoutCarDetails({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const slots = parkingSlots;
    const [selectedZone, setSelectedZone] = useState(1);
    return (

    <aside>
        <h1 className=" text-5xl font-bold text-black">Parking Slots</h1>
         {/* Sector de autos */}
         {/* Zonas de parking */}
         <div className="flex flex-row gap-2">
              <button onClick={()=>{setSelectedZone(1)}} className={` ${selectedZone == 1 ? "bg-yellow-300" : 'bg-white'}  w-10 h-10 rounded-full flex justify-center items-center`}><p className='font-bold'>1</p></button>
              <button onClick={()=>{setSelectedZone(2)}} className={` ${selectedZone == 2 ? "bg-yellow-300" : 'bg-white'}  w-10 h-10 rounded-full flex justify-center items-center`}><p className='font-bold'>2</p></button>
              <button onClick={()=>{setSelectedZone(3)}} className={` ${selectedZone == 3 ? "bg-yellow-300" : 'bg-white'}  w-10 h-10 rounded-full flex justify-center items-center`}><p className='font-bold'>3</p></button>
          </div>
         <div className='w-[100%] h-[100%] flex'>
         <div style={{ display: 'grid', gridTemplateRows: 'repeat(8, 1fr)', gridAutoFlow:'column', width:'60%'}}>
                    {slots.map((slot,index) => (
                        <Link key={index} href={`/Admin/Parking/${slot.id}`}>
                            <CarDark  slot={slot}/>
                        </Link>
                    ))}
                </div>
         <div className=' w-80 rounded-xl bg-white h-[80%] shadow-lg p-2'>
            {children}
         </div>
         </div>
    </aside>
  );
}