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
                <h2 className=" text-4xl">Login With </h2>
                <button className="btn btn-outline w-full normal-case ">
                    <AiOutlineGoogle/>
                    Login With Google
                </button>

                <button className="btn btn-outline w-full normal-case">
                    <AiOutlineGithub/>
                    Login With Github
                </button>
            </div>
            {/* find us area */}
            <div className=" space-y-3 mb-6">
                <h2 className=" text-4xl">Find Us On </h2>
                <div>
                    <a href="" className=" flex items-center p-4 border border-slate-500  text-lg gap-2 rounded-t-lg">
                    <BiLogoFacebookCircle/>
                    Facebook
                </a>
                <a href="" className=" flex items-center p-4 border-x border-slate-500 text-lg gap-2 ">
                    <AiFillTwitterCircle/>
                    Twitter
                </a>
                <a href="" className=" flex items-center p-4 border border-slate-500  text-lg gap-2 rounded-b-lg">
                    <AiOutlineInstagram/>
                    Instagram
                </a>
                </div>
            </div>
            {/* Q zone */}
            <div className=" space-y-3 mb-6">
                <h2 className=" text-4xl">Q-Zone </h2>
                <img src={qZone1} alt="not found" />
                <img src={qZone2} alt="not found" />
                <img src={qZone3} alt="not found" />
            </div>
        </div>
    );
};

export default RightSideNavbar;