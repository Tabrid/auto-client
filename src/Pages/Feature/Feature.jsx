

const Feature = () => {
    const productionData = {
        productionLine: 'Cutter#01',
        lastUpdateTime: '18/02/2024 12:45:04',
        runningProduct: 'FW400',
        todayProduction: '15,320',
        yesterdayProduction: '33,000'
    };
    return (
        <div className="m-5">
            <div className="flex flex-col lg:flex-row md:flex-row gap-24 mb-10">
                <div className="border border-slate-950 lg:w-1/2 md:w-1/2 h-96 w-full">
                    <div className="my-10 flex items-center justify-center">
                        <div className="  px-4 py-8 bg-white shadow-md rounded-lg">
                            <h1 className="text-2xl font-bold mb-4">Production Information</h1>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <div className="font-bold">Production Line</div>
                                    <div>{productionData.productionLine}</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="font-bold">Last Update Time</div>
                                    <div>{productionData.lastUpdateTime}</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="font-bold">Running Product</div>
                                    <div>{productionData.runningProduct}</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="font-bold">Today Production</div>
                                    <div>{productionData.todayProduction}</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="font-bold">Yesterday Production</div>
                                    <div>{productionData.yesterdayProduction}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border border-slate-950 lg:w-1/2 md:w-1/2 h-96 w-full p-5 shadow-xl">
                    <img src="https://i.ibb.co/H4MZV3q/image.png" alt="" className="h-full w-full" />
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 border border-slate-950 mx-10 shadow-xl">
                <figure><img src="https://i.ibb.co/ZLhRVhq/image.png" alt="Album" /></figure>
                <div className="card-body flex justify-center items-center  md:border-l   lg:border-l  border-slate-950">
                    <h2 className="card-title font-bold text-3xl">Live chart on machine operation </h2>


                </div>
            </div>
            <div className="card lg:card-side bg-base-100 border border-slate-950 mx-10 shadow-xl mt-10">
                <div className="card-body flex justify-center items-center  md:border-r   lg:border-r  border-slate-950">
                    <h2 className="card-title font-bold text-3xl">Colum chart on weekly production performance</h2>


                </div>
                <figure><img src="https://i.ibb.co/tHqqWhd/image.png" alt="Album" /></figure>
            </div>
            <div className="card lg:card-side bg-base-100 border border-slate-950 mx-10 shadow-xl mt-10">
                <figure><img src="https://i.ibb.co/PcsS30c/image.png" alt="Album" /></figure>
                <div className="card-body flex justify-center items-center md:border-l   lg:border-l  border-slate-950">
                    <h2 className="card-title font-bold text-3xl">Production Loss Analysis</h2>


                </div>
            </div>
        </div>
    );
};

export default Feature;