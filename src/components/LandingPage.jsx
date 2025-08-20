import { FaArrowUpLong } from "react-icons/fa6";
import element from '../assets/box.jpg';

function LandingPage(){
    return(
    <>
     <section className="text-black font-bold  pt-32 p-6 pb-28 font-['Nemufont']">

     <h1 className=" text-4xl md:text-8xl md:pl-8 md:tracking-tight"> WE CREATE</h1>
     <div className="flex items-center gap-2 md:px-8">
      <img src={element} className=" w-18 h-12 md:w-28 md:h-20 rounded-md" />
      <h1 className=" text-4xl md:text-8xl md:pl-2 md:tracking-tight">EYE OPENING</h1>

     </div>
     <h1 className=" text-4xl md:text-8xl md:pl-8 "> PRESENTATIONS</h1>
     
     </section>

    <div className="border-b-1 border-zinc-800 opacity-[0.7]">   
     </div>

    <div className="md:flex md:flex-row md:justify-between md:items-center pt-2 text-base text-black flex flex-col pl-4 gap-8">

        <div className="md:pl-8 pl-4 pt-4">For public and private companies </div>
        <div className="pl-4">From the first pitch to IPO </div>
        <div className="md:flex md:justify-around md:items-center gap-3  md:mr-16 flex  items-center"> 
          <div className="captalize border rounded-full p-2  hover:text-black hover:bg-white cursor-pointer font-semibold transition:transform ease-out duration-300 hover:border-none hover:outline-none hover:scale-105 ml-2"> START THE PROJECT  </div>
          <div className=" hidden md:flex rotate-45 w-8 h-8 border rounded-full items-center justify-center cursor-pointer hover:bg-white hover:text-black hover:scale-120 hover:outline-none hover:border-none transition:all ease-out duration-300 active:text-white active:bg-white"><FaArrowUpLong  /></div>  
        </div>
    </div>
     </>
 )
}
export default LandingPage;