import React, { useContext } from 'react';
import {  FaFacebook, FaInstagram, FaRegThumbsUp, FaTwitter } from 'react-icons/fa';
const Footer = () => {
         
        
        return (
                <div className='grid grid-cols-1 mt-10 p-6 md:grid-cols-4 bg-gray-800   text-white'>
                        <div className='mx-auto'>
                                <h1 className='text-xl mb-3 font-bold'>Product</h1>
                                <ul>
                                        <li>Fearures</li>
                                        <li>Service</li>
                                        <li>Pricing</li>
                                        <li>How it Works</li>
                                </ul>
                        </div>
                        <div  className='mx-auto'> 
                        <h1 className='text-xl mb-3 font-bold'>Recources</h1>
                        <ul>
                                        <li>Documentation</li>
                                        <li>New Update</li>
                                        <li>Blog</li>
                                       
                                </ul>
                        </div>
                        <div  className='mx-auto'>
                        <h1 className='text-xl mb-3 font-bold'>Contact Us</h1>

                        <ul>
                                        <li>chines@mail.com</li>
                                        <li>0083733</li>
                                        <li>Linkdin</li>
                                         
                                </ul>
                        </div>
                        <div  className='mx-auto'>
                        <h1 className='text-xl mb-3 font-bold'>Follow Us:</h1>
                        <ul className='flex mt-5'>
                                        <li className='ml-2'><FaFacebook></FaFacebook></li>
                                        <li className='ml-2'><FaTwitter></FaTwitter></li>
                                        <li className='ml-2'><FaInstagram></FaInstagram></li>
                                        
                                </ul>
                        </div>
                </div>
        );
};

export default Footer;