import React from "react";
import {
  Img,
  Producto,
  DescripcionProducto,
  Comentarios,
  Votos,
  Titulo,
  TextoDescripcion,
} from "../../styles/Detallesproducto/DetallesProducto";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";
import Link from "next/link";

const DetallesProducto = ({ producto }) => {
  const {
    id,
    comentarios,
    creado,
    descripcion,
    nombre,
    empresa,
    url,
    URLImage,
    votos,
  } = producto;

  return (
    <Producto>
      <DescripcionProducto>
        <div>
          <Img src= {URLImage} alt="ImageProduct" />
        </div>
        <div>
          <Link href ="/productos/[id]" as={`/productos/${id}`}>
            <Titulo>{nombre}</Titulo>
          </Link>
          <TextoDescripcion>{descripcion}</TextoDescripcion>
          <Comentarios>
            <div>
              <img src="/static/img/comentario.png" />
              <p>{comentarios.length} Comentarios</p>
            </div>
          </Comentarios>
          <p>
            {" "}
            Publicado: {formatDistanceToNow(new Date(creado), { locale: es })}
          </p>
        </div>
      </DescripcionProducto>
      <Votos>
        <div>&#9650;</div>
        <p>{votos}</p>
      </Votos>
    </Producto>
  );
};

export default DetallesProducto;
