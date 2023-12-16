import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../component/Home/Home/Home";
import Blog from "../component/Others/Blog/Blog";
import ViewRecipes from "../component/Others/ViewRecipes/ViewRecipes";
import ErrorPage from "../component/Others/ErrorPage/ErrorPage";
import Login from "../component/Login/Login/Login";
import Register from "../component/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: 'View-recipes/:id',
                element: <PrivateRoute><ViewRecipes></ViewRecipes></PrivateRoute>,
                loader: ({ params }) => fetch(`https://recipe-bazar-server.vercel.app/recipes/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }

        ]
    },
]);

export default router;