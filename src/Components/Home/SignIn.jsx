import { useState } from "react";
import { FaFacebook, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEye, IoEyeOff } from "react-icons/io5";

const SignIn = () => {
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
                        <input type={showPass ? "text" : "password"} name="password" className="form-control" placeholder="Password" id="inputPassword4" required></input>
                        <span className="absolute  top-3 right-3" onClick={() => setshowPass(!showPass)}>
                            {showPass ? <IoEye /> : <IoEyeOff />
                            }
                        </span>
                    </div>
                    <div className="flex items-center justify-between text-sm my-2">
                        <button><input className="form-check-input mr-2" type="checkbox" value="" id="flexCheckChecked" ></input>Remember me</button>
                        <button className="flex items-center gap-2"><FaLock className="text-xs" />Forgot password?</button>
                    </div>
                    <button type="submit" className="mt-4 hidden justify-center lg:flex  border-2 border-black rounded-md w-full py-[4px]">Continue</button>
                    <button type="submit" className="lg:hidden text-center bg-customPurple text-white rounded-md w-full py-[6px] mt-4">Continue</button>
                </form>
            </div>
        </div>


    );
};

export default SignIn;