import axios from 'axios';


// Crear una instancia de Axios con la configuración base
const api = axios.create({
  baseURL: 'http://localhost:9000/api', // URL base de tu backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para agregar el token de autorización automáticamente
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Obtener el token del localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Adjuntar el token si está disponible
  }
  return config;
});

export default api;

// Iniciar sesión
export const loginUser = async (email: string, password: string) => {
  const response = await api.post('/login', { email, contraseña: password });
  return response.data;
};

// Registrar un nuevo usuario
export const registerUser = async (nombre: string, email: string, password: string) => {
  const response = await api.post('/users/register', { nombre, email, contraseña: password });
  return response.data;
};

// Obtener los detalles de un usuario por ID
export const getUserById = async (id: string) => {
  const response = await api.get(`/users/${id}/view`);
  return response.data;
};

// Actualizar un usuario
export const updateUser = async (id: string, data: any) => {
  const response = await api.put(`/users/${id}/update`, data);
  return response.data;
};

// Eliminar un usuario
export const deleteUser = async (id: string) => {
  const response = await api.delete(`/users/${id}/delete`);
  return response.data;
};


// **Funciones relacionadas con las mascotas**

// Obtener todas las mascotas
export const getPets = async () => {
  const response = await api.get('/pets/list');
  return response.data;
};

// Obtener una mascota por su ID
export const getPetById = async (id: string) => {
  const response = await api.get(`/pets/${id}/view`);
  return response.data;
};

// Crear una nueva mascota
export const createPet = async (data: any) => {
  const response = await api.post('/pets/create', data);
  return response.data;
};

// Actualizar una mascota
export const updatePet = async (id: string, data: any) => {
  const response = await api.put(`/pets/${id}/update`, data);
  return response.data;
};

// Eliminar una mascota
export const deletePet = async (id: string) => {
  const response = await api.delete(`/pets/${id}/delete`);
  return response.data;
};