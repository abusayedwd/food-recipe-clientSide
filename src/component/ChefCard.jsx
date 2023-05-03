import React from 'react';
import { Link } from 'react-router-dom';
import {  FaRegThumbsUp } from 'react-icons/fa';

const ChefCard = ({chef}) => {
     const {id, name,bio, experience, likes, number_of_recipes, photo} = chef;
        console.log(chef)
        return (
                <div>
                        
                     <div className="card  bg-base-100 shadow-xl">
  <figure><img className='h-72 w-full' src= {photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title"> Name : {name}</h2>
    <p> Number of recipe :{number_of_recipes}</p>
    
     
    <p> <FaRegThumbsUp className='border'></FaRegThumbsUp> {likes}</p>
    
    
    <p>Experience : {experience}</p>
    <div className="card-actions justify-end">
        <Link to = {`/recipes/${id}`}>
        
      <button className="btn btn-primary">Show details</button>
        </Link>
    </div>
  </div>
</div>
                </div>
        );
};

export default ChefCard;