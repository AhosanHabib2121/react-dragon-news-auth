import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SingleNews from "./SingleNews";

const LeftSideNavbar = () => {
    const [categories, setCategories] = useState([]);
    const [newsCategory, setNewsCategory] = useState([]);

    // category data loaded
    useEffect(() => { 
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    // news data loaded
    useEffect(() => { 
        fetch('/newsCategory.json')
            .then(res => res.json())
            .then(newsData => setNewsCategory(newsData))
    }, [])

    return (
        <div>
            <h2 className=" text-2xl font-semibold text-[#403F3F] mb-3">All Category</h2>
            <div className=" space-y-3 mb-6">
                {
                    categories.map(category => <NavLink
                        className=" block text-[#9F9F9F] text-xl font-medium hover:bg-[#cecece] hover:text-[#403F3F] rounded-lg py-4 content-start text-start px-8"
                        key={category.id}>
                        {category.name}
                    </NavLink>)
                }
            </div>
            <div className=" space-y-4">
                {
                    newsCategory.map(singleData => <SingleNews key={singleData.id} singleData={singleData}></SingleNews>)
                }
            </div>
        </div>
    );
};

export default LeftSideNavbar;