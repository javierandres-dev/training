export interface Gift {
  id?: string;
  destinatario: string;
  nombre: string;
  entregado: boolean;
}

interface Item {
  id: string;
  destinatario: string;
}

interface GetAllRes {
  resultado: string;
  mensaje: string;
  datos: Item[];
}

interface GetRes {
  resultado: string;
  mensaje: string;
  datos: {
    id: string;
    destinatario: string;
    nombre: string;
    entregado: boolean;
  };
}

interface BasicRes {
  resultado: string;
  mensaje: string;
  datos: string;
}
