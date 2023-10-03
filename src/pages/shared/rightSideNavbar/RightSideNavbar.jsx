import { AiOutlineGoogle, AiOutlineGithub, AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"

const RightSideNavbar = () => {
    return (
        <div>
            {/* login area */}
            <div className=" space-y-3 mb-6">
                <h2 className=" text-2xl font-semibold text-[#403F3F]">Login With </h2>
                <button className="hover:text-blue-500 btn outline outline-1 w-full normal-case text-[#706F6F]  text-base font-medium">
                    <AiOutlineGoogle/>
                    Login With Google
                </button>

                <button className="btn hover:text-blue-500 outline outline-1 w-full normal-case text-[#706F6F] text-base font-medium">
                    <AiOutlineGithub/>
                    Login With Github
                </button>
            </div>
            {/* find us area */}
            <div className=" space-y-3 mb-6">
                <h2 className=" text-2xl font-semibold text-[#403F3F]">Find Us On </h2>
                <div>
                    <a href="" className=" hover:text-blue-500 flex items-center p-4 border border-slate-500  gap-2 rounded-t-lg text-[#706F6F] text-base font-medium">
                    <BiLogoFacebookCircle/>
                    Facebook
                </a>
                <a href="" className=" hover:text-blue-500 flex items-center p-4 border-x border-slate-500  gap-2 text-[#706F6F] text-base font-medium">
                    <AiFillTwitterCircle/>
                    Twitter
                </a>
                <a href="" className=" hover:text-blue-500 flex items-center p-4 border border-slate-500   gap-2 rounded-b-lg text-[#706F6F] text-base font-medium">
                    <AiOutlineInstagram/>
                    Instagram
                </a>
                </div>
            </div>
            {/* Q zone */}
            <div className=" space-y-3 mb-6 ">
                <div className="bg-[#F3F3F3] p-4">
                    <h2 className="text-2xl font-semibold text-[#403F3F]">Q-Zone </h2>
                    <img src={qZone1} alt="not found" />
                    <img src={qZone2} alt="not found" />
                    <img src={qZone3} alt="not found" />
               </div>
            </div>
        </div>
    );
};

export default RightSideNavbar;