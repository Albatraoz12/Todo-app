'use client';
import React, { useState } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';

const CreateTodo = () => {
  const [title, setTitle] = useState('');

  const fetchAllTodos = async () => {
    const response = await fetch('http://localhost:3000/api/getAllTodos', {
      cache: 'no-store',
    });
    const data = response.json();
    return data;
  };

  const createTodo = async (title: string) => {
    const response = await fetch('http://localhost:3000/api/CreateTodo', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        isCompleted: false,
        createdAt: new Date(),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  };

  const handleChange = (e: any) => {
    e.preventDefault();
    console.log('value: ', e.target.value);
    setTitle(e.target.value);
  };

  return (
    <div className='flex flex-col justify-center items-center gap-3 w-[90%] mx-auto'>
      <label htmlFor='createTodo' className='self-start text-2xl mb-5'>
        Create a todo
      </label>
      <div className='border bg-slate-700 flex justify-center items-center w-full gap-2 py-4 px-3 cursor-pointer'>
        <BsFillPlusCircleFill
          size={40}
          color='rgb(71 85 105)'
          onClick={() => createTodo(title)}
        />
        <input
          type='text'
          id='createTodo'
          name='createTodo'
          onChange={(e) => handleChange(e)}
          className='w-full h-10 rounded px-3 bg-slate-700 focus:border-b-white focus:border-b-2 active:border-b-white active:border-b-2 outline-none'
          placeholder='What do you need to accomplish today?'
        />
      </div>
    </div>
  );
};

export default CreateTodo;
