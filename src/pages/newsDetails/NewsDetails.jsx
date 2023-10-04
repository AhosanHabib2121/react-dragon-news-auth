import { useParams } from "react-router-dom";
import Header from "../shared/header/Header";
import RightSideNavbar from "../shared/rightSideNavbar/RightSideNavbar";
import Navbar from "../shared/navbar/Navbar";

const NewsDetails = () => {
    const { id } = useParams();
    return (
        <div className="max-w-6xl mx-auto mb-5 px-4 md:px-0">
            <Header />
            <Navbar/>
            <div className=" grid md:grid-cols-4">
                <div className=" col-span-3">
                    <p className=" text-2xl">news details</p>
                    <p>{ id }</p>
                </div>
                <div>
                    <RightSideNavbar/>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;