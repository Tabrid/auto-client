

const Domain = () => {
    return (
        <div className="p-20">
            <div className="hero bg-base-200 ">
                <div className="hero-content text-center">
                    <div className="w-full">
                        <h1 className="text-4xl font-bold">Make more online, for less</h1>
                        <div className="flex items-center justify-center text-white mt-5">
                            <h1 className="h-[54px] w-[150px] bg-[#0198FE] p-4 rounded-l-3xl ">Register</h1>
                            <h1 className="h-[54px] w-[150px] bg-[#AEACAC] p-4 rounded-r-3xl">Transfer</h1>
                        </div>
                        <div className="join w-[1000px] flex justify-center items-center mt-10 rounded-3xl">
                            <input type="text" placeholder="Register a domain name to start" className="input input-bordered join-item w-[800px]" />
                            <button className="btn bg-[#0198FE] hover:bg-[#0198FE] text-white join-item w-[200px]">Search</button>
                        </div>
                        <div className="flex justify-center gap-10 text-lg font-bold my-10">
                            <h1><span className="underline text-xl font-bold">.COM</span> only $6.78*</h1>
                            <h1><span className="underline text-xl font-bold">.NET</span> only $12.84*</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Domain;