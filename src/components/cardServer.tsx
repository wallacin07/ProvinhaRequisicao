import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface ICardServer{
    name: string;
    image: string;
    gender: string;
    race: string;
    affiliation: string;
    path: string
  }

export const CardServer:React.FC<ICardServer> = ({image,name,gender,race, affiliation, path}) =>
    {
        return (      
            
            // dados.map(item,index) => ()
            <div className="h-[36rem] w-[22rem] rounded-3xl shadow-xl m-6 ">
                {/* header */}
                <div className={`h-3/6 w-full z-20 flex justify-center items-center rounded-t-xl bg-myImage `}>
                    <Image src={image} width={3000} height={3000} priority alt="sla" className="transition ease-in-out delay-300  hover:-translate-y-1 rounded-t-xl w-[11rem] h-[20rem] hover:scale-125 z-10"/>
                </div>

                {/* Body */}
                <div className="h-3/6 w-full flex flex-col  p-5 rounded-b-xl bg-zinc-600 z-0">
                    <p className="text-3xl text-white font-bold"> {name}</p>
                    <p className="text-xl font-bold text-yellow-400  ">{race} - {gender}</p>
                    <p className={`text-2xl mt-4 text-white font-bold `}>Affiliation :</p>
                    <p className="text-lg font-bold mt-2 text-yellow-500  ">{affiliation}</p>
                    <Button className="text-3xl mt-10 h-16"> 
                        <Link href={path}>Ver mais Sobre</Link>
                    </Button>
                </div>
               
            </div>

        )
    }