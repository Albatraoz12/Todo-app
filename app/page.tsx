import CreateTodo from '@/components/CreateTodo';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='container flex min-h-screen flex-col items-center justify-between mx-auto mt-10'>
      <section className='w-full'>
        <CreateTodo />
      </section>
    </main>
  );
}
