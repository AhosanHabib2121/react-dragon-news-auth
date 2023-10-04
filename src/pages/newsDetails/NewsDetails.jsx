import { useLoaderData, useParams } from "react-router-dom";
import Header from "../shared/header/Header";
import RightSideNavbar from "../shared/rightSideNavbar/RightSideNavbar";
import Navbar from "../shared/navbar/Navbar";

const NewsDetails = () => {
    const { id } = useParams();
    const newsAll = useLoaderData();
    const newsDetailsData = newsAll.find(newsDetails => newsDetails._id == id);
    const { title, image_url, details } = newsDetailsData;
  
    return (
        <div className="max-w-6xl mx-auto mb-5 px-4 md:px-0">
            {/* header section here */}
            <Header />
            {/* navbar section here */}
            <Navbar/>
            <div className=" grid md:grid-cols-4 gap-4">
                <div className=" col-span-3">
                    <h2 className=" text-2xl font-semibold text-[#403F3F] mb-5">Dragon News</h2>
                    <h2></h2>
                    <div className="card border pb-5 mb-8">
                        <figure><img src={image_url} alt="not found"
                            className=' w-full' /></figure>
                        <div className=" card-body p-3 space-y-2">
                            <h2 className=" text-[#403F3F] text-xl font-bold "> {title}</h2>
                            <p>{ details }</p>
                        </div>
                    </div>
                </div>
                {/* rightSideNavbar section here */}
                <div>
                    <RightSideNavbar/>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;