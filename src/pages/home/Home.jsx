import { useLoaderData } from "react-router-dom";
import Header from "../shared/header/Header";
import LeftSideNavbar from "../shared/leftSideNavbar/LeftSideNavbar";
import Navbar from "../shared/navbar/Navbar";
import RightSideNavbar from "../shared/rightSideNavbar/RightSideNavbar";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
    const newsData = useLoaderData();

    return (
        <div className=" max-w-6xl mx-auto mb-5 px-4 md:px-0">
            {/* header section here */}
            <Header />
            {/* breaking news section here */}
            <BreakingNews />
            {/* navbar section here */}
            <Navbar/>
            <div className=" grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
                <div>
                   <LeftSideNavbar/>
                </div>
                <div className=" md:col-span-2 overflow-y-auto  h-[260vh]">
                    {
                        newsData.map(singleNews => <NewsCard key={singleNews._id} singleNews={ singleNews } />)
                    }
                </div>
                <div>
                    <RightSideNavbar/>
                </div>
            </div>
        </div>
    );
};

export default Home;