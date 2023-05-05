import React from 'react';
import error from '../../public/images/errorP.jpg'
import { Link } from 'react-router-dom';

const Notfound = () => {
        return (
                <div>
                        <div>
                                <img src= {error} alt="" />
                                <button className='px-5 py-1 bg-sky-400 rounded-lg'>
                                 <Link to ="/">go to home </Link>
                                </button>
                        </div>
                </div>
        );
};

export default Notfound;