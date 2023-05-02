import React from 'react';
import { Link } from 'react-router-dom';

const Recipecard = ({recipe}) => {
        
        console.log(recipe)
        const {name, id, chef_name,recipe_name, image, rating , ingredients,cooking_method}  = recipe;
        return (
                <div>
                        <img src={image} alt="" />
                        <p>{rating}</p>
                        <p>{recipe_name}</p>
                      
                </div>
        );
};

export default Recipecard;