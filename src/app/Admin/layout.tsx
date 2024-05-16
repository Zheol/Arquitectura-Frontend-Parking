import Image from "next/image";
import Link from "next/link";
import { LuParkingCircle } from "react-icons/lu";
import { AiFillFund } from "react-icons/ai";
import { FaMoneyBillWave,FaRegUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return(
        <div className="flex ">
            <div className=" h-[100vh] min-w-64 bg-[#17202A] block ">
                <Link href={'/'} className=" flex justify-center content-center py-3">
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Parking_icon.svg/1200px-Parking_icon.svg.png" alt="logo" width={64} height={64}/>
                </Link>
                {/* Links */}
                <div className=" block justify-center p-2 gap-y-4">
                    
                    
                    <Link href={'/Admin/Dashboard'} className="flex items-center gap-x-4 hover:bg-slate-600 p-2 rounded-xl">
                        <AiFillFund size={32}/>
                        <h2 className="text-2xl text-white">Dashboard</h2>
                    </Link>

                    <Link href={'/Admin/Parking'} className="flex items-center gap-x-4 hover:bg-slate-600 p-2 rounded-xl">
                        <LuParkingCircle size={32}/>
                        <h2 className="text-2xl text-white">Parking</h2>
                    </Link>

                    <Link href={'/Admin/Users'} className="flex items-center gap-x-4 hover:bg-slate-600 p-2 rounded-xl">
                        <FaRegUserCircle size={32}/>
                        <h2 className="text-2xl text-white">Users</h2>
                    </Link>

                    <Link href={'/Admin/Payment'} className="flex items-center gap-x-4 hover:bg-slate-600 p-2 rounded-xl">
                        <FaMoneyBillWave size={32}/>
                        <h2 className="text-2xl text-white">Payment</h2>
                    </Link>
                </div>
                {/* Cerrar sesion */}
                <div className="h-64 block justify-center p-2 gap-y-4">
                    
                        <Link href={'/'} className="flex items-center gap-x-4 hover:bg-slate-600 p-2 rounded-xl">
                        <MdLogout size={32}/>
                            <h2 className="text-2xl text-white">Cerrar sesion</h2>
                        </Link>
                    </div>
            </div>

            {children}
        </div>
    )
}