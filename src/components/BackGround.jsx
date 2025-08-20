
import background from '../assets/background_bubble.jpg';

function BackGround (){

    return(
       
<section className="bg-[#f6f6f6] md:min-h-screen w-full overflow-hidden" >
       <div className='relative'>
          <div className=' w-[1/2] h-auto'> <img src ={background} className=""></img>   </div>
            {/* <div className=''>   */}
            <div className='absolute w-25 h-25 top-[30%] left-[22%] md:left-[35%] rounded-full md:w-45 md:h-45 bg-[#F4F4F4] flex items-center justify-center'>
                <div className='top-[50%] left-[50%] w-2/3 h-2/3 rounded-full bg-black opacity-[0.87] flex items-center justify-center '>
                  <div className=' line w-full md:h-10  rounded-md rotate-12 flex items-center justify-center'>
                  <div className='md:w-8 md:h-8 w-4 h-4 m-1 bg-white rounded-full'></div>
                  </div>
                 </div>
                
             </div>
            <div className="absolute w-25 h-25  top-[30%] left-[52%] rounded-full md:w-45 md:h-45 bg-[#F4F4F4] flex items-center justify-center">
                <div className='top-[40%] left-[40%] w-2/3 h-2/3 rounded-full bg-black opacity-[0.87] flex items-center justify-center'> 
            {/* line here */}
           <div className=' line w-full md:h-10  rounded-md rotate-12 flex items-center justify-center'>

              <div className='md:w-8 md:h-8 w-4 h-4 m-1 bg-white rounded-full'></div>
            </div>
                 </div>    
             </div>
            {/* </div>  */}
       </div>

</section>
      
    )
}
export default BackGround;