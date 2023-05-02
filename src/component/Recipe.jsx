import React, { useEffect, useState } from 'react';
import { Link, json, useLoaderData } from 'react-router-dom';
import Recipecard from './Recipecard';

const Recipe = () => {
        const chefs = useLoaderData();
        const {name,bio, experience, likes, number_of_recipes, photo, id} = chefs;
         const [recipe, setRecipe] = useState([]);
         
       useEffect( () => {
        fetch('http://localhost:5000/recipes')
        .then(res => res.json())
        .then(data => {
    const selectRecipe = data.filter(data=> data.chef_name == name)
        setRecipe(selectRecipe)

        })


       }, [])

       
        return (
                <div>
                      <div>
                        <div className='mt-5 w-80 mx-auto'>
    <img  className=" h-72 w-full rounded-lg" src= {photo} />
                        <div><h1 className='text-2xl'> Name : {name}</h1></div>
                        <p> Some Bio : {bio}</p>
                        <p> Like : {likes}</p>
                        <p> Recipe quantity : {number_of_recipes}</p>
                        <p> Experience : {experience}</p>
                         
  </div>

                </div>
                <div>
                {
                        recipe.map(r => <Recipecard
                        key={r.id}
                        recipe = {r}
                        
                        ></Recipecard>)
                }    
                 <Link to = "/">back</Link>     
                 </div> 
                </div>
        );
};

export default Recipe;