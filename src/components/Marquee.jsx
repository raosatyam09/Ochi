
import  { motion as Motion  } from 'framer-motion';

function Marquee (){
    return(
<div className="w-full bg-[#004D43] py-6 md:py-10 rounded-t-xl mt-20 md:mt-16 text-white ">
  <div className="text-6xl border-t-2 border-b-2 border-zinc-300 md:text-9xl font-bold flex gap-10 whitespace-nowrap items-center overflow-hidden ">
   <Motion.h1 initial={{x :0}} animate={{x:"-100%"}} transition={{ease :"linear", repeat:Infinity, duration:8}} className="leading-none pt-10">WE ARE OCHI</Motion.h1>
    <Motion.h1 initial={{x:0}} animate={{x:"-100%"}}  transition={{ease :"linear", repeat:Infinity, duration:8}} className="leading-none pt-10">WE ARE OCHI</Motion.h1>
    <Motion.h1 initial={{x:0}} animate={{x:"-100%"}}  transition={{ease :"linear", repeat:Infinity, duration:8}} className="leading-none pt-10">WE ARE OCHI</Motion.h1>
  
   </div>
</div>

)
}
export default Marquee;