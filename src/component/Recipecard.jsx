import React from 'react';
import { Link } from 'react-router-dom';

const Recipecard = ({recipe}) => {
        const {name, id}  = recipe;
        return (
                <div>
                        <h1>recipe:{name}</h1>
                      
                </div>
        );
};

export default Recipecard;