export interface CreateTask {
  destinatario: string;
  nombre: string;
  entregado: boolean;
}

export interface UpdateTask {
  destinatario?: string;
  nombre?: string;
  entregado?: boolean;
}

interface Task {
  id: string;
  destinatario: string;
}

export interface Tasks {
  resultado: string;
  mensaje: string;
  datos: Task[];
}
