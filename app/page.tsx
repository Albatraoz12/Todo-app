'use client';
import CreateTodo from '@/components/CreateTodo';
import ShowAllTodos from '@/components/ShowAllTodos';
import { Todo } from '@/utils';
import { useQuery } from 'react-query';

const fetchAllTodos = async () => {
  const response = await fetch('http://localhost:3000/api/getAllTodos', {
    cache: 'no-store',
  });
  const data = response.json();
  return data;
};

export default function Home() {
  const { data, error, isLoading } = useQuery<Todo[]>({
    queryFn: fetchAllTodos,
    queryKey: ['todos'],
  });
  if (error) return error;
  if (isLoading) return 'Loading...';

  console.log(data);

  return (
    <main className='container flex flex-col items-center justify-between mx-auto mt-10 gap-10'>
      <h1 className='text-center text-2xl'>Todo Tracker</h1>
      <section className='w-full'>
        <CreateTodo />
      </section>
      <section className='mt-5 w-full'>
        <ShowAllTodos todos={data} />
      </section>
    </main>
  );
}
