import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNavbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => { 
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    console.log(categories)
    return (
        <div>
            <h2 className=" text-3xl">All Category</h2>
            <div>
                {
                    categories.map(category => <NavLink
                        className=" block"
                        key={category.id}>
                        {category.name}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftSideNavbar;