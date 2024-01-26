interface Gift {
  destinatario: string;
  nombre: string;
  entregado: boolean;
}

interface GiftRes {
  resultado: string;
  mensaje: string;
  datos: {
    id: string;
    destinatario: string;
    nombre: string;
    entregado: boolean;
  };
}

interface BasicGift {
  id: string;
  destinatario: string;
}

interface GiftsRes {
  resultado: string;
  mensaje: string;
  datos: BasicGift[];
}

interface GiftPutDelRes {
  resultado: string;
  mensaje: string;
  datos: string;
}
