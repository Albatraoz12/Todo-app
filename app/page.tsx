import CreateTodo from '@/components/CreateTodo';
import ShowAllTodos from '@/components/ShowAllTodos';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='container flex flex-col items-center justify-between mx-auto mt-10 gap-10'>
      <section className='w-full'>
        <CreateTodo />
      </section>
      <section className='mt-5'>
        <ShowAllTodos />
      </section>
    </main>
  );
}
