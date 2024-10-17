'use client';

import React from 'react';

interface iInput {
  type?: "text" | "email" | "password";
  placeholder?: string;
  name: string;
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export const Input = ({ type = "text", label, name, placeholder, value, onChange, required = false }: iInput) => {
  return (
    <div className="w-[300px] border-[2px] border-solid rounded-[5px]">
      {label && <label className="text-[14px]" htmlFor={name}>{label}</label>}
      <input 
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        required={required}
        className="h-full p-2 w-full bg-none outline-none border-none"
      />
    </div>
  );
};
