import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authprovider/AuthProvider';

const Register = () => {
        const {createUser} = useContext(AuthContext);
        const [error, setError] = useState('')
        const [success, setSuccess] = useState('');


        const handleRegiste = event =>{
                event.preventDefault();
                const form = event.target;
                const name = form.name.value;
                const email = form.email.value;
                const password = form.password.value;
                const photo = form.photo.value;

                console.log(name, email, password, photo)

                if(password.length < 6) {
                        setError('minimum 6 charachter passowrd give me')
                        setSuccess('')
                }

              createUser(email,password)
              .then(result => {
                const createdUser = result.user;
                setSuccess('signUp successfull!!!')
                setError('')
                form.reset(" ")
                // console.log(createdUser)
              })
              .catch(error => {
                console.log(error)
              })
        }

        return ( 
                <form onSubmit={handleRegiste} className='w-2/5 mx-auto mt-8 bg-sky-200 p-8'>

                <h3 className='font-bold font-serif text-2xl text-center'>Sign Up!!!</h3>
                <div className="mb-6 ">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                  <input type="text" id="name" name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" Name" required />
                </div>
                <div className="mb-6 ">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                  <input type="password" name='password' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='password' required />
                </div>
                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo Url</label>
                  <input type="text" name='photo' id="photo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

                <p className='font-bold text-lime-700'>{success}</p>
                 <p  className='text-red-800 font-bold'>{error}</p>



                <p className='mb-6'>Already have an account?  <small><Link to="/login">Login</Link></small></p>
                <div className="flex items-start mb-6">
                  <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                  </div>
                  <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
          
                 
              </form>
          
        );
};

export default Register;