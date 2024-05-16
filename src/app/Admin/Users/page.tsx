import userInfo from "@/mocks/UserInfo"
import parkingSlots from "@/mocks/ParkingSlots"

export default function page(){
    const usersInfo = userInfo;
    const carInfo = parkingSlots;
    
    const usersWithCars = usersInfo.map((user) => {
        const car = carInfo.find((car) => car.id === user.carId);
        return { ...user, car };
    });

    return(
        <div className="text-black h-[100%]">
            <h1 className="text-4xl font-bold">Users</h1>
            {/* tabla usuarios */}
            <div className="my-10 bg-white h-[85%] w-[90%] border-black border-2  rounded-xl overflow-scroll">
                <table className="justify-between w-[100%] p-2 ">
                    <thead className=" border-b-2 border-black h-12">
                        <tr>
                        <th>Nombre</th>
                        <th>Lugar</th>
                        <th>Patente</th>
                        <th>Hora llegada</th>
                        <th className="w-32">Detalles</th>
                        </tr>
                    </thead>
                    <tbody>

                {
                    usersWithCars.map((user)=> (
                        user.car?.patente != '' ? (

                            <tr className="text-center h-10 border-b-2 border-stone-400 hover:bg-slate-200 transition-all" key={user.id}>

                            <td> {user.name}</td>
                            <td>{user.carId}</td>
                            <td>{user.car?.patente}</td>
                            <td>{user.car?.llegada}</td>
                            <td></td>
                        </tr>
                            ) : (null)
                        ))
                    }
                    </tbody>
                    </table>
            </div>
        </div>
    )
}