import { MdArrowOutward } from "react-icons/md";
import { MdOutlineArrowOutward } from "react-icons/md";
const Service = () => {
    return (
        <div className="flex md:min-h-fit md:py-10 flex-col justify-center items-center bg-slate-200">
            <div>
                <h1 className="text-4xl font-bold text-center my-10">Our Best Services</h1>
            </div>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="card  lg:w-[540px] md:w-[480px] w-[350px] bg-base-100 shadow-xl">
                    <figure><img className="w-[70px] mt-7" src="https://i.ibb.co/HdK4CvM/image.png" alt="Shoes" /></figure>
                    <div className="card-body flex flex-col justify-center items-center mb-7">
                        <h2 className="card-title">Website Design</h2>
                        <p>We design & develop smarter websites that reach your target audience, increase sales and customer retention rate. Our highly-innovative and responsive web designs have 70% more engagement rate than our competitors. We have hands-on experience in WordPress, Joomla, Drupal and Magento web design and development.</p>
                        <h2 className="card-title">Learn More<MdArrowOutward /> </h2>

                    </div>
                </div>
                <div className="card card-compact lg:w-[540px] md:w-[480px] w-[350px] bg-base-100 shadow-xl">
                    <figure><img className="w-[70px] mt-7" src="https://i.ibb.co/Kmd9Bv2/image.png" alt="Shoes" /></figure>
                    <div className="card-body flex flex-col justify-center items-center mb-7">
                        <h2 className="card-title">UI UX Design</h2>
                        <p>We design & develop smarter websites that reach your target audience, increase sales and customer retention rate. Our highly-innovative and responsive web designs have 70% more engagement rate than our competitors. We have hands-on experience in WordPress, Joomla, Drupal and Magento web design and development.</p>
                        <h2 className="card-title">Learn More<MdArrowOutward /> </h2>

                    </div>
                </div>
                <div className="card card-compact lg:w-[540px] md:w-[480px] w-[350px] bg-base-100 shadow-xl">
                    <figure><img className="w-[70px] mt-7" src="https://i.ibb.co/gZTHnqt/image.png" alt="Shoes" /></figure>
                    <div className="card-body flex flex-col justify-center items-center mb-7">
                        <h2 className="card-title">Digital Marketing</h2>
                        <p>We design & develop smarter websites that reach your target audience, increase sales and customer retention rate. Our highly-innovative and responsive web designs have 70% more engagement rate than our competitors. We have hands-on experience in WordPress, Joomla, Drupal and Magento web design and development.</p>
                        <h2 className="card-title">Learn More<MdArrowOutward /> </h2>

                    </div>
                </div>
                <div className="card card-compact lg:w-[540px] md:w-[480px] w-[350px] bg-base-100 shadow-xl">
                    <figure><img className="w-[70px] mt-7" src="https://i.ibb.co/19d41Cg/image.png" alt="Shoes" /></figure>
                    <div className="card-body flex flex-col justify-center items-center mb-7">
                        <h2 className="card-title">Web Development</h2>
                        <p>We design & develop smarter websites that reach your target audience, increase sales and customer retention rate. Our highly-innovative and responsive web designs have 70% more engagement rate than our competitors. We have hands-on experience in WordPress, Joomla, Drupal and Magento web design and development.</p>
                        <h2 className="card-title">Learn More<MdArrowOutward /> </h2>

                    </div>
                </div>
            </div>
            <div className="my-10">
                <button className=" font-[Inter] text-center w-[200px] md:w-[480px] mt-10 h-10 bg-[#0198FE] hover:bg-[#0198FE] rounded-[36px] text-white flex items-center justify-center">More Services <MdOutlineArrowOutward /></button>
            </div>
        </div>
    );
};

export default Service;