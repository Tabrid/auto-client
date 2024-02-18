

const Blog = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div>
                <h1 className="text-4xl font-bold text-center my-10">Our recent blogs</h1>
            </div>
            <div className="grid grid-cols-3 gap-5">
            <div className="card w-[400px] h-[550px] bg-base-200 shadow-xl">
                <figure><img src="https://i.ibb.co/5LRLDxX/Image.png" alt=" " /></figure>
                <div className="card-body">
                    <div className="flex justify-between">
                        <h6>02 January 2024</h6>
                        <h6>2 COMMENTS</h6>
                    </div>
                    <h2 className="card-title">Regional Manager & Limited
                        time management.</h2>
                    <p>With overa decade experience,we’ve
                        established ourselves as one of the
                        pioneering agencies in the region..</p>
                    <h2 className="card-title underline">Read more</h2>
                </div>
            </div>
            <div className="card w-[400px] h-[550px] bg-base-200 shadow-xl">
                <figure><img src="https://i.ibb.co/5LRLDxX/Image.png" alt=" " /></figure>
                <div className="card-body">
                    <div className="flex justify-between">
                        <h6>02 January 2024</h6>
                        <h6>2 COMMENTS</h6>
                    </div>
                    <h2 className="card-title">Regional Manager & Limited
                        time management.</h2>
                    <p>With overa decade experience,we’ve
                        established ourselves as one of the
                        pioneering agencies in the region..</p>
                    <h2 className="card-title underline">Read more</h2>
                </div>
            </div>
            <div className="card w-[400px] h-[550px] bg-base-200 shadow-xl">
                <figure><img src="https://i.ibb.co/5LRLDxX/Image.png" alt=" " /></figure>
                <div className="card-body">
                    <div className="flex justify-between">
                        <h6>02 January 2024</h6>
                        <h6>2 COMMENTS</h6>
                    </div>
                    <h2 className="card-title">Regional Manager & Limited
                        time management.</h2>
                    <p>With overa decade experience,we’ve
                        established ourselves as one of the
                        pioneering agencies in the region..</p>
                    <h2 className="card-title underline">Read more</h2>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Blog;