import { useState, useEffect, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import { createPet, updatePet, getPetById } from'@/utils/api';

const PetForm = () => {
  const router = useRouter();
  const { id } = router.query; // ID de la mascota (si es edición)
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    sex: '',
    breed: '',
    birthdate: '',
    age: 0,
    weight: '',
    height: '',
    temperament: '',
    chipNumber: '',
    description: '',
  });
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    if (id) {
      setIsUpdate(true);
      // Cargar los datos de la mascota en caso de edición
      const fetchPet = async () => {
        try {
          const pet = await getPetById(id as string);
          setFormData({
            ...formData,
            name: pet.data.name,
            type: pet.data.type,
            sex: pet.data.sex,
            breed: pet.data.breed,
            birthdate: pet.data.birthdate,
            age: pet.data.age,
            weight: pet.data.weight,
            height: pet.data.height,
            temperament: pet.data.temperament,
            chipNumber: pet.data.chipNumber,
            description: pet.data.description,
          });
        } catch (error) {
          console.error('Error fetching pet:', error);
        }
      };
      fetchPet();
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      if (isUpdate) {
        await updatePet(id as string, formData);
      } else {
        await createPet(formData);
      }
      router.push('/pets/list');
    } catch (error) {
      console.error('Error saving pet:', error);
    }
  };

    function handleTextareaChange(event: ChangeEvent<HTMLTextAreaElement>): void {
        throw new Error('Function not implemented.');
    }

  return (
    <div className="p-6 bg-white max-w-md mx-auto rounded-3xl shadow-lg">
      <h1 className="text-2xl font-bold mb-6">{isUpdate ? 'Actualizar Mascota' : 'Agregar Mascota'}</h1>

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nombre"
        className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        name="type"
        value={formData.type}
        onChange={handleChange}
        placeholder="Especie"
        className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        name="sex"
        value={formData.sex}
        onChange={handleChange}
        placeholder="Sexo"
        className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        name="breed"
        value={formData.breed}
        onChange={handleChange}
        placeholder="Raza"
        className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg"
      />
      <input
        type="date"
        name="birthdate"
        value={formData.birthdate}
        onChange={handleChange}
        placeholder="Fecha de nacimiento"
        className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg"
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Edad"
        className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        name="weight"
        value={formData.weight}
        onChange={handleChange}
        placeholder="Peso"
        className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        name="height"
        value={formData.height}
        onChange={handleChange}
        placeholder="Estatura"
        className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        name="temperament"
        value={formData.temperament}
        onChange={handleChange}
        placeholder="Temperamento"
        className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        name="chipNumber"
        value={formData.chipNumber}
        onChange={handleChange}
        placeholder="Número de Chip"
        className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleTextareaChange}
        placeholder="Descripción"
        className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg"
      ></textarea>

      <button
        onClick={handleSubmit}
        className="w-full px-4 py-3 text-white font-semibold rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-purple-600"
      >
        {isUpdate ? 'Actualizar Mascota' : 'Crear Mascota'}
      </button>
    </div>
  );
};

export default PetForm;
