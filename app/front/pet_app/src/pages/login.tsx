import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { loginUser } from '../utils/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  // Maneja el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await loginUser(email, password);
      localStorage.setItem('token', data.token); // Guardar el token en localStorage
      router.push('/pets/list'); // Redirigir a la página de mascotas
    } catch (error) {
      setErrorMessage('Login failed'); // Mostrar un mensaje de error si falla el login
    }
  };

  // Maneja el cambio del input de email
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Maneja el cambio del input de password
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-500">
      <div className="bg-white w-full max-w-sm p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <div className="bg-black w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
            {/* Puedes agregar un ícono o una letra aquí */}
          </div>
          <h2 className="text-3xl font-semibold text-gray-800">Welcome</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input de Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              className="peer w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
            <label className="absolute left-4 top-1 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm">
              Email
            </label>
          </div>

          {/* Input de Password */}
          <div className="relative">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="peer w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
            <label className="absolute left-4 top-1 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm">
              Password
            </label>
          </div>

          {/* Botón de Enviar */}
          <button
            type="submit"
            className="w-full px-4 py-3 mt-4 text-white font-semibold rounded-md shadow-md transition-all bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            LOGIN
          </button>

          {/* Mensaje de Error */}
          {errorMessage && <p className="text-red-500 mt-4 text-center">{errorMessage}</p>}
        </form>

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
      </div>
    </div>
  );
};

export default Login;
