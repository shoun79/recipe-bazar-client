import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RecipesCard from "../RecipesCard/RecipesCard";

const ViewRecipes = () => {
    const [chef, setChef] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://recipe-bazar-server.vercel.app/chef/${id}`)
            .then(res => res.json())
            .then(data => setChef(data))
    }, [])
    const { image_url, name, experience, num_recipes, likes, bio } = chef;
    const recipes = useLoaderData();
    return (
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-2">
            <section className="p-6 bg-gray-800 text-gray-100">
                <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                    <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
                        <h1 className="text-5xl font-extrabold dark:text-gray-50">{name}</h1>
                        <p><span className="text-lg">Experience: </span>{experience} </p>
                        <p className="my-8">
                            <span className="font-medium dark:text-gray-50 text-lg">Description: </span>{bio}
                        </p>
                        <p><span className="text-lg">Numbers of recipes: </span>{num_recipes} </p>
                        <div className="badge badge-outline py-3 mt-2"><svg
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 me-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                        </svg>
                            {likes}
                        </div>

                    </div>
                    <img src={image_url} alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
                </div>
            </section>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {
                    recipes.map(recipe => <RecipesCard
                        key={recipe.id}
                        recipe={recipe}
                    ></RecipesCard>)
                }
            </div>
        </div>
    );
};

export default ViewRecipes;