import React from 'react';
import error from '../../public/images/errorP.jpg'
import { Link } from 'react-router-dom';

const Notfound = () => {
        return (
                <div>
                        <div>
                                <img className='w-[70%] h-96 mx-auto mt-24' src= {error} alt="" />
                                <button className='px-5 py-1 w-40 ml-12 bg-sky-400 rounded-lg'>
                                 <Link className='font-bold' to ="/">Go to home </Link>
                                </button>
                        </div>
                </div>
        );
};

export default Notfound;