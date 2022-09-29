import { useEffect, useState, useContext } from "react";
import FirebaseContext from "../../firebase/context/context";

const useProductos = (orden) => {

  const [productos, guardarProductos] = useState([]);
  const [consultarDB, guardarConsultarDB] = useState(true);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    if (consultarDB) {
      const obtenerProducto = async () => {
        const response = await firebase.traerProductos(orden);
        console.log(response);
        guardarProductos(response);
        guardarConsultarDB(false);
      };
      obtenerProducto();
    }
  }, [productos]);

  return {
    productos
  }
};

export default useProductos;
