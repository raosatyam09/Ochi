
function EyeBalls() {

  return (
    <>
    <section className='z-20 relative bg-[#CDEA68] w-full min-h-screen flex md:flex-row flex-col  items-center md:justify-center rounded-tl-3xl rounded-tr-3xl mt-16 md:mt-0' >
      <div className=" z-50 absolute ">
      <div className="w-[130px]  h-[130px] md:top-[25%] top-[40%] md:left-[30%] left-[1%] rounded-full absolute bg-white cursor-pointer">
        <div className="w-[80px] h-[80px] top-[20%] left-[20%] rounded-full absolute bg-black">
          <div className="w-[20px] h-[20px] top-[35%] left-[40%] rounded-full absolute bg-white"></div>
        </div>
      </div>

      <div className="w-[130px] h-[130px] md:top-[25%] top-[40%] md:left-[48%] left-[57%] rounded-full absolute bg-white cursor-pointer">
         <div className="w-[80px] h-[80px] top-[20%] left-[20%] rounded-full absolute bg-black">
           <div className="w-[20px] h-[20px] top-[35%] left-[35%] rounded-full absolute bg-white"></div>
      </div>
      </div>

       <h2 className="md:text-center tracking-tight md:text-9xl text-4xl uppercase font-bold mt-16 md:mt-0 " >
        Ready <br></br>
        to start <br></br>
         the project ?
        
       </h2>
       <div className="flex flex-col md:items-center md:justify-center md:mt-4 md:gap-1 gap-6 mt-65">
        <button className="md:px-6 px-8 md:py-2 py-4 bg-black text-white text-sm md:text-base font-semibold rounded-full hover:bg-neutral-800 transition duration-300 cursor-pointer"> START THE PROJECT </button>
        <p className="text-center">OR</p>
        <button className="md:px-6 px-8  md:py-1 py-4 bg-transparent border text-sm md:text-base rounded-full cursor-pointer">HELLO@OCHIDESIGN</button>
       </div>
        
       </div>
       
    </section>

       </>
  )
}

export default EyeBalls;