import styled from "@emotion/styled";

export const HeaderNav = styled.header`
  border-bottom: 2px solid var(--gris3);
  padding: 1rem 0;
`;

export const ContenedorHeader = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;
export const ContenedorEstandar = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.p`
  color: var(--naranja);
  font-size: 4rem;
  line-height: 0;
  font-weight: 700;
  font-family: "Roboto Slab", serif;
  margin-right: 2rem;

  &:hover {
    cursor: pointer;
  }
`;

export const Boton = styled.a`
  display: block;
  font-weight: 700;
  text-decoration: uppercase;
  border: 1px solid #d1d1d1;
  border-radius: 1.5rem;
  padding: 0.8rem 2rem;
  margin: 2rem .5rem;
  text-align: center;
  background-color: ${(props) => (props.bgColor ? "#DA552F" : "white")};
  color: ${(props) => (props.bgColor ? "white" : "#000000")};

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
  }
`;
