import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className=" flex bg-[#F3F3F3] py-6 pl-4  pr-8 rounded my-7">
            <button className="btn bg-[#D72050] hover:bg-[#d40f44] text-white normal-case mr-4"> Breaking news</button>
            <Marquee pauseOnHover={true} speed={80}>
                <Link to='' className=" pr-3">Match Highlights: Germany vs Spain — as it happened !</Link>
                <Link to=''> Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;