import Image from 'next/image';

interface PetCardProps {
  name: string;
  image: string;
  raza: string; 
}

export const PetCard = ({ name, image, raza }: PetCardProps) => {
  return (
    <div className="card">
    <div className="w-full flex flex-col items-center p-4 rounded-lg shadow-md bg-white transition-transform transform hover:scale-105 hover:shadow-lg">
      <Image src={image} alt={name} width={100} height={100} className="rounded-full rounded-se-md bg-rose-50 " />
      <p className='mt-2 font-semibold text-lg text-gray-700'>{name}</p>
      <p className='mt-2 font-semibold text-lg text-gray-700'>{raza}</p>
    </div>
    </div>
  );
};

