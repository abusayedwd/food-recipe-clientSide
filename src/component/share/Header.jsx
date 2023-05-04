import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authprovider/AuthProvider';

const Header = () => {
        const {user,logOut} = useContext(AuthContext);

        const logOuthandle = () => {
                logOut()
                .then(result => {})
                .catch(error => console.log(error))
             }
        
        return (
                <div className="navbar  container mx-auto">
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
     <p className='font-bold text-amber-600 text-2xl'>BD-RECIPE-HUB</p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

    

      <li className='font-bold text-xl'>
        <Link to ="/">Home</Link>
        </li>
       
      
      <li className='font-bold text-xl'> 
        <Link to = '/blog'>Blog</Link>
      </li>
     
    </ul>
  </div>
  <div className="navbar-end">
 
  {
               user ? <div className='flex gap-2'>
                 <img className='w-8 rounded-full'  title={user.displayName} src={user.photoURL} alt="" /> 
                 <button  className='bg-red-300 mr-4 px-4 py-2 rounded-lg' onClick={logOuthandle}>Log Out</button> </div> :
               <div>
               <button className="btn btn-active btn-success mr-3"> 
               <Link to = "/login">Login</Link>
  </button>
                </div> 
               
               } 
  <button className="btn btn-active btn-secondary"> 
    <Link to = "/register">SingUp</Link>
  </button>

    
  </div>
</div>
        );
};

export default Header;