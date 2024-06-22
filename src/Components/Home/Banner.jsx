
import {  NavLink, Outlet } from "react-router-dom";
import './../../App.css'

const Banner = () => {


    return (
        <div className="bg-[#F7F5F9] pt-24 px-12 md:px-16 flex flex-col lg:flex-row ">
            <div className="w-full lg:w-3/5 mr-16">
                <h3 className="italic text-xl md:text-4xl font-bold pb-2 md:pb-8">Explore your <span className="text-customBlue">hobby</span> or <span className="text-customPurple">passion</span></h3>
                <p className="text-[14px] pb-2">Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
                </p>
                <p className="text-[14px] pb-12 hidden lg:flex">If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</p>
                <img className="hidden lg:flex" src="https://i.ibb.co/nq21Pzn/Group-27.png" alt="" />
            </div>
            <div className="w-full lg:w-2/5">
                <div className="flex gap-4 mb-4 nav">
                    <NavLink className='no-underline text-gray-400 font-bold' to='/login'>Sign In</NavLink>
                    <NavLink className='no-underline text-gray-400 font-bold' to='/signup'>Join In</NavLink>

                </div>
              
                <Outlet></Outlet>

            </div>
            <div>
            <img className="lg:hidden mt-8" src="https://i.ibb.co/nq21Pzn/Group-27.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;