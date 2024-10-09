"use client"

import { CardAPI } from "@/components/cardAPI";
import { Suspense, useEffect, useState } from "react";

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

const fetchNative = () => {

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
   <Suspense fallback={<p>Loading Images...</p>}>

      <div className="flex flex-col justify-center items-center  md:flex-row md:flex-wrap">
      {characters.map((item,index)=>{
        return(
          
            <div key={index} className="mt-20">
              <CardAPI name={item.name} image={item.image} ki={item.ki} affiliation={item.affiliation} gender={item.gender} race={item.race} MaxKi={item.maxKi}></CardAPI>
            </div>
        )
      })}
      </div>



   </Suspense>
   </>

  );
}

export default fetchNative