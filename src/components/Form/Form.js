import styled from "styled-components";

const Wrapper = styled.form`
  margin: 1rem 0;
  && > * {
    margin-bottom: 1rem;
  }
`;

function Form({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Form;
