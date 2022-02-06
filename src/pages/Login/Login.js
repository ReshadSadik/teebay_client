import React, { useState } from 'react';

import { Link } from 'react-router-dom';
// import { MdClose } from 'react-icons/md';
import { useLocation, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { user,loginUser } = useAuth();
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {

    loginUser(data.email, data.password);

  }

  // const handleSignIn = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className="w-full h-full fixed block top-0 left-0 bg-white  z-30">
      <Link to="/home">
        <button
          type="button"
          className=" rounded-md p-2 inline-flex items-center justify-center  fixed top-0 right-0 hover:text-brand-1 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset  text-2xl focus:ring-indigo-500"
          style={{ color: '#ff2f59' }}
        >
          {/* <MdClose></MdClose> */}
        </button>
      </Link>
      <div className="flex flex-col justify-center items-center h-screen">
        <h2 className="font-bold text-2xl text-gray-500">SIGN IN</h2>
        <form className="mt-4 " onSubmit={handleSubmit(onSubmit)}>
          <input
            required
            {...register('email', { maxLength: 20 })}
            type="email"
            placeholder="Email"
            className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5"
            style={{ outline: 'none' }}
          />
          <input
            {...register(
              'password',
              { pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ },
              { required: true }
            )}
            type="password"
            placeholder="Password"
            className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5"
            style={{ outline: 'none' }}
          />

          <button className="text-white font-bold py-2 px-7 w-80 rounded-md bg-violet-400">
            <input value="Login" type="submit" />
          </button>
        </form>
        <br />
        {errors.password && (
          <span>password must contain 1 letter and a number</span>
        )}
        <div className="flex items-center justify-center">
          <p className="text-center py-3 my-5 text-brand-1">
            Dont have an account ?
          </p>
          <Link to="/register">
            <p className="font-semibold mx-2 text-xl text-violet-500 ">
              Sign up
            </p>
          </Link>
        </div>
        <hr className="border-0 w-80 bg-bluegray-300 text-gray-500 h-px"></hr>

        {user?.email &&  <h2>{user.email}</h2>}
        
       
      </div>
    </div>
  );
};

export default Login;
