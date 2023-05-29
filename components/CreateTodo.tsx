'use client';

import { BsFillPlusCircleFill } from 'react-icons/bs';

import React from 'react';

const CreateTodo = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-3 w-[90%] mx-auto'>
      <label htmlFor='createTodo' className='self-start text-2xl mb-5'>
        Create a todo
      </label>
      <div className='border bg-slate-700 flex justify-center items-center w-full gap-2 py-4 px-3 cursor-pointer'>
        <BsFillPlusCircleFill
          size={40}
          color='rgb(71 85 105)'
          onClick={() => console.log('clicked')}
        />
        <input
          type='text'
          id='createTodo'
          name='createTodo'
          className='w-full h-10 rounded px-3 bg-slate-700 focus:border-b-white focus:border-b-2 active:border-b-white active:border-b-2 outline-none'
          placeholder='What do you need to accomplish today?'
        />
      </div>
    </div>
  );
};

export default CreateTodo;
