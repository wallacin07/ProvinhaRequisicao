import Image from "next/image";
import { Suspense } from "react";



interface IPerso{
    params: {
        id:string
    }
}

interface IDataPlanet{
    id: string;
    name: string
}

interface IData{
    id: string;
    name: string;
    image: string;
    ki: string;
    affiliation: string;
    gender: string;
    race: string
    maxKi: string
    description: string;
    originPlanet: IDataPlanet;
  }
  
interface IDataStaticIndex{
    items: IData[]

}


const Perso = async ({params: {id}} : IPerso) => {
    const res = await fetch(`https://dragonball-api.com/api/characters/${id}`)
    const data: IData = await res.json()
    
    return(


        <Suspense fallback={<p>Loading Images...</p>}>


            <div className="flex justify-center items-center w-full min-h-screen h-auto  ">

                <div className="flex flex-col md:flex-row justify-center items-center  w-full h-full px-5 md:px-40 mr-3">
                    <Image src={data.image} alt={"image perso"} width={220} height={220} priority={true} className="md:mr-16 shadow-sm h-[23rem] md:h-[32rem] w-auto hover:scale-125"></Image>
                    <div className="flex flex-col  bg-slate-400 px-4 justify-center items-center rounded-lg shadow-2xl">
                        <div className="flex flex-row">
                            <p className="text-xl text-white font-bold">Name: </p>
                            <p className="text-xl text-zinc-950 font-bold ml-2"> {data.name}</p>
                        </div>

                        <div className="flex flex-row">
                            <p className="text-xl text-white font-bold">Gender: </p>
                            <p className="text-xl text-zinc-950 font-bold ml-2">{data.gender}</p>
                        </div>

                        <div className="flex flex-row">
                            <p className="text-xl text-white font-bold">Race:</p>
                            <p className="text-xl text-zinc-950 font-bold ml-2">{data.race}</p>
                        </div >

                        <div className="flex flex-row">
                            <p className="text-xl text-white font-bold">Affiliation:</p>
                            <p className="text-xl text-zinc-950 font-bold ml-2" >{data.affiliation}</p>
                        </div>

                        <div className="flex flex-row">
                            <p className="text-xl text-white font-bold">Ki:</p>
                            <p className="text-xl text-zinc-950 font-bold ml-2">{data.ki}</p>
                        </div>

                        <div className="flex flex-row">
                            <p className="text-xl text-white font-bold">Max Ki:</p>
                            <p className="text-xl text-zinc-950 font-bold ml-2">{data.maxKi}</p>
                        </div>

                        <div className="flex flex-row">
                            <p className="text-xl text-white font-bold">Origin Planet:</p>
                            <p className="text-xl text-zinc-950 font-bold ml-2">{data.originPlanet.name}</p>
                        </div>
                        <br />
                        <div className="flex flex-col md:justify-center md:items-center">
                            <p className="text-xl text-white font-bold">Description:</p>
                            <p className="text-base font-semibold">{data.description}</p>
                        </div>

                    </div>
                </div>

            </div>




        </Suspense>
    )

}

export default Perso

export async function generateStaticParams() {
    const res = await fetch("https://dragonball-api.com/api/characters/")
    const data: IDataStaticIndex = await res.json()
    return data.items.map((item) => item.id.toString())
}