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
        fetch('https://food-recipe-a-server-abusayedwd.vercel.app/recipes')
        .then(res => res.json())
        .then(data => {
    const selectRecipe = data.filter(data=> data.chef_name == name)
        setRecipe(selectRecipe)

        })


       }, [])

       
        return (
                <div>
                <div>
                
                 <div className='md:flex h-80  '>
                  <div className='md:w-[40%] w-full  '>
                  <figure><img className='md:w-full w-full rounded-lg h-80' src= {photo} alt="Movie"/></figure>
                  </div>
                  <div className='md:w-[60%] w-full text-center'>
                  <div  className="hero md:h-80 w-full" style={{ backgroundImage: `url(${card22})` , borderRadius: '22px' }}>
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
     
                <h1 className='text-2xl font-bold mt-80 md:my-8 text-center'>Three Recipe of {name}:</h1>  
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