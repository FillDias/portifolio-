import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import devs from "@/assets/imagens/devs.png"


export const Header = () => {
return(
<>
<header>
  <Link href="/">
    <Image className=" w-22 h-22 " src={devs} 
    alt="logo"/>
  </Link>
  
</header>
  </>
)}