"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface PetFormProps {
  pet?: {
    _id: string;
    name: string;
    type: string;
    age: number;
  };
}

export default function PetForm({ pet }: PetFormProps) {
  const [name, setName] = useState(pet?.name || '');
  const [type, setType] = useState(pet?.type || '');
  const [age, setAge] = useState(pet?.age || 0);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pet) {
      await axios.put(`/api/pets/${pet._id}`, { name, type, age });
    } else {
      await axios.post('/api/pets', { name, type, age });
    }
    router.push('/pets/list');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-2 border rounded-md"
      />
      <input
        type="text"
        placeholder="Tipo"
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full px-4 py-2 border rounded-md mt-4"
      />
      <input
        type="number"
        placeholder="Edad"
        value={age}
        onChange={(e) => setAge(parseInt(e.target.value))}
        className="w-full px-4 py-2 border rounded-md mt-4"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md mt-4"
        >
          {pet ? 'Actualizar Mascota' : 'Agregar Mascota'}
        </button>
      </form>
    );
  }
