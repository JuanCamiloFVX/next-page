import styled from "@emotion/styled";

export const Titulo = styled.a`
  margin: 0;
  font-size: 2rem;
  font-weight: 700;

  :hover {
    cursor: pointer;
  }
`;
export const Img = styled.img`
  width: 300px;
  heigth: 100%;
  border-radius: .7rem;
`;

export const Producto = styled.li`
  padding: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--gris3);
`;

export const DescripcionProducto = styled.div`
  padding: 4rem;
  flex: 0 1 600px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 2rem;
`;

export const TextoDescripcion = styled.p`
  margin: 0;
  font-size: 1.6rem;
  color: #888;
`;

export const Comentarios = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    border: 1px solid var(--gris3);
    padding: 0.3rem 1rem;
    margin-right: 2rem;
  }
  img {
    width: 2rem;
    height: 2rem;
    margin-right: 2rem;
  }
  p {
    font-size: 1.6rem;
    margin-right: 1rem;
    font-weight: 700;
    &:last-of-type {
      margin: 0;
    }
  }
`;

export const Votos = styled.div`
  flex: 0 1 auto;
  text-align: center;
  border: 1px solid var(--gris3);
  padding: 1rem 3rem;
  border-radius: 1rem;

  div {
    font-size: 2rem;
  }
  p {
    margin: 0;
    font-size: 2rem;
    font-weight: 700;
  }
`;
