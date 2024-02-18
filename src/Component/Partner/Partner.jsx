import { MdOutlineArrowOutward } from "react-icons/md";

const Partner = () => {
    return (
        <div className="lg:p-20 md:p-0">
            <div className="hero  bg-base-200 p-10">
                <div className="hero-content text-center">
                    <div className="lg:max-w-md md:max-w-md sm:w-full">
                        <h1 className="text-5xl font-bold">Partner with us</h1>
                        <p className="py-6">Looking for a new technology partner and need a request for proposal? We’d love to hear from you! Please get in touch and send your RFP documents.</p>
                        <button className="btn bg-[#0198FE] hover:bg-[#0198FE] px-10 rounded-3xl text-white">Let&apos;s Collaborate <MdOutlineArrowOutward/> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partner;