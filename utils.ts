export const Todos = [
  {
    title: 'First Todo',
    isCompleted: false,
    createdAt: new Date().toLocaleDateString(),
  },
  {
    title: 'Second Todo',
    isCompleted: true,
    createdAt: new Date().toLocaleDateString(),
  },
];

export interface Todo {
  title: string;
  isCompleted: boolean;
  createdAt: string;
}
