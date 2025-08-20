import two from '../assets/two_couple.jpg';

function GreenPage (){

    return(
          <main className="bg-[#CDEA68] text-black min-h-screen w-full">
      <div className="text-4xl md:pl-8 pl-4 pt-8">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and
        hire great peo­ple.
      </div>

      <div className="border-b-1 border-black opacity-[0.9] w-full h-[0.2vh]  mt-16"></div>
      <div className="flex md:flex-row md:justify-between md:gap-10 flex-col p-2">
        <div className=" pl-4 pl-4 pt-2"> What you can expect:</div>
        <div className="w-[300px] text-center pt-4 pl-4">
          We partner with the companies and startups who make the world go round
          — they drive the net-zero economy, revolutionize crypto treasury
          management, build photonic chips, and open Michelin-starred
          restaurants. We believe the mix of strategy and design (with a bit of
          coffee) is what makes your message clear, convincing, and captivating.
        </div>

        <div className=" flex flex-col md:p-2 md:pr-8 md:pt-8 md:pl-4  cursor-pointer pl-4 pt-8  ">
          {/* <ul> */}
            <a className='p-1 hover:text-[#fff] active:text-[#fff] font-medium' href="https://www.instagram.com/ochi_design/"> Instagram </a>
            <a  className='p-1 hover:text-[#fff] active:text-[#fff] font-medium' href="https://www.behance.net/ochi_design"> Behance </a>
            <a className='p-1 hover:text-[#fff] active:text-[#fff] font-medium' href="https://www.facebook.com/profile.php?id=103605044779378&hr=1&wtsid=rdr_04gc13v9xH0o4rglL"> Facebook</a>
            <a className='p-1 hover:text-[#fff] active:text-[#fff] font-medium' href="https://www.linkedin.com/company/56403597">Linkedin</a>
          {/* </ul> */}
        </div>
      </div>









      <div className="border-b-1 border-black opacity-[0.9] w-full h-[0.2vh] mt-16 "></div>


      <div className='flex lg:flex-row md:flex-row md:justify-between  w-full max-w-6xl mx-auto px-4 py-12 md:gap-16 '>

        <div className='lg:w-[1/2] p-4 absolute z-[999] md:static'> 
        <h1 className='text-3xl font-bold mb-4 text-center'> Our approach</h1>
        <button className='px-6 my-24  py-2 bg-black text-white rounded hover:bg-zinc-800 transition-transform ease-out duration-300 hover:scale-105 cursor-pointer'> READ MORE</button>
        </div>

        <div className=' lg:w-1/2 relative md:static'> 
            <img src={two} alt="founders" className='w-full h-auto object-cover rounded-lg shadow-md '/>
        </div>
      </div>
    </main>
    )
}
export default GreenPage;