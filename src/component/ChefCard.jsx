import React from 'react';
import { Link } from 'react-router-dom';
import {  FaRegThumbsUp } from 'react-icons/fa';
import LazyLoad from 'react-lazyload';

const ChefCard = ({chef}) => {
     const {id, name,bio, experience, likes, number_of_recipes, photo} = chef;
       
        return (
                <div>
                   <LazyLoad>
                      
                     <div className="card  bg-base-100 shadow-xl">
                  <figure><img className='h-72 w-full' src= {photo} alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="card-title"> {name}</h2>
                    <p> Number of recipe :{number_of_recipes}</p> 
                <p> <FaRegThumbsUp className='border'></FaRegThumbsUp> {likes}</p> 
    <p>Experience : {experience}</p>
    <div className="card-actions justify-end">
        <Link to = {`/recipes/${id}`}>
        
      <button className="btn btn-primary">Recipe details</button>
        </Link>
    </div>
  </div>
</div>
                    </LazyLoad>   
                </div>
        );
};

export default ChefCard;