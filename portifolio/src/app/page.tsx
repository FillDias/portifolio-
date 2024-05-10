
import { Capa } from "@/components/Capa/Index";
import { Header } from "@/components/Header";
import Link from "next/link";
import React from "react";
import {Dosis} from 'next/font/google'

const dosis = Dosis({
  subsets: ['latin'],
  weight: '500'
}

)


export default function Home ()  {
  return (
  <>
   
  
    <div className={dosis.className}>
      <title>Sobre min / Felipe</title>
      <meta name="description" content="Sou um desenvolvedor Front-end Jr, com muita vontade e determinação."/>
      <Link href={"/contatos"}>Ir para a pagina contatos</Link>
      
    </div>
    <Header/>
    <Capa/>
      </>
  );
}
 