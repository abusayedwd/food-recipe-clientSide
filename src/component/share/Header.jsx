import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authprovider/AuthProvider';

const Header = () => {
        const {user} = useContext(AuthContext);

      
        
        return (
                <div className="navbar bg-gray-300 container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li>
        <Link to ="/">Home</Link>
        </li>
         
        <li> 
        <Link to = '/blog'>Blog</Link>
      </li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

                 {
               user &&  
               <span className='text-white'>welcom, {user.photo}</span>
               } 

      <li>
        <Link to ="/">Home</Link>
        </li>
       
      
      <li> 
        <Link to = '/blog'>Blog</Link>
      </li>
     
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-active btn-success mr-3"> 
    <Link to = "/login">Login</Link>
  </button>
  <button className="btn btn-active btn-secondary"> 
    <Link to = "/register">SingUp</Link>
  </button>

    
  </div>
</div>
        );
};

export default Header;