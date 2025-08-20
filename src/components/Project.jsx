import Lab from '../assets/Salience_Website_cover-1326x1101.png';
import Space from '../assets/CS_Website_1-1326x1101.png';
import Frame from '../assets/Frame-481692-1-1326x1101.png';
import Frameset from '../assets/Fyde_Front-1-1326x1101.png';
import Coin from '../assets/coin.png';
import All from '../assets/allthings.png';
import onboard from '../assets/onboard.jpg';
import evaluation from '../assets/evaluation.png';

function Project() {
    return(

  <section className=" min-h-screen bg-blue-400 w-full overflow-hidden rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl rounded-br-3xl">
    <h1 className="md:pl-12 pt-4 md:text-5xl text-3xl pl-4"> Featured projects</h1>

    <div className="border mt-8 bg-zinc-400"> </div>
    <div className=" w-full md:min-h-screen flex md:flex-row flex-col md:justify-around items-center">

    <div className='flex flex-col'>
     <div className=' rounded-md cursor-pointer md:my-2 md:my-4 px-6 pt-4 flex hover:scale-95 transition-all duration-500  relative'>
     <img className="rounded-md md:w-[500px] md:h-[400px] w-[300px] h-[250px] object-cover " src={Lab} />
     <div className='text-7xl font-bold w-full flex items-center absolute  text-[#CDEA68] absolute inset-0 hover:inset-1 hover:transition-transform duration-500 top-[40%] left-[10%]'>
     </div>
     </div>
     <div className='flex gap-4 mx-8'>
        <button className='border rounded-full p-2 cursor-pointer my-4 md:my-0'>BRAND IDENTITY</button>
        <button className='border rounded-full p-2 cursor-pointer my-4 md:my-0'>PITCH DECK</button>
     </div>
     </div>

{/* creting another div */}
 
          <div className='flex flex-col items-center'>
     <div className=' rounded-md my-2 cursor-pointer hover:scale-95 transition-transform duration-600'>
     <img className="rounded-md md:w-[500px] md:h-[400px] w-[300px] h-[250px] " src={Space} />
     <div className='text-6xl font-bold w-full flex items-center  text-[#CDEA68] absolute inset-0 hover:inset-1 hover:transition-transform duration-500 top-[40%] right-[90%]'>
     </div>
     </div>
     <div className='flex md:flex-row flex-col gap-4 md:gap-4 md:mx-8'>

        <button className='border rounded-full p-2 cursor-pointer my-2 md:my-0'>BRAND TEMPLATE</button>
        <button className='border rounded-full p-2 cursor-pointer  md:my-0'>SALES DECK</button>
        <button className='border rounded-full p-2 cursor-pointer my-2  md:my-0'>SOCIAL MEDIA TEMPLATE</button>

     </div>
   </div>

{/* creating another div */}
  
  </div>

    <div className=" w-full md:min-h-screen flex md:flex-row flex-col md:justify-around items-center">
    <div className='flex flex-col items-center md:items-start'>
     <div className=' rounded-md cursor-pointer my-2 flex hover:scale-95 transition-all duration-500  relative'>
     <img className="rounded-md md:w-[500px] md:h-[400px] w-[300px] h-[250px] object-cover " src={Frame} />
     <div className='text-7xl font-bold w-full flex items-center absolute  text-[#CDEA68] absolute inset-0 hover:inset-1 hover:transition-transform duration-500 top-[40%] left-[10%]'>
     </div>
     </div>
      
     </div>
     <div className='flex mx-8'>
        <button className='border rounded-full p-2 cursor-pointer'>PITCH DECK</button>
     </div>

{/* creting another div */}
 
          <div className='flex flex-col items-center md:items-center'>
     <div className=' rounded-md my-2 cursor-pointer hover:scale-95 transition-transform duration-600'>
     <img className="rounded-md md:w-[500px] md:h-[400px] w-[300px] h-[250px]" src={Frameset} />
     <div className='text-6xl font-bold w-full flex items-center  text-[#CDEA68] absolute inset-0 hover:inset-1 hover:transition-transform duration-500 top-[40%] right-[90%]'>
     </div>
     </div>


     <div className=' grid grid-cols-2 md:flex md:flex-row my-4 gap-4 md:gap-4 md:mx-8'>
        <button className='border rounded-full p-2 cursor-pointer '>AUDIT</button>
        <button className='border rounded-full p-2 cursor-pointer'>COPYWRITING</button>
        <button className='border rounded-full p-2 cursor-pointer'>SALES DECK</button>
       <button className='border rounded-full p-2 cursor-pointer'>SLIDES DESIGN</button>
     </div>

   </div>
  
    </div>

{/* CREATING ANOTHER DIV */}

    
    <div className=" w-full md:min-h-screen flex md:flex-row flex-col md:justify-around items-center">
    <div className='flex flex-col items-center md:items-start'>
     <div className=' rounded-md cursor-pointer my-2 flex hover:scale-95 transition-all duration-500  relative'>
     <img className="rounded-md md:w-[500px] md:h-[400px] w-[300px] h-[250px] object-cover" src={Coin} />
     <div className='text-7xl font-bold w-full flex items-center absolute  text-[#CDEA68] absolute inset-0 hover:inset-1 hover:transition-transform duration-500 top-[40%] left-[10%]'>
     </div>
     </div>
     <div className='flex gap-4 mx-8 my-4 md:my-0'>
        <button className='border rounded-full p-2 cursor-pointer '>AGENCY</button>
       <button className='border rounded-full p-2 cursor-pointer'>COPY PRESENTATION</button>

     </div>
     </div>

 
       <div className='flex flex-col items-center md:items-start'>
     <div className=' rounded-md my-2 cursor-pointer hover:scale-95 transition-transform duration-600'>
     <img className="rounded-md md:w-[500px] md:h-[400px] w-[300px] h-[250px] " src={All} />
     <div className='text-6xl font-bold w-full flex items-center  text-[#CDEA68] absolute inset-0 hover:inset-1 hover:transition-transform duration-500 top-[40%] right-[90%]'>
     </div>
     </div>
     <div className='flex gap-4 mx-8 my-4 md:my-0'>

        <button className='border rounded-full p-2 cursor-pointer'>BRAND IDENTITY</button>
        <button className='border rounded-full p-2 cursor-pointer'>PITCH DECK</button>

     </div>
   </div>
    </div>
    
{/* creting another div */}

      <div className=" w-full md:min-h-screen flex md:flex-row flex-col md:justify-around items-center">
    <div className='flex flex-col items-center md:items-start'>
     <div className=' rounded-md cursor-pointer my-2 flex hover:scale-95 transition-all duration-500  relative'>
     <img className="rounded-md md:w-[500px] md:h-[400px] w-[300px] h-[250px] object-cover " src={onboard} />
     <div className='text-7xl font-bold w-full flex items-center absolute  text-[#CDEA68] absolute inset-0 hover:inset-1 hover:transition-transform duration-500 top-[40%] left-[10%]'>
     </div>
     </div>
     <div className='flex gap-4 mx-8 my-2 md:my-0'>
        <button className='border rounded-full p-2 cursor-pointer'>BRAND TEMPLATE</button>
     </div>
     </div>

          <div className='flex flex-col items-center md:items-start'>
     <div className=' rounded-md my-2 cursor-pointer hover:scale-95 transition-transform duration-600'>
     <img className="rounded-md md:w-[500px] md:h-[400px] w-[300px] h-[250px]" src={evaluation} />
     <div className='text-6xl font-bold w-full flex items-center  text-[#CDEA68] absolute inset-0 hover:inset-1 hover:transition-transform duration-500 top-[40%] right-[90%]'>
     </div>
     </div>
     <div className='flex gap-4 mx-8 my-4 md:my-0'>

        <button className='border rounded-full p-2 cursor-pointer '>BRAND TEMPLATE</button>
        <button className='border rounded-full p-2 cursor-pointer'>SALES DECK</button>

     </div>
   </div>
    </div>
    </section>
    )
}
export default Project;