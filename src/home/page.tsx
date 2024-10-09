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

}

const Home = () => {

  const [characters, setCharacters] = useState<IData[]>([])


  useEffect(() => {
      const load = async () => {
          const res = await fetch("https://dragonball-api.com/api/characters?page=2");
          const data = await res.json(); 
          setCharacters(data.items);
          console.log(data.items);
          
      }
      load();
  }, [])



  return (
   <>

    {characters.map((item,index)=>{
      return(
        
           <div key={index}>
            <CardAPI name={item.name} image={item.image} ki={item.ki} affiliation={item.affiliation} gender={item.gender} race={item.race}></CardAPI>
           </div>
      )
    })}
   </>

  );
}

export default Home