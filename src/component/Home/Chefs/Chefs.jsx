import { useEffect, useState } from "react";
import Chef from "../Chef/Chef";


const Chefs = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://recipe-bazar-server.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))


    }, [])


    return (
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-2">
            <div className="text-center">
                <h2 className="text-4xl font-bold	">Chefs</h2>
                <p>Excepteur sint occaecat cupidatat non qui proident, sunt culpa qui officia deserunmollit anim id est laborum.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {
                    chefs.map(chef => <Chef
                        key={chef.id}
                        chef={chef}
                    ></Chef>)
                }
            </div>
        </div>
    );
};

export default Chefs;