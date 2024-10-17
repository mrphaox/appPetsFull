import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { createPet } from '@/utils/api'; // Asegúrate de tener implementada esta función
import { Button } from '@/componets/Buttons/button'; // Componente Button reutilizable
import { Input } from '@/componets/Input/input'; // Componente Input reutilizable

const AddPetForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  // Función para manejar el envío del formulario
  const onSubmit = async (data: any) => {
    try {
      const token = localStorage.getItem('token'); // Obtener token del usuario logueado
      if (!token) {
        throw new Error('No estás autenticado');
      }

      // Aquí llamamos a la función que creará la mascota
      await createPet(data); 
      router.push('/pets/list'); // Redirigir a la lista de mascotas después de agregar
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-semibold text-center mb-6">Agregar Mascota</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Input para el nombre */}
          <div>
            <label className="block text-gray-700 font-medium">Nombre de la Mascota</label>
            <Input
              name="name"
              placeholder="Nombre"
              {...register('name', { required: true })}
              className={`mt-2 ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">Este campo es requerido</p>}
          </div>

          {/* Input para el tipo de mascota */}
          <div>
            <label className="block text-gray-700 font-medium">Tipo de Mascota</label>
            <Input
              name="type"
              placeholder="Perro, Gato, etc."
              {...register('type', { required: true })}
              className={`mt-2 ${errors.type ? 'border-red-500' : ''}`}
            />
            {errors.type && <p className="text-red-500 text-sm mt-1">Este campo es requerido</p>}
          </div>

          {/* Input para la raza */}
          <div>
            <label className="block text-gray-700 font-medium">Raza</label>
            <Input
              name="breed"
              placeholder="Raza de la Mascota"
              {...register('breed')}
            />
          </div>

          {/* Input para la edad */}
          <div>
            <label className="block text-gray-700 font-medium">Edad</label>
            <Input
              name="age"
              placeholder="Edad en años"
              type="number"
              {...register('age', { required: true, min: 0 })}
              className={`mt-2 ${errors.age ? 'border-red-500' : ''}`}
            />
            {errors.age && <p className="text-red-500 text-sm mt-1">Edad es requerida y debe ser mayor o igual a 0</p>}
          </div>

          {/* Input para el número de chip (opcional) */}
          <div>
            <label className="block text-gray-700 font-medium">Número de Chip (opcional)</label>
            <Input
              name="chipNumber"
              placeholder="Número de Chip"
              {...register('chipNumber')}
            />
          </div>

          {/* Botón de envío */}
          <Button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg"
            type="submit"
          >
            Agregar Mascota
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddPetForm;
