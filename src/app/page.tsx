"use client"

import { CardAPI } from "@/components/cardAPI";
import { useEffect, useState } from "react";

interface IData{
  id: string;
  name: string;
  image: string;
  ki: string;
  affiliation: string;
  gender: string;
  race: string
  maxKi: string
}

const Home = () => {

  const [characters, setCharacters] = useState<IData[]>([])


  useEffect(() => {
      const load = async () => {
          const res = await fetch("https://dragonball-api.com/api/characters");
          const data = await res.json(); 
          setCharacters(data.items);
          console.log(data.items);
          
      }
      load();
  }, [])



  return (
   <>
    <div className="flex flex-col justify-center items-center">
    {characters.map((item,index)=>{
      return(
        
           <div key={index} className="mt-20 rounded-xl">
            <CardAPI name={item.name} image={item.image} ki={item.ki} affiliation={item.affiliation} gender={item.gender} race={item.race} MaxKi={item.maxKi}></CardAPI>
           </div>
      )
    })}
    </div>
   </>

  );
}

export default Home