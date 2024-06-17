import userInfo from "@/mocks/UserInfo"
import parkingSlots from "@/mocks/ParkingSlots"
import { Children } from "react";
import Link from "next/link";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    const usersInfo = userInfo;
    const carInfo = parkingSlots;
    
    const usersWithCars = usersInfo.map((user) => {
        const car = carInfo.find((car) => car.id === user.carId);
        return { ...user, car };
    });

    return(
        <main>
            
            <h1 className="text-4xl font-bold">Users</h1>
        <div className="text-black h-[70%] flex items-center justify-between gap-4">
            {/* tabla usuarios */}
            <div className="my-10 bg-white h-[85%] w-[30%] border-black border-2  rounded-xl overflow-scroll">
                <table className="justify-between w-[100%] p-2 ">
                    <thead className=" border-b-2 border-black h-12">
                        <tr>
                        <th>Nombre</th>
                        <th className="w-32">Detalles</th>
                        </tr>
                    </thead>
                    <tbody>

                {
                    userInfo.map((user)=> (
                      

                            <tr className="text-center h-10 border-b-2 border-stone-400 hover:bg-slate-200 transition-all" key={user.id}>

                            <td> {user.name}</td>
                            <td>
                                <Link href={`/Admin/Users/${user.id}`}>
                                    <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Detalles
                                    </p>
                                </Link>
                            </td>
                        </tr>
                           
                        ))
                    }
                    </tbody>
                    </table>
            </div>
            <div className="w-[60%] h-[85%]">
                {children}
            </div>
        </div>

        </main>
    )
}