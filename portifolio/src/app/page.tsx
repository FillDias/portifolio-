
import { Capa } from "@/components/Capa/Index";
import { Header } from "@/components/Header";

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
      
      
    </div>
    <Header/>
    <div className="py-12 px-6 md:px-32 space-y-10">
    <Capa/>
    </div>
      </>
  );
}
 