import styled from "@emotion/styled";

export const Formulario = styled.form`
  max-width: 600px;
  width: 95%;
  margin: 5rem auto 0 auto;
 

  fielset {
    margin: 2rem 0;
    border: 1px solid var(--gris3);
    font-size: 2rem;
    padding: 2rem;
  }
`;

export const Campo = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;

  label {
    flex: 0 0 150px;
    font-size: 1.8rem;
  }

  input, 
  textarea{
    flex: 1;
    padding: 1rem;
    border-radius: .7rem;
  }

  textarea{
    height: 200px
  }
`;

export const InputSubmitFormulario = styled.input`

border: none;
padding: 1.5rem;
text-align: center;
background-color: var(--naranja);
color: #FFFFFF;
font-size: 1.8rem;
text-transform: uppercase;
width: 100%;
font-family. 'PT Sans' , sans-serif;
font-weight: 700;
border-radius: .7rem;

&:hover{
    cursor: pointer;
}

`;

export const InputSubmitProducto = styled.input`

border: none;
padding: 1.5rem;
text-align: center;
background-color: var(--naranja);
color: #FFFFFF;
font-size: 1.8rem;
text-transform: uppercase;
width: 100%;
font-family. 'PT Sans' , sans-serif;
font-weight: 700;
margin:2rem 0;
border-radius: .7rem;

&:hover{
    cursor: pointer;
}

`;

export const TitleFormulario = styled.h1`
  text-align: center;
  margin-top: 5rem;
`;

export const Error = styled.p`

padding. 1rem;
font-family: 'PT Sans' , sans-serif;
font-weight: 700;
font-size : 1rem;
text-align: center;
margin: 1rem 0;
color: red; 

`