import { Outlet, useNavigation } from "react-router-dom";
import Header from "../component/Shared/Header/Header";
import Footer from "../component/Shared/Footer/Footer";

const Main = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            <div className="text-center" >
                {
                    navigation.state === "loading" && <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
                }

            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;