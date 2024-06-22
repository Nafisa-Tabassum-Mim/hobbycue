import { FaPlusCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiBeachBag } from "react-icons/gi";
import { IoIosPeople, IoMdArrowDropright } from "react-icons/io";
import { MdDateRange } from "react-icons/md";

const CardSection = () => {

    return (
        <div className="my-12 mx-12">
            <div className="flex flex-col md:flex-row gap-8 mb-8 ">
                <div className="border  md:w-1/2 border-customPurple pt-8 pb-6 px-8 rounded-md group hover:bg-customPurple hover:text-white">
                    <h3 className="flex ">
                        <span className="text-customPurple  mr-4 group-hover:text-white"><IoIosPeople /></span>
                        <span className="text-[24px] font-bold group-hover:text-white">People</span></h3>
                    <p className="group-hover:text-white">Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
                    <button className="text-customPurple border-1 rounded-md px-[16px] py-[6px]  border-customPurple group-hover:text-white group-hover:border-white">Connect</button>
                </div>

                <div className="border  md:w-1/2 border-customPurple pt-8 pb-6 px-8 rounded-md group hover:bg-[#77933C] hover:text-white">
                    <h3 className="flex items-center">
                        <span className="text-[#77933C] mr-4 group-hover:text-white"><FaLocationDot /></span>
                        <span className="text-[24px] font-bold group-hover:text-white">Place</span></h3>
                    <p className=" group-hover:text-white">Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>
                    <button className="text-customPurple border-1 rounded-md px-[16px] py-[6px]  border-customPurple group-hover:text-white group-hover:border-white">Meet up</button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row  gap-8">
                <div className="border md:w-1/2  border-customPurple pt-8 pb-6 px-8 rounded-md group hover:bg-[#C0504D] hover:text-white">
                    <h3 className="flex">
                        <span className="text-[#C0504D] mr-4 group-hover:text-white"><GiBeachBag /></span>
                        <span className="text-[24px] font-bold group-hover:text-white">Product</span>
                    </h3>
                    <p className="group-hover:text-white">Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.</p>
                    <button className="text-customPurple border-1 rounded-md px-[16px] py-[6px] group  border-customPurple group-hover:text-white group-hover:border-white">Get it</button>
                </div>
                <div className="border md:w-1/2 border-customPurple pt-8 pb-6 px-8 rounded-md group hover:bg-[#0096C8] hover:text-white">
                    <h3 className="flex">
                        <span className="text-[#0096C8] mr-4 group-hover:text-white"><MdDateRange /></span>
                        <span className="text-[24px] font-bold group-hover:text-white">Program</span>
                    </h3>
                    <p className="group-hover:text-white mb-10">Find events, meetups and workshops related to your hobby.  Register or buy tickets online.</p>
                    <button className="text-customPurple border-1 rounded-md px-[16px] py-[6px]  border-customPurple group-hover:text-white group-hover:border-white">Attend</button>
                </div>
            </div>
            {/* add new  */}
            <div className="border  border-customPurple pt-8 pb-6 px-8 rounded-md group mt-12">
                <h3 className="flex">
                    <span className="text-[#0096C8] mr-4 "><FaPlusCircle /></span>
                    <span className="text-[24px] font-bold ">Add your own</span>
                </h3>
                <p className=" mb-10">Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>
                <button className="text-customPurple border-1 rounded-md px-[16px] py-[6px]  border-customPurple  ">Add new</button>
            </div>

            {/* Testimonial  */}
            <div className="border  bg-[#F7F5F9] pt-8 pb-6 px-8 rounded-md group mt-12">
                <h3 className="flex">
                    <span className="text-white bg-customPurple rounded-full mr-4 px-[12px] text-3xl">“</span>
                    <span className="text-[24px] font-bold ">Testimonials</span>
                </h3>
                <p className=" mb-10 text-[#6D747A]">In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>


                {/* audio  */}
                <div className="flex flex-col-reverse  md:flex-row justify-center items-center p-2">
                    <div className="flex items-center w-full max-w-4xl bg-[#CCC1DA] rounded p-2 ">
                        <button className="p-2 rounded-full bg-white flex-shrink-0">
                            <IoMdArrowDropright className="text-[#8064A2]" />
                        </button><span className="relative right-[-26px] text-5xl top-[-14px]">.</span>
                        <div className="flex-grow mx-4 border border-white"></div>
                        <span className="flex-shrink-0 text-[#8064A2]">0.00</span>
                        <img src="https://i.ibb.co/p39fYZ4/Ellipse-12.png" className="w-12 ml-2 flex-shrink-0" alt="Profile" />
                    </div>
                    <div className="flex md:w-2/6 items-center pl-4 mb-2">
                        <img src="https://i.ibb.co/p39fYZ4/Ellipse-12.png" className="w-16 flex-shrink-0" alt="Profile" />
                        <div className="ml-4">
                            <p className="text-customPurple mb-2">Shubha Nagarajan</p>
                            <p className="text-customBlue text-xs">Classical Dancer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardSection;