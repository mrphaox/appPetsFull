"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/utils/api'; // Supongo que ya tienes la función loginUser implementada
import { Input } from '@/componets/Input/input'; // Componente Input reutilizable
import { Logo } from '@/componets/Logo/logo'; // Componente Logo reutilizable
import { Button } from '@/componets/Buttons/button'; // Componente Button reutilizable
import Image from 'next/image';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = loginData;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (!email || !password) {
        throw new Error('Please enter email and password');
      }

      // Realizar la solicitud al backend para iniciar sesión
      const data = await loginUser(email, password);
      localStorage.setItem('token', data.token); // Guardar el token en localStorage
      router.push('/pets/list'); // Redirigir a la página de mascotas
    } catch (error: any) {
      setErrorMessage('Login failed. Please check your credentials');
    }
  };

  return (<><br/>
  <div className="bg-white w-full max-w-md p-10 rounded-3xl shadow-lg mx-auto">
      <div className="text-center mb-6">
      <h2 className="text-3xl font-bold text-gray-800 mt-4">
          <Image src="/logo.png" className='center-item' width={50} height={50} alt="logo" />
          Welcome Back</h2>
          <p className="text-black-500 mt-2">Please log in to your account</p>
      </div>

      <div className="space-y-6">
          <div className="peer w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500">
              <Input
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleOnChange}
                  placeholder="Email"
                  required={true} />
          </div>

          <div className="peer w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500">
              <Input
                  name="password"
                  type="password"
                  value={password}
                  onChange={handleOnChange}
                  placeholder="Password"
                  required={true} />
          </div>

          <Button
              className="w-full px-4 py-3 text-white font-semibold rounded-lg shadow-md transition-all bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={handleSubmit}
          >
              Log in
          </Button>

          {errorMessage && (
              <p className="text-red-500 mt-5 text-center">🔔 {errorMessage}</p>
          )}
      </div>

      <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <a
                  href="/register"
                  className="text-blue-500 hover:text-blue-700 font-medium transition-colors"
              >
                  Sign Up
              </a>
          </p>
      </div>
  </div></>
  );
};

export default Login;
