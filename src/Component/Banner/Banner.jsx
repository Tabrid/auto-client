import { MdOutlineArrowOutward } from "react-icons/md";
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen md:min-h-fit md:py-10 bg-[#E8F6FF]">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="lg:w-1/2 md:w-1/2 sm:w-full">
                        <img src="https://i.ibb.co/NtKXwrk/image-67.png" className="w-[500px] h-[400px] rounded-lg shadow-2xl" />
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 sm:w-full lg:p-16 md:p-16 flex">
                        <div>
                            <h1 className="text-5xl font-bold w-[300px] ">Elevate Your <br /> Business<br />
                                With <span className="text-5xl font-bold text-[#0198FE] ">IT</span><br />
                                Solutions
                            </h1>

                            <button className=" font-[Inter] text-center w-[200px] mt-10 h-10 bg-[#0198FE] hover:bg-[#0198FE] rounded-[36px] text-white flex items-center justify-center">GET STARTED <MdOutlineArrowOutward /></button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;