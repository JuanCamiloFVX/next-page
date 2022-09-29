import React, { useEffect, useState } from "react";

const useValidacion = (initialState, validar, fn) => {
  const [valores, guardarValores] = useState(initialState);
  const [errores, guardarErrores] = useState({});
  const [submitForm, guardarSubmitForm] = useState(false);

  useEffect(() => {
    if (submitForm) {
      const noErrores = Object.keys(errores).length === 0;

      if (noErrores) {
        fn(); // funcion que se ejecuta en el componente
      }
      guardarSubmitForm(false);
    }
  }, [errores]);

  //funcion que se ejecuta mientra el usuario escribe

  const handleChange = (e) => {
    guardarValores({
      ...valores,
      [e.target.name]: e.target.value,
    });
  };

  // funcion que se ejecuta cuando el usuario hace submit

  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidacion = validar(valores);
    guardarErrores(erroresValidacion);
    guardarSubmitForm(true);
  };

  //evento Blur

  const handleBlur = ()=>{
    const erroresValidacion = validar(valores);
    guardarErrores(erroresValidacion);
  }

  return {
    valores,
    errores,
    handleChange,
    handleSubmit,
    handleBlur
  };
};

export default useValidacion;
