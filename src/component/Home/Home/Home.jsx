import { Suspense, lazy } from "react";
//import Chefs from "../Chefs/Chefs";
const Chefs = lazy(() => import("../Chefs/Chefs"))
import Hero from "../Hero/Hero";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Suspense fallback={<div>Please wait...</div>}>
                <Chefs></Chefs>
            </Suspense>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;