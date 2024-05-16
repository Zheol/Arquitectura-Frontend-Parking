import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-[#17202A]">
     <h1 className=" text-5xl font-bold">Parking</h1>
     <Link href={'/Admin'}>
                <h2 className="text-4xl">Admin</h2>
            </Link>
    </main>
  );
}
