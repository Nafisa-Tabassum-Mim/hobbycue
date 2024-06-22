import {  BiSolidBookmark } from "react-icons/bi";
import { FaBell, FaSearch, FaShoppingCart } from "react-icons/fa";
import { IoIosArrowDown, IoIosSearch, IoMdCompass } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { MdStars } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar-expand-lg bg-white fixed w-full z-10">
            <div className="flex justify-evenly items-center">
                <div className="flex items-center italic gap-2">
                    <p><span className="text-customBlue px-[10px] py-[4px]  font-bold border-2 border-customPurple">h</span></p>
                    <div >
                        <p className="mb-0 font-bold"><span className="text-customBlue">hobby</span><span className="text-customPurple">cue</span></p>
                        <p className="text-xs">Your hobby,Your Community</p>
                    </div>
                </div>


                {/* small device search button  */}
                {/* search  */}
                <div className="lg:hidden">
                    <button> <FaSearch className="text-customPurple text-xl" /></button>
                </div>

                <div className="hidden lg:flex" id="navbarSupportedContent">
                    <form className="d-flex " role="search">
                        <input className="form-control " type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="px-[10px] rounded-r-lg text-white bg-customPurple" type="submit"><IoIosSearch /></button>
                    </form>
                </div>


                <div className="dropdown hidden lg:flex">
                    <button className="flex items-center gap-[6px]" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <IoMdCompass className="text-customPurple text-lg" />
                        Explore
                        <IoIosArrowDown className=" text-customPurple text-lg" />
                    </button>

                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">People - Community</a></li>
                        <li><a className="dropdown-item" href="#">People - Community</a></li>
                        <li><a className="dropdown-item" href="#">Programs - Events</a></li>
                        <li><a className="dropdown-item" href="#">Products - Store</a></li>
                        <li><a className="dropdown-item" href="#">Blogs</a></li>
                    </ul>
                </div>

                <div className="dropdown hidden lg:flex">
                    <button className="flex items-center gap-[6px]" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <MdStars className="text-customPurple text-lg" />
                        Hobbies
                        <IoIosArrowDown className=" text-customPurple text-lg" />
                    </button>

                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                    </ul>
                </div>
                {/* bookmark  */}
                <div className="hidden lg:flex">
                   <button> <BiSolidBookmark className="text-customPurple text-xl" /></button>
                </div>

                {/* bell  */}
                <div>
                    <button><FaBell className="text-customPurple text-xl" /></button>
                </div>

                {/* cart  */}
                <div className="hidden lg:flex">
                   <button> <FaShoppingCart className="text-customPurple text-xl" /></button>
                </div>
                {/* btn  */}
                <div className="hidden lg:flex">
                    <Link to='/login' className="no-underline px-6 py-[6px] rounded-lg border-[2px] border-customPurple text-customPurple">Sign In</Link>
                </div>

                {/* small device button  */}
                <div className="dropdown lg:hidden text-2xl">
                    <a className="text-customPurple" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <IoMenu className="text-2xl" />
                    </a>

                    <ul className="dropdown-menu">                        
                        <li><a className="dropdown-item" href="#">Bookmark</a></li>
                        <li><a className="dropdown-item" href="#">Cart</a></li>
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;