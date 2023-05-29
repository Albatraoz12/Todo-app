import { NextResponse } from 'next/server';
import { Todos } from '../../../utils';

export async function GET(request: Request) {
  return NextResponse.json({ message: Todos, status: 200 });
}
