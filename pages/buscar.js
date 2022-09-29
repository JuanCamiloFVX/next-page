import React,{ useEffect,useState } from "react";
import Layout from "../components/Layout/Layout";
import useProductos from "../hooks/useProductos/useProductos";
import { useRouter } from "next/router";
import DetallesProducto from "../components/Layout/DetallesProducto";

const Buscar = () => {

  const {productos} = useProductos("votos");
  const [ resultado, guardarResultado ] = useState ([]);
  
  
  const router = useRouter()
  const {query:{q}} = router

  useEffect(()=>{
    const busqueda = q.toLowerCase();
    const filtro = productos.filter(producto =>{
      return(
        producto.nombre.toLowerCase().includes(busqueda)||
        producto.descripcion.toLowerCase().includes(busqueda)
      )
    });
    guardarResultado(filtro);
  },[q,productos])

  return (
    <Layout>
      <div className="listado-productos">
        <div className="contenedor">
          {resultado.length === 0 ? (
            "No hay productos aún"
          ) : (
            <ul className="bg-white">
              {resultado.map((producto) => (
                <DetallesProducto key={producto.id} producto={producto} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Buscar;
