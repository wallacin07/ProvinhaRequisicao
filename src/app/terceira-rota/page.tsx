
import { CardServer } from "@/components/cardServer";
import Footer from "@/components/footer";
import Link from "next/link";
import { Suspense } from "react"

type IData = {
    items: {
      id: string;
      name: string;
      image: string;
      race: string;
      gender: string
      affiliation: string;
    }[]
}


const ServerSide = async () =>
  { 
    const res = await fetch(`https://dragonball-api.com/api/characters`)
    const data: IData = await res.json()

    return(
      <>

      <Suspense fallback={<div>Loading...</div>}></Suspense>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center">
        {data.items.map((item,index) => {
          return(
            <div key={index}>
              <CardServer name={item.name} image={item.image} gender={item.gender} race={item.race} affiliation={item.affiliation} path={`/perso/${item.id}`}></CardServer>
            </div>

          )
        })}
      </div>
  
      </>

    )
  }

  export default ServerSide