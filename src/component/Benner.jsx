import React from 'react';
import benner from '../../public/images/burger1.jpg'
 
 

const Benner = () => {
        return (
               
                      <div  className="hero h-96 mt-8 container mx-auto" style={{ backgroundImage: `url(${benner})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-start text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Enjoy Cooking !!</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
              
        );
};

export default Benner;