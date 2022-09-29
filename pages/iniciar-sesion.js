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
import validarIniciarSesion from "../Validaciones/validarIniciarSesion";



const INITIAL_STATE = {
  email: "",
  password: "",
};

const IniciarSesion = () => {

  const [ error, guardarError ] = useState (false);
  const router = useRouter();
  const { valores, errores, handleChange, handleSubmit, handleBlur } =
    useValidacion(INITIAL_STATE, validarIniciarSesion, iniciarSesion);

  const {email, password } = valores;

  async function iniciarSesion() {
   try {
    const usuario = await firebase.iniciar(email, password)
    console.log(usuario);
    router.push('/');
   } catch (error) {
    console.error('Hubo un error al autenticar sesion', error.message);
    guardarError(error.message);
   } 
  }

  return (
    <div>
      <Layout>
        <div>
          <TitleFormulario>IniciarSesion</TitleFormulario>
          <Formulario onSubmit={handleSubmit} noValidate>          
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
            <InputSubmitFormulario type="submit" value="Iniciar Sesion" />
          </Formulario>
        </div>
      </Layout>
    </div>
  );
};

export default IniciarSesion;
