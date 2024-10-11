import Image from "next/image";
import bg from "@/assets/89980.webp"

interface ICardAPI{
    name: string;
    image: string;
    ki: string;
    affiliation: string;
    gender: string;
    race: string;
    MaxKi: string;
  
  }

export const CardAPI:React.FC<ICardAPI> = ({image,name,ki,affiliation,gender,race, MaxKi}) =>
    {
        return (      
            
            // dados.map(item,index) => ()
            <div className="h-[36rem] w-[22rem] rounded-3xl shadow-xl m-6 ">
                {/* header */}
                <div className={`h-3/6 w-full z-20 flex justify-center items-center rounded-t-xl `}>
                    <Image src={image} width={3000} height={3000} priority alt="sla" className="transition ease-in-out delay-300  hover:-translate-y-1 rounded-t-xl w-[11rem] h-[20rem] hover:scale-125 z-10"/>
                </div>

                {/* Body */}
                <div className="h-3/6 w-full flex flex-col p-5 rounded-b-xl bg-zinc-600 z-0">
                    <p className="text-3xl text-white font-bold"> {name}</p>
                    <p className="text-xl font-bold text-yellow-400  ">{race} - {gender}</p>
                    <p className=" mt-3 text-xl font-bold text-white">KI :</p>
                    <p className=" text-lg font-bold  text-yellow-400">
                        {ki ? ki : "Unknow"}
                    </p>




                    <p className={`text-2xl text-white font-bold `}>Max Ki :</p>
                    <p className="text-lg font-bold text-yellow-500  ">{MaxKi}</p>

                    <p className={`text-2xl text-white font-bold `}>Affiliation :</p>
                    <p className="text-lg font-bold text-yellow-500  ">{affiliation}</p>
                </div>
               
            </div>

        )
    }