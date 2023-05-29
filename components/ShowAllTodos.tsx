'use client';
import { Todo } from '@/utils';
import React, { useState } from 'react';

const ShowAllTodos = ({ todos }: any) => {
  const [todoList, setTodoList] = useState(todos);

  const handleToggleCompleted = (index: number) => {
    const updatedTodos = [...todoList];
    updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted;
    setTodoList(updatedTodos);
  };

  return (
    <div>
      <fieldset className='flex flex-col p-5 mx-auto gap-3 w-[90%] bg-slate-700'>
        <legend className='hidden'>All your todos!</legend>
        {todoList &&
          todoList.map((todo: Todo, index: number) => (
            <div
              key={index}
              className='flex items-center gap-4 border-b-2 py-4'
            >
              <input
                type='checkbox'
                name='todo'
                id={`todo-${index}`}
                className='h-5 w-5 appearance-none border border-gray-300 rounded-md checked:bg-green-500 checked:border-transparent focus:outline-none'
                onChange={() => handleToggleCompleted(index)}
                checked={todo.isCompleted}
              />

              <label
                htmlFor={`todo-${index}`}
                className={
                  todo.isCompleted ? 'line-through text-green-500' : ''
                }
              >
                {todo.title}
              </label>
            </div>
          ))}
      </fieldset>
    </div>
  );
};

export default ShowAllTodos;
