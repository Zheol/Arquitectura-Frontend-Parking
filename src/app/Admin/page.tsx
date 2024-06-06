import Card from "@/components/ui/Card";
import Link from "next/link";
import { title } from "process";
import { AiFillHome } from "react-icons/ai";
import { FaFileInvoiceDollar, FaParking, FaUsers } from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";
import { MdViewAgenda } from "react-icons/md";

export default function Admin() {


    const ADMIN_ITEMS = [
        {
            title: "Dashboard",
            path: "/Admin/Dashboard",
            description: "Revisa los datos del parking.",
            icon: <ImStatsBars size={34} color="black" />,
        },
        {
            title: "Parking",
            path: "/Admin/Parking",
            description: "Revisa los datos del parking.",
            icon: <FaParking size={34} color="black" />,
        },{
            title: "Payment",
            path: "/Admin/Payment",
            description: "Revisa los datos del parking.",
            icon: <FaFileInvoiceDollar size={34} color="black" />,
        },{
            title: "Users",
            path: "/Admin/Users",
            description: "Revisa los datos del parking.",
            icon: <FaUsers size={34} color="black" />,
        }];
        
    return(
        <main className="flex min-h-[100vh] w-[100%] flex-col items-center justify-between p-24  ">
            <div className="flex flex-wrap justify-center gap-10 w-[80%] h-[80%]"
            >
                {
                    ADMIN_ITEMS.map((item, index) => (
                        <Card key={index} title={item.title} description={item.description} icon={item.icon} path={item.path} />
                    ))
                }
            </div>
        </main>
    )
}