import React, { useEffect, useState } from 'react';
import { Link, json, useLoaderData } from 'react-router-dom';
import Recipecard from './Recipecard';
 
import card22 from '../../public/images/card22.png'
import { FaArrowCircleLeft, FaArrowLeft } from 'react-icons/fa';
 

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

<div className="card card-side bg-base-100 shadow-xl mt-8">
  <figure><img className='w-full' src= {photo} alt="Movie"/></figure>
  <div className="card-body w-full">
  <div  className="hero h-80 w-full" style={{ backgroundImage: `url(${card22})` }}>
   <div className="hero-overlay bg-opacity-60"></div>
   <div className="hero-content text-start text-neutral-content">
     <div className="max-w-md">
       <h1 className="mb-5 text-5xl font-bold">{name}</h1>
       <p> <span className='  font-bold'>Some bio</span> : {bio}</p>
                         <div className='flex mt-12'>
                         <p className='border rounded-xl border-y-slate-50 p-3 mx-4'> <span className='font-bold'>like</span> : {likes}</p>
                         <p className='border rounded-xl border-y-slate-50 p-3 mx-4'> <span className='font-bold'>Recipe quantity</span> : {number_of_recipes}</p>
                         <p className='border rounded-xl border-y-slate-50 p-3 mx-4'> <span className='font-bold'>Experience</span> : {experience}</p>
                         </div>
    
     </div>
   </div>
 </div>
  </div>
</div>



 


               
                 </div>

        
                <h1 className='text-2xl font-bold my-8 text-center'>Three Recipe of {name}:</h1>  
                <div className=" grid grid-cols-1 md:grid-cols-3 w-3/4 mx-auto gap-6 mt-8">
                {
                        recipe.map(r => <Recipecard
                        key={r.id}
                        recipe = {r}
                        
                        ></Recipecard>)
                }    
                 </div> 
                 <button >
                
                 <Link className='flex items-center px-4 py-1 gap-2 bg-orange-300 rounded-lg' to = "/"><FaArrowLeft></FaArrowLeft> back</Link>     
                 </button>
                </div>
        );
};

export default Recipe;