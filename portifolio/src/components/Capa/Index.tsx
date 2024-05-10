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
        <main>
 <div className={quicksand.className}>
    <h1>Prazer, Sou  &nbsp;</h1>
<span>Felipe</span>
<div>
    <h2>Sou um desenvolvedor Front-end Jr, com muita vontade e determinação</h2>
    <Link href={"/contatos"}>Converse comigo!</Link>
</div>
<ul>
    <li className="bg-gray-700 text-neutral-300">
        typescript
    </li>
    <li className="bg-neutral-300 text-cyan-600">
        react
    </li>
    <li className="bg-amber-50 text-yellow-300">
        javascript
    </li>
    <li className="bg-slate-950 text-slate-50">
        next.js
    </li>
</ul>
 </div>
 <div>
    <Image className="  relative w-56 h-56 "  src={avata} alt="avatai"/>
    <p>
        <span>1+</span>
        <br/>
        anos de experiência
    </p>
 </div>

 </main>

    )
}