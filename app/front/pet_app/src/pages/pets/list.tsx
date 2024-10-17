import { useEffect, useState } from 'react';
import { getPets } from '@/utils/api'; // Asegúrate de que esta función esté definida correctamente
import { PetCard } from '@/componets/Petcard'; // Componente de tarjeta de mascota
import { AgregarCard } from '@/componets/agregarCard'; // Componente de agregar mascota

const PetList = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await getPets();
        setPets(response);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };

    fetchPets();
  }, []);

  return (
    <div className="p-6 max-w-screen-lg mx-auto">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-4">Tus mascotas</h1>
      <p className="text-lg text-gray-500 text-center mb-8">Selecciona la mascota que quieras consultar o agrega una nueva</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pets.map((pet) => (
          <PetCard key={pet._id} name={pet.name} image={pet.image} />
        ))}
        <AgregarCard />
      </div>
    </div>
  );
};

export default PetList;
