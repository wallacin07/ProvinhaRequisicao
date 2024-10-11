"use client"

import { CardAPI } from "@/components/cardAPI";
import { useEffect, useState } from "react";
import Image from "next/image";

const Home = () => {





  return (
   <>
    <div className="min-h-screen h-auto  flex flex-col items-center  bg-zinc-600 px-8">
    <Image src={"https://web.dragonball-api.com/images-compress/logo_dragonballapi.webp"} width={5000} height={5000} priority className="mt-12  md:w-[48rem] h-auto" alt={""}></Image>
    <p className="mt-20 text-center font-semibold text-white text-2xl md:text-4xl mb-8">Bem vindo ao site da prova da API e Requests com Next</p>
    <p className="text-center font-semibold text-white md:text-2xl text-xl">Sinta se a vontade para testar tudo</p>
    </div>
   </>

  );
}

export default Home