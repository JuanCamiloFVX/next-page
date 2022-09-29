import React, { useContext } from "react";
import Buscar from "../ui/Buscar";
import Navegacion from "../layout/Navegacion";
import Link from "next/link";
import {
  HeaderNav,
  ContenedorHeader,
  Logo,
  Boton,
  ContenedorEstandar,
} from "../../styles/Header/Header";
import { css } from "@emotion/react";
import FirebaseContext from "../../firebase/context/context";

const Header = () => {
  
  const {usuario, firebase} = useContext(FirebaseContext);

  return (
    <HeaderNav>
      <ContenedorHeader>
        <ContenedorEstandar>
          <Link href="/">
            <Logo>P</Logo>
          </Link>

          <Buscar />
          <Navegacion />
        </ContenedorEstandar>
        <ContenedorEstandar>
          {usuario ? (
            <>
              <p
                css={css`
                  margin-right: 2rem;
                `}
              >
                Hola: {usuario.displayName}
              </p>
              <Boton 
              bgColor="true"
              onClick={()=> firebase.cerrar()}
              >Cerrar Sesion</Boton>
            </>
          ) : (
            <>
              <Link href="/iniciar-sesion">
                <Boton bgColor="true">Iniciar Sesion</Boton>
              </Link>
              <Link href="/crear-cuenta">
                <Boton>Crear Cuenta</Boton>
              </Link>
            </>
          )}
        </ContenedorEstandar>
      </ContenedorHeader>
    </HeaderNav>
  );
};

export default Header;
