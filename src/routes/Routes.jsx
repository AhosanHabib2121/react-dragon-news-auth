import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import NewsDetails from "../pages/newsDetails/NewsDetails";
import PrivateRoute from "./PrivateRoute";


const myCreateRouter = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('/news.json')
            },
            {
                path: '/newsDetails/:id',
                element: <PrivateRoute><NewsDetails/></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    },
    
]);

export default myCreateRouter; 