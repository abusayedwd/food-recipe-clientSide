import React from 'react';
import recipe1 from '../../public/images/recipe1.jpg'
import recipe2 from '../../public/images/recipe2.png'
import recipe3 from '../../public/images/recipe3.webp'
import sidep from '../../public/images/sidep1.jpg'
 

const Toprecipe = () => {
        return (
                <div>

                <div className='grid grid-cols-1 gap-5 md:grid-cols-2  mt-24'>
                        <div>
                                <img className='h-96 rounded-3xl' src={sidep} alt="" />
                        </div>
                        <div className=' text-start'> 
                            <p className='mt-24 text-2xl text-emerald-600 font-bold'>take a faste , <br /> come join us , <br /> life is to indlessly delecious </p> 
                            <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestias sunt modi eos perferendis necessitatibus iusto maxime provident?</p>   
                            <button className="btn btn-accent">Now it</button>
                     </div>
                </div>




                        <h1 className='text-3xl text-lime-700 mt-20 font-serif font-bold text-center'>Top Recipe Our</h1>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto'>
             <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img   src={recipe1}alt="Shoes" className="h-80 rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Chicken Curry</h2>
    <p>Its Awsome Recipe and very testy !!</p>
    <p>bangladeshi brand</p>
    
  </div>
  <button className='px-6 py-2 w-2/4 mx-auto bg-orange-300 font-bold rounded-lg'>See More</button>
</div>

<div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img  src= {recipe2} alt="Shoes" className="h-80 rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Dishes Beaf</h2>
    <p>Its Awsome Recipe and very testy !!</p>
    <p>bangladeshi brand</p>
  </div>
  <button className='px-6 py-2 w-2/4 mx-auto bg-orange-300 font-bold rounded-lg'>See More</button>
</div>

<div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img  src= {recipe3} alt="Shoes" className="h-80 rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Alo vorta</h2>
    <p>Its Awsome Recipe and very testy !!</p>
    <p>bangladeshi brand</p>
  </div>
  <button className='px-6 py-2 w-2/4 mx-auto bg-orange-300 font-bold rounded-lg'>See More</button>
</div>

</div>
                </div>
        );
};

export default Toprecipe;