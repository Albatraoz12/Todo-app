import { NextResponse } from 'next/server';
import { Todo } from '../../../utils';

export async function GET(request: Request) {
  return NextResponse.json({ message: Todo, status: 200 });
}
