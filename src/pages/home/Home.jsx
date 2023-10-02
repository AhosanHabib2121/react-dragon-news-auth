import Header from "../shared/header/Header";
import Navbar from "../shared/navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Header />
            <Navbar/>
            <h2 className=" text-3xl">This is home page</h2> 
        </div>
    );
};

export default Home;