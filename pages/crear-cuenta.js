import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout/Layout";
import firebase from "../firebase";
import {
  Formulario,
  Campo,
  InputSubmitFormulario,
  TitleFormulario,
  Error,
} from "../styles/Formularios/Formularios";
import useValidacion from "../hooks/useValidacion/useValidacion";
import validarCrearCuenta from "../Validaciones/validarCrearCuenta";



const INITIAL_STATE = {
  nombre: "",
  email: "",
  password: "",
};

const CrearCuenta = () => {

  const [ error, guardarError ] = useState (false);
  const router = useRouter();
  const { valores, errores, handleChange, handleSubmit, handleBlur } =
    useValidacion(INITIAL_STATE, validarCrearCuenta, crearCuenta);

  const { nombre, email, password } = valores;

  async function crearCuenta() {
   try {
    await firebase.registrar(nombre,email,password);
    router.push('/');
   } catch (error) {
      console.error('Hubo un error al crear el usuario', error.message);
      guardarError(error.message)
   }
  }

  return (
    <div>
      <Layout>
        <div>
          <TitleFormulario>Crear Cuenta</TitleFormulario>
          <Formulario onSubmit={handleSubmit} noValidate>
            <Campo>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                placeholder="Tu Nombre"
                name="nombre"
                value={nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>

            {errores.nombre && <Error>{errores.nombre}</Error>}

            <Campo>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Tu Email"
                name="email"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>
            {errores.email && <Error>{errores.email}</Error>}
            <Campo>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Tu Password"
                name="password"
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>
            {errores.password && <Error>{errores.password}</Error>}
            {error && <Error>{error}</Error>}
            <InputSubmitFormulario type="submit" value="Crear Cuenta" />
          </Formulario>
        </div>
      </Layout>
    </div>
  );
};

export default CrearCuenta;
