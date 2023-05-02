import React, { useEffect, useState } from 'react';
import { Link, json, useLoaderData } from 'react-router-dom';
import Recipecard from './Recipecard';

const Recipe = () => {
        const chefs = useLoaderData();
        const {name, id} = chefs;
         const [recipe, setRecipe] = useState([]);
         
       useEffect( () => {
        fetch('http://localhost:5000/recipes')
        .then(res => res.json())
        .then(data => {
    const selectRecipe = data.filter(data=> data.chef_name == name)
        setRecipe(selectRecipe)

        })


       }, [])

       console.log(recipe)
        return (
                <div>
                      <div>
                        <div><h1>{name}</h1></div>
                        <div><h1>image</h1></div>

                </div>
                <div>
                {
                        recipe.map(r => <Recipecard
                        key={r.id}
                        recipe = {r}
                        
                        ></Recipecard>)
                }     <Link to = "/">back</Link>     
                 </div> 
                </div>
        );
};

export default Recipe;