import React, { useState } from 'react';
// import logo from '../../../images/pngegg.png';
// import logo from '../../assets/logo_dark.png';
import { Link } from 'react-router-dom';
// import { MdClose } from 'react-icons/md';
import { useLocation, useHistory } from 'react-router-dom';
// import { BsGoogle } from 'react-icons/bs';
// import useAuth from '../../../hooks/useAuth';
import { MdClose } from 'react-icons/md';
import { BsGoogle } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { data } from 'autoprefixer';

const Register = () => {
  const { error, setError, registerUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setError('no match');
    } else {
      const newUser = {
        name: data.firstName + data.lastName,
        email: data.email,
        password: data.password,
      };
      registerUser(newUser);

      setError('');
    }
  };
  //register with email and pass

  return (
    <div className="w-full h-full fixed block top-0 left-0 bg-white  z-30">
      <Link to="/home">
        <button
          type="button"
          className="bg-white rounded-md p-2 inline-flex items-center justify-center  fixed top-0 right-0 hover:text-brand-1 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset  text-2xl focus:ring-indigo-500"
          style={{ color: '#ff2f59' }}
        >
          <MdClose></MdClose>
        </button>
      </Link>
      <div className="flex  flex-col justify-center items-center h-screen">
        <h2 className="font-bold text-2xl text-gray-500">SIGN UP</h2>

        <form className="mt-4    " onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex block justify-center">
            <input
              {...register('firstName', { maxLength: 20 })}
              required
              type="text"
              placeholder="First Name"
              className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5 md:mx-4 mx-0"
              style={{ outline: 'none' }}
            />
            <input
              {...register('lastName', { maxLength: 20 })}
              required
              type="text"
              placeholder="Last Name"
              className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5"
              style={{ outline: 'none' }}
            />
          </div>
          <div className="md:flex block justify-center">
            <input
              type="text"
              placeholder="Email"
              required
              {...register('email')}
              className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5 md:mx-4 mx-0"
              style={{ outline: 'none' }}
            />
            <input
              type="number"
              placeholder="Phone Number"
              required
              {...register('phone')}
              className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5"
              style={{ outline: 'none' }}
            />
          </div>

          <input
            required
            type="password"
            placeholder="Password"
            {...register(
              'password',
              { pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ },
              { required: true }
            )}
            className="text-sm md:w-full w-80 bg-gray-100 flex flex-row mx-auto h-12 pl-5 rounded-lg my-5"
            style={{ outline: 'none' }}
          />
          <input
            required
            type="password"
            placeholder="Confirm Password"
            {...register('confirmPassword', { required: true })}
            className="text-sm md:w-full w-80  bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5 mx-auto"
            style={{ outline: 'none' }}
          />
          {errors.password ? (
            <span className="text-red-500 mt-5 block">
              password must contain 1 letter and a number(minumun 8 characters)
            </span>
          ) : (
            <span className="text-red-500 mt-5 block">{error}</span>
          )}

          <button className="text-white font-bold py-2 px-7 w-80 rounded-md bg-violet-400 mt-5">
            <input value="Login" type="submit" />
          </button>
          <br />
          <div className="flex items-center justify-center mt-6">
            <p className="text-center py-3 font-semibold text-brand-1">
              Already have an account?
            </p>
            <Link to="/login">
              <p className="font-semibold mx-2 text-xl text-violet-500 ">
                Log In
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
