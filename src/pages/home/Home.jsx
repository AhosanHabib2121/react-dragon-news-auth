import Header from "../shared/header/Header";
import LeftSideNavbar from "../shared/leftSideNavbar/LeftSideNavbar";
import Navbar from "../shared/navbar/Navbar";
import RightSideNavbar from "../shared/rightSideNavbar/RightSideNavbar";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div className=" mb-5">
            <Header />
            <BreakingNews/>
            <Navbar/>
            <div className=" grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                   <LeftSideNavbar/>
                </div>
                <div className=" md:col-span-2">
                    <h2 className="text-2xl font-semibold text-[#403F3F]">News coming soon</h2>
                </div>
                <div>
                    <RightSideNavbar/>
                </div>
            </div>
        </div>
    );
};

export default Home;