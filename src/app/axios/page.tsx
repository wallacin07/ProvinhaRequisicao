"use client"

import { CardAPI } from "@/components/cardAPI";
import { useEffect, useState } from "react";
import {api} from "@/constants/apis"

interface IData{
  id: string;
  name: string;
  image: string;
  ki: string;
  affiliation: string;
  gender: string;
  race: string

}

const Axios = () => {

  const [data, setData] = useState<IData[]>([])
  const [erro, setErro] = useState<boolean>(false)
  const [page, setPage] = useState<string>("1")

  useEffect(() => {
    api.get(`/characters?page=${page}`).then((res) => {
      setErro(false)
      setData(res.data.items)
      if (res.data.items.length === 0) {
        setErro(true)
      }
    })
  }, [page])

  

  return (
   <>
    <div className="flex flex-col justify-center items-center">
    <input type="text" onChange={(e) => setPage(e.target.value)} value={page} placeholder="Insira a Pagina" />
    {erro && <h5>Não foi possivel buscar os dados</h5>}
    {data.map((item,index)=>{
      return(
        
           <div key={index} className="mt-20">
            <CardAPI name={item.name} image={item.image} ki={item.ki} affiliation={item.affiliation} gender={item.gender} race={item.race}></CardAPI>
           </div>
      )
    })}
    </div>
   </>

  );
}

export default Axios