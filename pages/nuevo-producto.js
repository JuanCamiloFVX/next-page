import { useState, useContext } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout/Layout";
import firebase from "../firebase";
import FirebaseContext from "../firebase/context/context";
import {
  Formulario,
  Campo,
  TitleFormulario,
  Error,
  InputSubmitProducto,
} from "../styles/Formularios/Formularios";
import useValidacion from "../hooks/useValidacion/useValidacion";
import validarCrearProducto from "../Validaciones/validarCrearProducto";
import Error404 from "../components/Layout/404";

const INITIAL_STATE = {
  nombre: "",
  empresa: "",
  url: "",
  descripcion: "",
};

const NuevoProducto = () => {
  const [imagenUpload, guardarImagenUpload] = useState(null);

  const [error, guardarError] = useState(false);
  const router = useRouter();
  const { valores, errores, handleChange, handleSubmit, handleBlur } =
    useValidacion(INITIAL_STATE, validarCrearProducto, crearProducto);

  const { nombre, empresa, url, descripcion } = valores;

  const { usuario, firebase } = useContext(FirebaseContext);

  async function crearProducto() {
    if (!usuario) {
      return router.push("/login");
    }

    //Guarda y trae la url de la imagen
    const URLImage = await firebase.guardarImagen(imagenUpload);
    const producto = {
      nombre,
      empresa,
      url,
      URLImage,
      descripcion,
      votos: 0,
      comentarios: [],
      creado: Date.now(),
      creador: {
        id: usuario.uid,
        nombre: usuario.displayName,
      },
      haVotado: []
    };
    //crear el objeto de nuevo producto
    await firebase.guardarProducto(producto);
    router.push("/");
  }

  return (
    <div>
      <Layout>
        {!usuario ? (
          <Error404 />
        ) : (
          <div>
            <TitleFormulario>Nuevo Producto</TitleFormulario>
            <Formulario onSubmit={handleSubmit} noValidate>
              <fieldset>
                <legend>Información General</legend>

                <Campo>
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    placeholder="Nombre del Producto"
                    name="nombre"
                    value={nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Campo>

                {errores.nombre && <Error>{errores.nombre}</Error>}

                <Campo>
                  <label htmlFor="empresa">Empresa</label>
                  <input
                    type="text"
                    id="empresa"
                    placeholder="Nombre de la Empresa o Compañia"
                    name="empresa"
                    value={empresa}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Campo>
                {errores.empresa && <Error>{errores.empresa}</Error>}

                <Campo>
                  <label htmlFor="url">URL</label>
                  <input
                    type="url"
                    id="url"
                    placeholder="Escribe la URL de tu Producto"
                    name="url"
                    value={url}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Campo>
                {errores.url && <Error>{errores.url}</Error>}
                <Campo>
                  <label htmlFor="imagen">Imagen</label>
                  <input
                    type="file"
                    accect="image/*"
                    id="imagen"
                    name="imagen"
                    onChange={(event) => {
                      guardarImagenUpload(event.target.files[0]);
                    }}
                  />
                </Campo>
                {errores.imagen && <Error>{errores.imagen}</Error>}
              </fieldset>

              <fieldset>
                <legend>Sobre tu Producto</legend>

                <Campo>
                  <label htmlFor="descripcion">Descripcion</label>
                  <textarea
                    id="descripcion"
                    name="descripcion"
                    value={descripcion}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Campo>
                {errores.descripcion && <Error>{errores.descripcion}</Error>}
              </fieldset>

              {error && <Error>{error}</Error>}
              <InputSubmitProducto type="submit" value="Crear Producto" />
            </Formulario>
          </div>
        )}
      </Layout>
    </div>
  );
};

export default NuevoProducto;
