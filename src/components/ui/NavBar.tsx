import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="h-16 w-[100%] bg-slate-800">
            <div className="flex items-center justify-between h-full px-4">
                <Link href={'/'} className="flex items-center w-[10%] justify-around">
                    <Image src="/parking.png" alt="logo" width={50} height={50} />
                    <h1 className="text-2xl text-white">Parking</h1>
                </Link>
                <div className="flex items-center gap-4">
                    <Link href="/Admin">
                        <p className="text-white">Login</p>
                    </Link>
                </div>
            </div>
        </nav>
    );
    }