
const Footer = () => {
    return(
        <footer  className="w-full min-h-screen bg-[#f5f5f5] flex md:flex-row flex-col md:justify-between">
           <div className="flex flex-col justify-between py-4">
           <div className="text-[4.5rem] md:text-[5rem]  font-extrabold tracking-tight  px-6 py-1 md:py-2 leading-[0.9]">EYE-<br></br> OPENING</div>
           <p className="text-3xl font-semibold px-6 py-8 hidden md:block">Ochi</p>
           </div>

           <div>
            <div className="md:text-[3.8rem] pl-2 text-5xl md:px-8 md:py-4  md:font-extrabold  tracking-tighter">PRESENTATIONS</div>
            
            <div className="flex flex-col w-full text-left px-2 py-4"> <p className="mx-2 mb-4">S:</p> 
            <button className=" px-2 text-left underline cursor-pointer">Instagram</button>
            <button className=" px-2 text-left underline cursor-pointer">Behance</button>
            <button className=" px-2 text-left underline cursor-pointer">Facebook</button>
            <button className="px-2 text-left underline cursor-pointer" >Linkedin</button>
            </div>


      <div className="flex justify-between">
              <div className="flex flex-col w-full text-left px-2 py-4"> <p className="mx-2 mb-4">L:</p> 
            <button className=" px-2 text-left underline cursor-pointer">202-1965 W 4th Ave</button>
            <button className=" px-2 text-left underline cursor-pointer mb-4">Vancouver, Canada</button>
            <button className=" px-2 text-left underline cursor-pointer">30 Chukarina St</button>
            <button className="px-2 text-left underline cursor-pointer" >Lviv, Ukraine</button>
            </div>

             <div className="flex flex-col w-full text-left px-2 py-4"> <p className="mx-24 mb-4">M:</p> 
            <button className=" px-2 text-center underline cursor-pointer">HOME</button>
            <button className=" px-2 text-center underline cursor-pointer">SERVICES</button>
            <button className=" px-2 text-center underline cursor-pointer">OUR work</button>
            <button className="px-2 text-center underline cursor-pointer" >About us</button>
            <button className="px-2 text-center underline cursor-pointer" >Insights</button>
            <button className="px-2 text-center underline cursor-pointer" >Contact us</button>

            </div>
     </div>
            
            <div className="md:py-8 ">  
                <p className="mb-4 px-4">E:</p>
                <button className="underline cursor-pointer px-4">hello@ochi.design</button>
            </div>


           </div>
      <p className="text-3xl font-semibold px-4 py-2 md:hidden block">Ochi</p>

        </footer>
    )
}
export default Footer;