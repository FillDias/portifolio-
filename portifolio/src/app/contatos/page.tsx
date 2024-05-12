import Head from "next/head";


const Contatos = () => {
    return (
      <>
      
      
    <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32">
      <h1 className="text-5xl md:text-7xl font-bold text-center text-black">Contatos</h1>
      <ul className="table mx-auto space-y-6 md:space-y-8">
        <li className="md:text-xl">
          <span className="font-bold text-black">E-mail</span>
          <div className="flex gap-1 md:gab-3 items-center">
            <a href="mailto:felipedevcar@gmail.com" className="text-sm md:text-lg text-[#93965b] underline truncate"
            >
              felipedevcar@gmail.com
              </a>
          </div>
        </li>
      
      
        <li className="md:text-xl">
          <span className="font-bold text-black">Linkedin</span>
          <div className="flex gap-1 md:gab-3 items-center ">
            <a href="https://www.linkedin.com/in/felipe-dias-280950248/" className="text-sm md:text-lg text-[#93965b] underline truncate">https://www.linkedin.com/in/felipe-dias-280950248/</a>
          </div>
        </li>
      
      
        <li className="md:text-xl">
          <span className="font-bold text-black">Github</span>
          <div className="flex gap-1 md:gab-3 items-center">
            <a href="https://github.com/FillDias" className="text-sm md:text-lg text-[#93965b] underline truncate">https://github.com/FillDias</a>
          </div>
        </li>
      </ul>
    </div>
   
    </>
  )
  }
  
  export default Contatos;