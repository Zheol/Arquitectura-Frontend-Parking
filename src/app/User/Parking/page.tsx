import ListaReservas from "@/components/user/ListaReservas";


export default function Page(){
    return(
        <div>
            <h1 className="text-4xl font-bold">Reservas</h1>
            <div className="w-[50%]">
                <ListaReservas id={1} />
                </div> 
        </div>
    )
}