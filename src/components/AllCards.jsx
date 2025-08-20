
import logo from '../assets/logo.png';

function AllCards () {
    return(
        <section className="w-full min-h-screen flex md:flex-row flex-col gap-8 items-center md:justify-around pt-8 md:pt-0">
            <div className="md:w-[450px] w-[250px] bg-[#004D43] rounded-md h-64 flex items-center justify-center font-bold text-7xl text-[#CDEA68] shadow-2xl shadow-black-200/80"> ochi </div>
            <div className="md:w-[250px] w-[250px] bg-[#212121]  rounded-md h-64 font-semibold text-4xl text-white flex items-center justify-center pt-16 shadow-lg"> Clutch </div>
            <div className="md:w-[250px] w-[250px] bg-[#212121] rounded-md h-64 flex items-center justify-center shadow-lg"> 
            <img  className="rounded-md w-[80px] " src={logo} />
            </div>
        </section>

    )
}
export default AllCards;