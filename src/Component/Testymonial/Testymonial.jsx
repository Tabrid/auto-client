import { FaStar } from "react-icons/fa";

const Testymonial = () => {
    
    return (
        <div className="flex flex-col justify-center items-center mb-10">
            <div>
                <h1 className="text-4xl font-bold text-center my-10">What People Are Saying</h1>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-5">
                <div className="card w-[370px] md:w-[300px] bg-base-100 shadow-xl" >

                    <div className="card-body py-10">
                        <img className="w-[70px]" src="https://i.ibb.co/7R9nKFL/image-48.png" alt="Shoes" />

                        <p className="mt-5">Lorem ipsum dolor sit amet duis consectetur. Nunc potenti pretium duis scelerisque at sed aliquet eget. Commodo vitae dolor sit amet duis.</p>
                        <div className="flex mt-7">
                            <FaStar className="text-yellow-400 text-[25px]" />
                            <FaStar className="text-yellow-400 text-[25px]" />
                            <FaStar className="text-yellow-400 text-[25px]" />
                            <FaStar className="text-yellow-400 text-[25px]" />
                            <FaStar className="text-yellow-400 text-[25px]" />
                        </div>
                        <div className="flex gap-5 mt-10">
                            <div className="avatar">
                                <div className="w-[60px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div>
                                <h2 className="card-title">Tommie Ewart</h2>
                                <p>Head of Marketing</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-[370px] md:w-[300px] bg-base-100 shadow-xl">

                    <div className="card-body py-10">
                        <img className="w-[70px]" src="https://i.ibb.co/7R9nKFL/image-48.png" alt="Shoes" />

                        <p className="mt-5">Lorem ipsum dolor sit amet duis consectetur. Nunc potenti pretium duis scelerisque at sed aliquet eget. Commodo vitae dolor sit amet duis.</p>
                        <div className="flex mt-7">
                            <FaStar className="text-yellow-400 text-[25px]" />
                            <FaStar className="text-yellow-400 text-[25px]" />
                            <FaStar className="text-yellow-400 text-[25px]" />
                            <FaStar className="text-yellow-400 text-[25px]" />
                            <FaStar className="text-yellow-400 text-[25px]" />
                        </div>
                        <div className="flex gap-5 mt-10">
                            <div className="avatar">
                                <div className="w-[60px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div>
                                <h2 className="card-title">Tommie Ewart</h2>
                                <p>Head of Marketing</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-[370px] md:w-[300px] bg-base-100 shadow-xl">

                    <div className="card-body py-10">
                        <img className="w-[70px]" src="https://i.ibb.co/7R9nKFL/image-48.png" alt="Shoes" />

                        <p className="mt-5">Lorem ipsum dolor sit amet duis consectetur. Nunc potenti pretium duis scelerisque at sed aliquet eget. Commodo vitae dolor sit amet duis.</p>
                        <div className="flex mt-7">
                            <FaStar className="text-yellow-400 text-[25px]" />
                            <FaStar className="text-yellow-400 text-[25px]" />
                            <FaStar className="text-yellow-400 text-[25px]" />
                            <FaStar className="text-yellow-400 text-[25px]" />
                            <FaStar className="text-yellow-400 text-[25px]" />
                        </div>
                        <div className="flex gap-5 mt-10">
                            <div className="avatar">
                                <div className="w-[60px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div>
                                <h2 className="card-title">Tommie Ewart</h2>
                                <p>Head of Marketing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testymonial;