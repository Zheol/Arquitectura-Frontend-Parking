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
                    <Image src={"/parking.png"} alt="logo" width={64} height={64}/>
                </Link>
                {/* Links */}
                <div className=" block justify-center p-2 gap-y-4 text-xl text-white">
                    
                    
                    <Link href={'/Admin/Dashboard'} className="flex items-center gap-x-4 hover:bg-slate-600 p-2 rounded-xl">
                        <AiFillFund size={32}/>
                        <h2>Dashboard</h2>
                    </Link>

                    <Link href={'/Admin/Parking'} className="flex items-center gap-x-4 hover:bg-slate-600 p-2 rounded-xl">
                        <LuParkingCircle size={32}/>
                        <h2>Parking</h2>
                    </Link>

                    <Link href={'/Admin/Users'} className="flex items-center gap-x-4 hover:bg-slate-600 p-2 rounded-xl">
                        <FaRegUserCircle size={32}/>
                        <h2>Users</h2>
                    </Link>

                    <Link href={'/Admin/Payment'} className="flex items-center gap-x-4 hover:bg-slate-600 p-2 rounded-xl">
                        <FaMoneyBillWave size={32}/>
                        <h2>Payment</h2>
                    </Link>
                </div>
                {/* Cerrar sesion */}
                <div className="h-64 block justify-center p-2 gap-y-4">
                    
                        <Link href={'/'} className="flex items-center gap-x-4 hover:bg-slate-600 p-2 rounded-xl">
                        <MdLogout size={32}/>
                            <h2 className="text-xl">Log out</h2>
                        </Link>
                    </div>
            </div>
            <main className="flex min-h-screen max-h-screen flex-col w-full p-6 px-24 bg-slate-200  rounded-s-2xl">
                {children}

            </main>
        </div>
    )
}