import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEye, IoEyeOff } from "react-icons/io5";


const Signup = () => {
    const [showPass, setshowPass] = useState(false)

    return (
        <div className="flex flex-col-reverse lg:flex-col">
            <div className="">
                <button className="w-full justify-center py-[6px] border-[2px] rounded-lg border-customPurple font-bold flex items-center gap-4 mb-4"> <FcGoogle /> Continue with Google</button>
                <button className="w-full justify-center py-[6px] border-[2px] rounded-lg border-customPurple font-bold flex items-center gap-4"> <FaFacebook className="text-customBlue" /> Continue with Facebook</button>
            </div>
            {/* <hr />Or connect with */}
            <div className="flex items-center my-4">
                <div className="border-b border-black flex-grow"></div>
                <div className=" font-bold whitespace-nowrap">Or connect with</div>
                <div className="border-b border-black flex-grow"></div>
            </div>


            {/* new form  */}
            <div>
                <form className="">
                    <div className="mb-4">
                        <input type="email" className="form-control " name="email" required placeholder="Email" ></input>
                    </div>
                    <div className="relative">
                        <input type={showPass ? "text" : "password"} name="password" className="form-control" placeholder="Password"
                            id="password-input"
                            aria-autocomplete="list"
                            aria-label="Password"
                            aria-describedby="passwordHelp" required></input>
                        <span className="absolute top-3 right-3" onClick={() => setshowPass(!showPass)}>
                            {showPass ? <IoEye /> : <IoEyeOff />
                            }
                        </span>
                    </div>
                    {/* password meter  */}
                    <div className="password-meter">
                        <div className="meter-section rounded me-2 "></div>
                        <div className="meter-section rounded me-2"></div>
                        <div className="meter-section rounded me-2"></div>
                        <div><p className="text-xs ">Password strength</p></div>
                    </div>
                   <div>
                    <p className="text-sm mt-[16px]">By continuing, you agree to our <span className="font-bold">Terms of Service</span> and <span className="font-bold">Privacy Policy</span>.</p>
                   </div>
                    <button type="submit" className="hidden lg:flex justify-center bg-customPurple text-white rounded-md w-full py-[4px]">Agree and Continue</button>
                    <button type="submit" className="lg:hidden text-center bg-customPurple text-white rounded-md w-full py-[4px]">Continue</button>
                </form>
            </div>
        </div>

    );
};

export default Signup;