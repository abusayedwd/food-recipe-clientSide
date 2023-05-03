import React from 'react';
import Benner from '../Benner';
import ChefCard from '../ChefCard';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
        const chefs = useLoaderData()
        
        return (
                <div className=''>
                     <Benner></Benner>
                     <h1 className='text-center text-3xl mt-5 font-serif font-bold underline'>Our Chefs</h1>
                     <div className='grid grid-cols-1 my-10 lg:grid-cols-3 gap-10 w-full mx-auto   '>
                      
                        {
                                chefs.map(chef=> <ChefCard
                                key={chef.id}
                                chef ={chef}
                                ></ChefCard>)
                        }
                     </div>

                </div>
        );
};

export default Home;