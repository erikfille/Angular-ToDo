// Crea el enum que se utilizará luego en la interface
export enum Levels {
  'Info',
  'Urgent',
  'Blocking',
}

// Declara los tipos de datos básicos de las tareas
export interface ITask {
  title: string;
  description: string;
  completed: boolean;
  level: Levels;
}
