import React, { useContext } from "react";
import Link from "next/link";
import { Nav } from "../../styles/Navegacion/Navegacion";
import FirebaseContext from "../../firebase/context/context";

const Navegacion = () => {
  const { usuario } = useContext(FirebaseContext);
  return (
    <Nav>
      <Link href="/">Inicio</Link>
      <Link href="/populares">Populares</Link>
      {usuario && (<Link href="/nuevo-producto">Nuevo Producto</Link>)}
    </Nav>
  );
};

export default Navegacion;
