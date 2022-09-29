import Layout from "../components/Layout/Layout";
import DetallesProducto from "../components/Layout/DetallesProducto";
import useProductos from "../hooks/useProductos/useProductos";

const Populares = () => {
  
  const {productos}= useProductos("votos");

  return (
    <Layout>
      <div className="listado-productos">
        <div className="contenedor">
          {productos.length === 0 ? (
            "No hay productos aún"
          ) : (
            <ul className="bg-white">
              {productos.map((producto) => (
                <DetallesProducto key={producto.id} producto={producto} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Populares;
