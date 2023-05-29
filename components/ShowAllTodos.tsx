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
    <div className='border w-[90%] flex flex-col p-5 mx-auto'>
      {todoList &&
        todoList.map((todo: Todo, index: number) => (
          <div key={index} className='flex gap-4'>
            <input
              type='checkbox'
              name='completed'
              id={`completed-${index}`}
              onChange={() => handleToggleCompleted(index)}
              checked={todo.isCompleted}
            />
            <p className={todo.isCompleted ? 'line-through' : ''}>
              {todo.title}
            </p>
            <p>{todo.createdAt}</p>
            <p>{todo.isCompleted.toString()}</p>
          </div>
        ))}
    </div>
  );
};

export default ShowAllTodos;
