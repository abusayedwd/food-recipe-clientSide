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
                <div className='flex w-3/4 mx-auto gap-8 mt-12'>
                        <div className='w-4/5'>
                 <img  className=" h-72 w-full rounded-lg" src= {photo} />
                       </div>
                 <div>
              <h1 className='text-2xl font-bold'> Name : {name}</h1> 
                        <p> <span className='  font-bold'>Some bio</span> : {bio}</p>
                        <p> <span className='font-bold'>like</span> : {likes}</p>
                        <p> <span className='font-bold'>Recipe quantity</span> : {number_of_recipes}</p>
                        <p> <span className='font-bold'>Experience</span> : {experience}</p>
                 </div>

        </div>
                <h1 className='text-2xl font-bold my-8 text-center'>Three Recipe of Chef:</h1>  
                <div className=" grid grid-cols-1 md:grid-cols-3 w-3/4 mx-auto gap-6 mt-8">
                {
                        recipe.map(r => <Recipecard
                        key={r.id}
                        recipe = {r}
                        
                        ></Recipecard>)
                }    
                 </div> 
                 <Link to = "/">back</Link>     
                </div>
        );
};

export default Recipe;