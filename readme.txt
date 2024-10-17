se agrego otro proyecto uno js y el otro de tsx el tsx esta por defecto tailwind defectuoso 

# Pet Management App

Este es un proyecto de una aplicación para la gestión de mascotas. Los usuarios pueden registrarse, iniciar sesión y agregar mascotas con toda su información relevante. La aplicación está construida con **Next.js**, **Node.js**, **Express**, **MongoDB** y **React Hook Form** para el manejo de formularios.

## Características

- Registro de usuarios.
- Inicio de sesión de usuarios autenticados con JWT.
- CRUD (Crear, Leer, Actualizar, Eliminar) para la gestión de mascotas.
- Formulario dinámico para agregar nuevas mascotas, validado con **React Hook Form**.
- Interfaz responsiva con **Tailwind CSS**.
  
## Tecnologías Utilizadas

- **Frontend**: Next.js (React), Tailwind CSS, Axios, React Hook Form.
- **Backend**: Node.js, Express, MongoDB (Mongoose), JWT para autenticación.
- **Base de datos**: MongoDB (utilizando MongoDB Atlas).

## Requisitos previos

Antes de instalar y ejecutar el proyecto, asegúrate de tener lo siguiente instalado en tu sistema:

- [Node.js](https://nodejs.org/) (versión 16.0 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) o acceso a una instancia de MongoDB (se recomienda [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu entorno local:

### 1. Clona el repositorio del back que este es el 

```bash
git clone https://github.com/mrphaox/app_Pets.git

cd tu-repositorio

 Configuración del backend (Node.js)

Ve a la carpeta del backend:

cd backend

Instala las dependencias del backend:
npm install

Crea un archivo .env en la raíz del directorio backend con la siguiente configuración (ajusta las variables según tu entorno):

MONGODB_URI=mongodb+srv://<usuario>:<contraseña>@cluster0.mongodb.net/<nombre-de-la-base-de-datos>?retryWrites=true&w=majority
JWT_SECRET=tu_clave_secreta_para_jwt
PORT=9000

Inicia el servidor del backend:
npm run start

3. Configuración del frontend (Next.js)

Ve a la carpeta del frontend: 

cd frontend/Pet_App

Instala las dependencias del frontend:

npm instal

Asegúrate de que el archivo tailwind.config.js esté correctamente configurado para que Tailwind CSS funcione en el frontend.

Crea un archivo .env.local en la raíz del directorio frontend con la URL base para la API del backend:

NEXT_PUBLIC_API_URL=http://localhost:9000/api

Inicia el servidor de desarrollo de Next.js:
npm run dev

4. Ejecutar la aplicación

El backend debería estar ejecutándose en http://localhost:9000 y el frontend en http://localhost:3000.

Abre el navegador y visita:

http://localhost:3000

Para acceder a la interfaz de la aplicación.

Endpoints de la API (Backend)
Aquí hay una lista de los principales endpoints disponibles en el backend:

Autenticación

Registro de usuario: POST /api/users/register
Iniciar sesión: POST /api/login

Mascotas

Agregar una mascota: POST /api/pets/create
Obtener todas las mascotas del usuario: GET /api/pets/list
Obtener detalles de una mascota: GET /api/pets/:id/view
Actualizar una mascota: PUT /api/pets/:id/update
Eliminar una mascota: DELETE /api/pets/:id/delete

Scripts disponibles
En ambos directorios (backend y frontend), puedes ejecutar:

npm run dev: Ejecuta el proyecto en modo de desarrollo.

npm run build: Compila la aplicación para producción.

npm start: Inicia la aplicación ya compilada (en producción).

Consideraciones adicionales

CORS: Asegúrate de que CORS esté habilitado en el backend para permitir solicitudes desde el frontend. Si es necesario, ajusta la configuración en app.use(cors()).

Contribuir
Si deseas contribuir a este proyecto, sigue estos pasos:

Haz un fork del repositorio.

Crea una nueva rama (git checkout -b nueva-funcionalidad).

Haz los cambios necesarios.
Realiza un commit (git commit -m 'Agrega nueva funcionalidad').

Haz push a la rama (git push origin nueva-funcionalidad).

Abre un Pull Request.

Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

### Explicación del contenido:

1. **Descripción del proyecto**: Breve introducción a lo que hace la aplicación.
2. **Tecnologías utilizadas**: Muestra el stack tecnológico.
3. **Requisitos previos**: Indica las dependencias y requisitos del sistema.
4. **Instrucciones de instalación**: Guía paso a paso para instalar el backend y frontend, incluyendo la configuración de archivos `.env`.
5. **Ejecución**: Explica cómo correr la aplicación y acceder a la interfaz.
6. **Endpoints de la API**: Una breve lista de los endpoints principales del backend.
7. **Scripts disponibles**: Comandos útiles para desarrollar y ejecutar la app.
8. **Contribuir**: Instrucciones para contribuir al proyecto.
9. **Licencia**: Información sobre la licencia del proyecto.