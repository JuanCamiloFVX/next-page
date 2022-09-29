import styled from "@emotion/styled";

export const ContenedorProducto = styled.div`
  display: grid;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 2rem;
  }
`;

export const CreadorProducto = styled.p`
  padding: 0.1rem 0.8rem;
  background-color: var(--naranja);
  color: #ffffff;
  font-weight: bold;
  font-size: 1.2rem;
  display: inline-block;
  text-align: center;
  border-radius: 3rem;
  height: 1.8rem;
`;

export const ImgProducto = styled.img`
  max-width: 100%;
  border-radius: .5rem;
`;
export const ContainerComentarios = styled.ul`
  border: 1px solid var(--gris3);
  padding: 2rem;
  border-radius: 1.5rem;
`;
export const Comentario = styled.li`
  border: 1px solid var(--gris3);
  padding: 2rem;
  border-radius: 1rem;
  margin: 1.5rem auto;

  &:last-of-type {
    margin: 0;
  }
  &:first-of-type {
    margin-bottom: 1.5rem;
    margin-top: 0;
  }

  p {
    margin: 1.2rem auto;
  }
`;

export const TituloC = styled.h2`
  margin: 2rem auto;
`;

export const Creador = styled.h2`
  margin: 0rem auto;
  font-size: 1.6rem;
`;

export const TituloP = styled.h1`
  margin: 2rem auto;
  text-align: center;
  font-size: 4rem;
`;
export const VotosP = styled.p`
  margin: 2rem auto;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`;
