import useGetUser from "../../Hooks/useUser";

const AllUser = () => {
    const { loading, User } = useGetUser();
    console.log(User);
    return (
        <div className="flex justify-center  min-h-screen">
            <div className=" grid grid-cols-3 gap-5">
                {
                    User.map((user) => (
                        <div className=" mt-10 bg-slate-200 shadow-2xl h-56 w-72">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title ">{user.fullName}</h2>
                            </div>
                            <div className='flex justify-between px-10'>
                                <div className="avatar m-4 ">
                                    <div className="w-14 h-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user.profilePic} alt="img" className="rounded-full" />
                                    </div>
                                </div>
                                <div className='my-3 '>
                                    <h2 >{user.username}</h2>
                                    <h4>{user.gender}</h4>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AllUser;