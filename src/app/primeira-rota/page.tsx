"use client"

import { CardAPI } from "@/components/cardAPI";
import Footer from "@/components/footer";
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
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
          if(page > 6){
            setPage(6)
          }else if(page < 1){
            setPage(1);
          }
      const load = async () => {
          
          const res = await fetch(`https://dragonball-api.com/api/characters?page=${page}`);
          const data = await res.json(); 
          setCharacters(data.items);
          console.log(data.items);
          
      }
      load();
  }, [page])



  return (
   <>

   <Suspense fallback={<p>Loading Images...</p>}>
   
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center w-full h-full">
      {characters.map((item,index)=>{
        return(
          
            <div key={index} className="mt-20">
              <CardAPI name={item.name} image={item.image} ki={item.ki} affiliation={item.affiliation} gender={item.gender} race={item.race} MaxKi={item.maxKi}></CardAPI>
            </div>
        )
      })}
      </div>
      <Footer currentPage={page} totalPages={6} setPage={setPage}></Footer>
   </Suspense>
   </>

  );
}

export default fetchNative