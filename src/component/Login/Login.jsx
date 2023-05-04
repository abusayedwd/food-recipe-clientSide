import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authprovider/AuthProvider';
import {  FaGithub, FaGoogle, FaRegThumbsUp } from 'react-icons/fa';
import {  GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';
 

const Login = () => {
        const auth = getAuth(app)
        const googleProvider = new GoogleAuthProvider();
        const githubProvider = new GithubAuthProvider();

        const {signIn} = useContext(AuthContext)
        const [error, setError] = useState('')
        const [success, setSuccess] = useState('');
        const location = useLocation();
        const navigate = useNavigate()

        const from = location.state?.from?.pathname || '/';

       const loginHandler = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        setError('');
        signIn(email,password)
        .then(result => {
                const logedUser = result.user;
                setSuccess("Login is successfuly! Wow")
                console.log(logedUser)
                navigate(from , {replace: true})

        })
        .catch(error => {
                const errorr = (error,'Email or password dose not match');
                setError(errorr)
                setSuccess('');
                // console.log(error)
        })
       }
       const Logingoolge = () => {
        signInWithPopup(auth, googleProvider)
        .then(result=> {
                const googleUser = result.user;
                console.log(googleUser)
        })
        .catch(error => {
                console.log('errore',error.message)
        })
       }
       const loginGithub = () => {
        signInWithPopup(auth, githubProvider)
        .then(result=> {
                const gitUser = result.user;
                console.log(gitUser)
        })
        .catch(error => {
                console.log(error.message)
        })
       }
         
        return (
                <div>
             
      <form onSubmit={loginHandler} className='w-2/5 mx-auto mt-8 bg-sky-200 p-8'>
        <h3 className='font-bold font-serif text-2xl text-center'>Login!!!</h3>
        <div className="mb-6 ">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input type="password"id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <p className='font-bold text-lime-700'>{success}</p>
        <p className='text-red-800 font-bold'>{error}</p>

        
        <p className='mb-6'> New to website?  <small><Link to="/register">SignUp</Link></small></p>

        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>

      </form>
      <p className='text-center'>or ?</p>
        <div className='w-1/4 mx-auto  p-4'>
        <button onClick={Logingoolge} className="btn btn-outline btn-info ml-12"> <FaGoogle></FaGoogle>  Login with google</button> <br />
       <button onClick={loginGithub} className="btn btn-outline btn-accent ml-12 mt-3"><FaGithub></FaGithub> Login with Github</button>
        </div>
                </div>
        );
};

export default Login;