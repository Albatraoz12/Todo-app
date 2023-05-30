import { NextResponse } from 'next/server';
import { Todos } from '@/utils';

export async function POST(request: Request) {
  const data = await request.json();
  console.log(data);
  const updateTodos = [...Todos, data];
  return NextResponse.json({ updateTodos });
}
