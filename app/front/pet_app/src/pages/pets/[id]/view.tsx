import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getPetById } from '@/utils/api';

const PetDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [pet, setPet] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const fetchPet = async () => {
        try {
          const response = await getPetById(id as string);
          setPet(response.data);
        } catch (error) {
          console.error('Error fetching pet details:', error);
        }
      };
      fetchPet();
    }
  }, [id]);

  if (!pet) return <p>Loading...</p>;

  return (
    <div className="p-6 bg-white max-w-md mx-auto rounded-3xl shadow-lg">
      <img src={pet.photo || '/default-pet.png'} alt={pet.name} className="w-full h-60 object-cover rounded-lg mb-4" />
      <h1 className="text-2xl font-bold mb-4">{pet.name}</h1>
      <p><strong>Especie:</strong> {pet.type}</p>
      <p><strong>Raza:</strong> {pet.breed}</p>
      <p><strong>Edad:</strong> {pet.age} años</p>
      <p><strong>Peso:</strong> {pet.weight} kg</p>
      <p><strong>Estatura:</strong> {pet.height} cm</p>
      <p><strong>Temperamento:</strong> {pet.temperament}</p>
      <p><strong>Número de chip:</strong> {pet.chipNumber}</p>
      <p><strong>Descripción:</strong> {pet.description}</p>

      <button
        onClick={() => router.push(`/pets/${id}/form`)}
        className="w-full px-4 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 mt-6"
      >
        Editar Mascota
      </button>
    </div>
  );
};

export default PetDetails;
