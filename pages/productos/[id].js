import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";
import FirebaseContext from "../../firebase/context/context";
import Error404 from "../../components/Layout/404";
import Layout from "../../components/Layout/Layout";
import { ContenedorProducto, CreadorProducto,ImgProducto,ContainerComentarios,Comentario,TituloC,Creador,TituloP,VotosP} from "../../styles/Producto/Producto";
import {
  Campo,
  InputSubmitFormulario,
} from "../../styles/Formularios/Formularios";
import { Boton } from "../../styles/Header/Header";

const Producto = () => {
  const [producto, guardarProducto] = useState({});
  const [error, guardarError] = useState(false);
  const [comentario, guardarComentario] = useState({});
  const [ consultarDB, guardarConsultarDB ] = useState (true);
  
  

  const router = useRouter();
  const {
    query: { id },
  } = router;
  const { firebase, usuario } = useContext(FirebaseContext);
  useEffect(() => {
    if (id && consultarDB ) {
      const obtenerProducto = async () => {
        const response = await firebase.traerProductoId(id);
        guardarProducto(response);
        guardarConsultarDB(false);
      };
      obtenerProducto();
    }
  }, [id, producto]);

  if (Object.keys(producto).length === 0) return "Cargando.....";
  const {
    comentarios,
    creado,
    descripcion,
    nombre,
    empresa,
    url,
    URLImage,
    votos,
    creador,
    haVotado,
  } = producto;

  const VotarProducto = async () => {
    if (!usuario) {
      return router.push("/login");
    }

    const NuevoTotalVotos = votos + 1;

    //verificar si ha votado ya

    if (haVotado.includes(usuario.uid)) return;

    //guardar id haVotado
    const hanVotado = [...haVotado, usuario.uid];
    //Actualizar db

    await firebase.ActualizarProductoId(NuevoTotalVotos, id, hanVotado);

    //Modificar estado
    guardarProducto({ ...producto, votos: NuevoTotalVotos });
    guardarConsultarDB(true);
  };

  //Crear comentario
  const comentarioChange = (e) => {
    guardarComentario({
      ...comentario,
      [e.target.name]: e.target.value,
    });
  };

  const esCreador = id =>{
    if(creador.id == id){
        return true;
    }
  }

  const agregarComentario = async (e) => {
    e.preventDefault();
    try {
      if (!usuario) {
        return router.push("/login");
      }
      comentario.usuarioID = usuario.uid;
      comentario.usuarioNombre = usuario.displayName;
  
      const NuevosComentarios = [...comentarios, comentario];
  
      await firebase.ActualizarComentarios(NuevosComentarios, id);
  
      guardarProducto({
        ...producto,
        comentarios: NuevosComentarios,
      });
      guardarConsultarDB(true);
    } catch (error) {
      guardarError(true);
    }
  };

  const puedeBorrar =()=>{
    if(!usuario) return false;

    if(creador.id == usuario.uid){
      return true;
    }
    
  }

  return (
    <>
      <Layout>
        <>
          {error && <Error404 />}

          <div className="contenedor">
            <TituloP>{nombre}</TituloP>
            <ContenedorProducto>
              <div>
                <p>
                  Publicado:{" "}
                  {formatDistanceToNow(new Date(creado), { locale: es })}
                </p>
                <p>
                  Publicado por: {creador.nombre} de {empresa}
                </p>
                <ImgProducto src={URLImage} alt="ImageProduct"/>
                <p>{descripcion}</p>

                {usuario && (
                  <>
                    <TituloC>Agrega tu comentario</TituloC>
                    <form onSubmit={agregarComentario}>
                      <Campo>
                        <input
                          type="text"
                          name="mensaje"
                          onChange={comentarioChange}
                        />
                      </Campo>
                      <InputSubmitFormulario
                        type="submit"
                        value="Agregar comentario"
                      />
                    </form>
                  </>
                )}

                <TituloC>Comentarios</TituloC>

                {comentarios.length === 0 ? (
                  "Aún no hay comentarios"
                ) : (
                  <ContainerComentarios>
                    {comentarios.map((comentario, i) => (
                      <Comentario key={`${comentario.usuarioID}-${i}`}>
                        <Creador>
                          <span> {comentario.usuarioNombre}</span>
                        </Creador>
                        <p>{comentario.mensaje}</p>
                        {esCreador(comentario.usuarioID) && 
                        <CreadorProducto>
                            Creador
                        </CreadorProducto>}
                      </Comentario>
                    ))}
                  </ContainerComentarios>
                )}
              </div>
              <aside>
                <Boton target="_black" bgColor="true" href={url}>
                  Visitar URL
                </Boton>

                <div>
                  <VotosP>{votos} Votos</VotosP>
                  {usuario && <Boton onClick={VotarProducto}>Votar</Boton>}
                </div>
              </aside>
            </ContenedorProducto>
            {puedeBorrar()&& 
            <Boton>
              Eliminar Producto
              </Boton>}
          </div>
        </>
      </Layout>
    </>
  );
};

export default Producto;
