import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Team = () => {
    return (
        <div className="flex flex-col justify-center items-center p-10 bg-slate-200">
            <div>
                <h1 className="text-4xl font-bold text-center my-10">Our Team Member</h1>
            </div>
            <div className=" grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="card card-side   rounded-none">
                <figure><img src="https://i.ibb.co/2nszKQY/image.png" alt="Movie" className="w-[170px] h-[210px]"/></figure>
                <div className="card-body my-5">
                    <div className="flex gap-5">
                        <FaFacebook className="text-[#0198FE] text-[25px]" />
                        <FaLinkedin className="text-[#0198FE] text-[25px]" />
                        <FaInstagram className="text-[#0198FE] text-[25px]" />
                    </div>
                    <h1 className="text-3xl font-bold">New movie is released!</h1>
                    <h6 className=" text-[#0198FE]">New movie is released!</h6>

                    <p>Lead the team of passionate developers,
                        designers and the strategists with a thought.</p>
                </div>
            </div>
            <div className="card card-side   rounded-none">
                <figure><img src="https://i.ibb.co/2nszKQY/image.png" alt="Movie" className="w-[170px] h-[210px]"/></figure>
                <div className="card-body my-5">
                    <div className="flex gap-5">
                        <FaFacebook className="text-[#0198FE] text-[25px]" />
                        <FaLinkedin className="text-[#0198FE] text-[25px]" />
                        <FaInstagram className="text-[#0198FE] text-[25px]" />
                    </div>
                    <h1 className="text-3xl font-bold">New movie is released!</h1>
                    <h6 className=" text-[#0198FE]">New movie is released!</h6>

                    <p>Lead the team of passionate developers,
                        designers and the strategists with a thought.</p>
                </div>
            </div>
            <div className="card card-side   rounded-none">
                <figure><img src="https://i.ibb.co/2nszKQY/image.png" alt="Movie" className="w-[170px] h-[210px]"/></figure>
                <div className="card-body my-5">
                    <div className="flex gap-5">
                        <FaFacebook className="text-[#0198FE] text-[25px]" />
                        <FaLinkedin className="text-[#0198FE] text-[25px]" />
                        <FaInstagram className="text-[#0198FE] text-[25px]" />
                    </div>
                    <h1 className="text-3xl font-bold">New movie is released!</h1>
                    <h6 className=" text-[#0198FE]">New movie is released!</h6>

                    <p>Lead the team of passionate developers,
                        designers and the strategists with a thought.</p>
                </div>
            </div>
            <div className="card card-side   rounded-none">
                <figure><img src="https://i.ibb.co/2nszKQY/image.png" alt="Movie" className="w-[170px] h-[210px]"/></figure>
                <div className="card-body my-5">
                    <div className="flex gap-5">
                        <FaFacebook className="text-[#0198FE] text-[25px]" />
                        <FaLinkedin className="text-[#0198FE] text-[25px]" />
                        <FaInstagram className="text-[#0198FE] text-[25px]" />
                    </div>
                    <h1 className="text-3xl font-bold">New movie is released!</h1>
                    <h6 className=" text-[#0198FE]">New movie is released!</h6>

                    <p>Lead the team of passionate developers,
                        designers and the strategists with a thought.</p>
                </div>
            </div>
            
            </div>
        </div>
    );
};

export default Team;