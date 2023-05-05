import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LazyLoad from 'react-lazyload';

const Recipecard = ({recipe}) => {
        const [added, setAdded] = useState(false)

   const handleFavourite = () => {
        setAdded(true)
        toast('Added Favourite item')
   }


        console.log(recipe)
        const {  id, rename , image, rating , ingredients,cooking_method}  = recipe;
        console.log(recipe)
        return (
                <div >
                      
                         <LazyLoad>
                         <div className=''>
                          <p><img className='h-60 w-60 rounded-3xl' src={image} alt="" /></p>
                          <p> <span className='font-bold'>Recipe name</span> : {rename}</p>
                          <p> <span className='font-bold'>Rating :</span> : {rating}</p>
 
                          </div>
                         </LazyLoad>
                        
                          <div>
                          <p className='font-bold'>ingredients:</p>
                          {
                                ingredients.map((item,index)=> <li
                                key={index}
                                >
                                        {item}
                                </li>)
                          }
                          </div>
                          <div>
                          <p> <span className='font-bold'>Cooking Method :</span> : {cooking_method}</p>
                          <button onClick={handleFavourite}  className= {added? "btn" :"btn-success px-6 py-2 rounded-lg" } disabled={added}>Add Favourite</button>
                          <ToastContainer></ToastContainer>
                          

                          </div>

                      
                </div>
        );
};

export default Recipecard;