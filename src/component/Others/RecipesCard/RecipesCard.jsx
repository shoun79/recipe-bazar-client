import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { useState } from 'react';
import toast from 'react-hot-toast';
const RecipesCard = ({ recipe }) => {
    const [isDisable, setIsDisable] = useState(false);
    const { img, recipe_name, ingredients, cooking_method, rating } = recipe;

    const hendleDisable = () => {
        setIsDisable(true)
        toast.success('Add to favorite')
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="h-[300px]" src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">
                    {recipe_name}

                </h2>
                <p> <span className="text-lg text-gray-950">ingredients: </span>{ingredients.join(',')} </p>
                <p><span className="text-lg ">Cooking Method: </span>{cooking_method.length > 230 ? cooking_method.slice(0, 230) + '...' : cooking_method} </p>
                <div className="card-actions justify-between items-center">
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={rating}
                        readOnly
                    />
                    <button onClick={hendleDisable} disabled={isDisable} className="btn bg-gray-800 text-gray-100 hover:bg-gray-950">Favorite</button>
                </div>


            </div>
        </div >
    );
};

export default RecipesCard;