import Image from "next/image";

interface ICardAPI{
    name: string;
    image: string;
    ki: string;
    affiliation: string;
    gender: string;
    race: string
  
  }

export const CardAPI:React.FC<ICardAPI> = ({image,name,ki,affiliation,gender,race}) =>
    {
        return (      
            
            // dados.map(item,index) => ()
            <div className="h-[36rem] w-80 rounded-xl shadow-xl m-6 ">
                {/* header */}
                <div className="h-3/6 w-full z-20 flex justify-center items-center">
                    <Image src={image} width={3000} height={3000} alt="sla" className="transition ease-in-out delay-300  hover:-translate-y-1 rounded-t-xl w-[12rem] h-[20rem] hover:scale-125 z-10"/>
                </div>

                {/* Body */}
                <div className="h-3/6 w-full items-center justify-center flex flex-col p-5 bg-slate-200 z-0">
                    <p className="text-3xl font-bold"> {name}</p>
                    <p className=" mt-3 text-xl font-bold  text-gray-800 text-center">KI</p>
                    <p className="mt-3 text-lg font-semibold  text-gray-600 text-center">
                        {ki ? ki : "Unknow"}
                    </p>
                    <p className="text-2xl font-bold  text-gray-100 text-center "> Gender</p>
                    <p className="text-sm font-semibold text-gray-200 text-center opacity-80 ">{gender}</p>

                    <p className={`text-2xl font-bold  text-gray-100 text-center `}>race</p>
                    <p className="text-sm font-semibold text-gray-200 text-center opacity-80 ">{race}</p>
                </div>
               
            </div>

        )
    }