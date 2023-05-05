import React from 'react';
import { Link } from 'react-router-dom';

const Recipecard = ({recipe}) => {
        
        console.log(recipe)
        const {  id, rename , image, rating , ingredients,cooking_method}  = recipe;
        console.log(recipe)
        return (
                <div >
                      
                         <div className=''>
                          <p><img className='h-60 w-60 rounded-3xl' src={image} alt="" /></p>
                          <p> <span className='font-bold'>Recipe name</span> : {rename}</p>
                          <p> <span className='font-bold'>Rating :</span> : {rating}</p>


                        
                          </div>
                        
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
                          <button  className='px-4 py-2 bg-gray-400 rounded-lg  font-bold'>Add Favourite</button>
                          

                          </div>

                      
                </div>
        );
};

export default Recipecard;