import React,{useState} from "react";
import { css } from "@emotion/react";
import { InputText, InputSubmit } from "../../styles/Buscar/Buscar";
import { useRouter } from "next/router";

const Buscar = () => {

  const [ busqueda, guardarBusqueda ] = useState ('');
  console.log(busqueda);
  const router = useRouter();

  const buscarProducto = e =>{
    e.preventDefault();

    if(busqueda.trim() === '') return;
    
    router.push({
      pathname: '/buscar',
      query: {q: busqueda}
    })
  }

  return (
    <form

      onSubmit={buscarProducto}
      css={css`
        position: relative;
      `}
    >
      <InputText 
      type="text"
      placeholder="Buscar productos"
      onChange={e => guardarBusqueda(e.target.value)}
       />
      <InputSubmit type="submmit">Buscar</InputSubmit>
    </form>
  );
};

export default Buscar;
