import Image from "next/image"
import Link from "next/link"
import avata from "@/assets/imagens/avata.jpg"
import {Quicksand} from 'next/font/google'
const quicksand = Quicksand({
    subsets: ['latin'],
    weight: '500'
}

)

export const Capa = () => {
    return(
        <main className="flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 py-8 text-lg text-center xl:text-left xl:flex-nowrap xl:justify-between">
 <div className=" text-black flex flex-col items-center xl:items-start gap-4 w-full xl:w-120">
    <h1 className="text-3xl sm:text-7xl xl:leading-[80px]">Prazer, Sou&nbsp;
    <span className="font-bold">Felipe</span>
    </h1>

<div className="mb-12">
    <h2 className="mb-12 {quicksand.className}" >Sou um desenvolvedor Front-end Jr, com muita vontade e determinação</h2>
    <Link href={"/contatos"} className="p-3 bg-slate-300 w-fit text-xl rounded-lg transition-all hover:bg-opacity-85">Converse comigo!</Link>
</div>
<ul className="flex flex-wrap justify-center xl:grid xl:grid-cols-2 xl:w-fit gap-3 text-xl">
    <li className="bg-gray-700 text-neutral-300 w-fit p-2 rounded-md">
        typescript
    </li>
    <li className="bg-neutral-300 text-cyan-600 w-fit p-2 rounded-md">
        react
    </li>
    <li className="bg-[#fafcd1] text-yellow-300 w-fit p-2 rounded-md">
        javascript
    </li>
    <li className="bg-slate-950 text-slate-50 w-fit p-2 rounded-md">
        next.js
    </li>
</ul>
 </div>
 <div className="relative ">
    <Image className="  relative rounded-full "  src={avata} alt="avatai"/>
    <p className="p-4 w-fit rounded-md text-base leading-tight bg-[#93965b] text-black absolute -botton-[12px] sm:botton-3 ">
        <span className="text-4xl">1+</span>
        <br/>
        anos de experiência
    </p>
 </div>

 </main>

    )
}