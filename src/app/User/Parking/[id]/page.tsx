

export default function Reserva({params} : {params: {id: number}}){
    const {id} = params;
    return(
        <div>
            <h1 className="text-4xl font-bold">{id}</h1>
        </div>
    )
}