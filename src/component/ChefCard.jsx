import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({chef}) => {
     const {id, name,bio, likes, number_of_recipes, photo} = chef;
        console.log(chef)
        return (
                <div>
                        
                     <div className="card h-96 bg-base-100 shadow-xl">
  <figure><img className='h-60 w-full' src= {photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p> Number of recipe :{number_of_recipes}</p>
    <p> Like: {likes}</p>
    <div className="card-actions justify-end">
        <Link to = {`/recipes/${id}`}>
        
      <button className="btn btn-primary">Buy Now</button>
        </Link>
    </div>
  </div>
</div>
                </div>
        );
};

export default ChefCard;