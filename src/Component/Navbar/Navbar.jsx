import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAuthContext } from '../../Context/AuthContext';
import useLogout from "../../Hooks/useLogout";
const Navbar = () => {
    const { authUser } = useAuthContext();
    const {  logout } = useLogout();
    return (
        <div className="navbar bg-base-100 sticky top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to="/" className="font-[Inter] mr-5"><a>HOME</a></Link></li>
                    <li><Link to="/intro" className="font-[Inter] mr-5"><a>INTRO</a></Link></li>
                    <li><Link to="/feature" className="font-[Inter] mr-5"><a>FEATURE</a></Link></li>
                    <li><Link to="/contact" className="font-[Inter] mr-5"><a>CONTACT</a></Link></li>
                    {
                        authUser && authUser?.role === "admin" && <li><Link to="/alluser" className="font-[Inter] mr-5 "><a>ALL USER</a></Link></li>
                    }
                    
                    <li>
                        <Link to="/live" className=" font-[Inter] text-center w-fit mr-5  h-9 bg-[#0198FE] hover:bg-[#0198FE] rounded-[36px] text-white flex items-center justify-center">LIVE <MdOutlineArrowOutward /></Link>
                    </li>
                    {
                        authUser && <li>
                            <Link  className=" font-[Inter] text-center w-fit  h-9 bg-[#0198FE] hover:bg-[#0198FE] rounded-[36px] text-white flex items-center justify-center" onClick={logout}>Logout</Link>
                        </li> 
                    }
                    </ul>
                </div>
                <div className="w-64  ">
                    <img src="https://i.ibb.co/r33vSFm/image-removebg-preview-3.png" className="w-64 " />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/" className="font-[Inter] mr-5"><a>HOME</a></Link></li>
                    <li><Link to="/intro" className="font-[Inter] mr-5"><a>INTRO</a></Link></li>
                    <li><Link to="/feature" className="font-[Inter] mr-5"><a>FEATURE</a></Link></li>
                    <li><Link to="/contact" className="font-[Inter] mr-5"><a>CONTACT</a></Link></li>
                    {
                        authUser && authUser?.role === "admin" && <li><Link to="/alluser" className="font-[Inter] mr-5 "><a>ALL USER</a></Link></li>
                    }
                    
                    <li>
                        <Link to="/live" className=" font-[Inter] text-center w-fit mr-5  h-9 bg-[#0198FE] hover:bg-[#0198FE] rounded-[36px] text-white flex items-center justify-center">LIVE <MdOutlineArrowOutward /></Link>
                    </li>
                    {
                        authUser && <li>
                            <Link  className=" font-[Inter] text-center w-fit  h-9 bg-[#0198FE] hover:bg-[#0198FE] rounded-[36px] text-white flex items-center justify-center" onClick={logout}>Logout</Link>
                        </li> 
                    }
                </ul>
            </div>

        </div>
    );
};

export default Navbar;