import React from 'react';

const Blog = () => {
        return (
                <div>
                     <h1 className='m-12 text-3xl font-bold text-center'>Question & Answer:</h1>
               <div className='w-3/4 mx-auto mt-5'>
                     <p className='text-xl font-bold'><span className='text-2xl font-bold m-3'>Question-1.</span>What is the Difference Between a Controlled and Uncontrolled Component in React? </p>
                     <p className='font-semibold text-orange-400'><span className='text-2xl font-bold m-3'>Answer :</span> In React, a controlled component is a component that is controlled by React state, while an uncontrolled component is a component that maintains its own internal state.</p>
                 </div>
               <div className='w-3/4 mx-auto mt-5'>
                     <p className='text-xl font-bold'><span className='text-2xl font-bold m-3'>Question-2.</span> How do you set PropTypes in React?</p>
                     <p className='font-semibold text-orange-400'><span className='text-2xl font-bold m-3'>Answer :</span>
                        Image result for how to validate react props using propType?
                        import PropTypes from 'prop-types' They are often used after the component ends and starts with the name of the component as shown: import React from react import </p>
                 </div>
               <div className='w-3/4 mx-auto mt-5'>
                     <p className='text-xl font-bold'><span className='text-2xl font-bold m-3'>Question-3.</span>difference between node js and express js?</p>
                     <p className='font-semibold text-orange-400'><span className='text-2xl font-bold m-3'>Answer :</span>NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications.</p>
                 </div>
               <div className='w-3/4 mx-auto mt-5'>
                     <p className='text-xl font-bold'><span className='text-2xl font-bold m-3'>Question-4.</span>what is custom hook and why will you create a custom hook?</p>
                     <p className='font-semibold text-orange-400'><span className='text-2xl font-bold m-3'>Answer :</span>Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated.</p>
                 </div>
        </div>
        );
};

export default Blog;