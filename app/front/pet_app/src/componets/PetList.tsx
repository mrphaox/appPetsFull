"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface Pet {
  _id: string;
  name: string;
  type: string;
  age: number;
}

export default function PetList() {
  const [pets, setPets] = useState<Pet[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPets = async () => {
      const response = await axios.get('/api/pets/list');
      setPets(response.data);
    };
    fetchPets();
  }, []);

  const handleDelete = async (id: string) => {
    await axios.delete(`/api/pets/${id}`);
    setPets(pets.filter(pet => pet._id !== id));
  };

  return (
    <div>
      <h1 className="text-3xl mb-4">Listado de Mascotas</h1>
      <button onClick={() => router.push('/pets/create')} className="bg-green-500 text-white px-4 py-2 rounded">
        Agregar Mascota
      </button>
      <ul>
        {pets.map(pet => (
          <li key={pet._id} className="mb-2">
            <span>{pet.name} ({pet.type}) - {pet.age} años</span>
            <button onClick={() => router.push(`/pets/${pet._id}/update`)} className="bg-yellow-500 text-white px-2 py-1 ml-2">Actualizar</button>
            <button onClick={() => handleDelete(pet._id)} className="bg-red-500 text-white px-2 py-1 ml-2">Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
