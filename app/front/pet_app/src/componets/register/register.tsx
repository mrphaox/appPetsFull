"use client"; // Si estás en App Router y el componente necesita hooks

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Para redirigir después del registro
import { registerUser } from '@/utils/api'; // Supongo que tienes esta función para la llamada a la API
import { Input } from '@/componets/Input/input'; // Componente Input reutilizable
import { Button } from '@/componets/Buttons/button'; // Componente Button reutilizable

const RegisterForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = registerData;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (!name || !email || !password) {
        throw new Error('Please fill in all fields');
      }

      const data = await registerUser(name, email, password);
      localStorage.setItem('token', data.token); // Guardar el token en localStorage
      router.push('/pets/list'); // Redirigir a la lista de mascotas después del registro
    } catch (error: any) {
      setErrorMessage('Registration failed. Please check your input.');
    }
  };

  return (
    <div className="bg-white w-full max-w-md p-10 rounded-3xl shadow-lg mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mt-4">Create an Account</h2>
        <p className="text-gray-500 mt-2">Sign up to start managing your pets</p>
      </div>

      <div className="space-y-6">
        <div className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
          <Input
            name="name"
            type="text"
            value={name}
            onChange={handleOnChange}
            placeholder="Full Name"
            required={true}
          />
        </div>

        <div className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
          <Input
            name="email"
            type="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Email"
            required={true}
          />
        </div>

        <div className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
          <Input
            name="password"
            type="password"
            value={password}
            onChange={handleOnChange}
            placeholder="Password"
            required={true}
          />
        </div>

        <Button
          className="w-full px-4 py-3 text-white font-semibold rounded-lg shadow-md transition-all bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={handleSubmit}
        >
          Sign Up
        </Button>

        {errorMessage && (
          <p className="text-red-500 mt-5 text-center">🔔 {errorMessage}</p>
        )}
      </div>

      <div className="text-center mt-6">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <a
            href="/login"
            className="text-blue-500 hover:text-blue-700 font-medium transition-colors"
          >
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
