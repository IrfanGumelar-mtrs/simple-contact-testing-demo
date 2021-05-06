import styled from "styled-components";

const Wrapper = styled.h1`
  font-size: 2rem;
  text-align: center;
`;

function Title({ children }) {
  return <Wrapper>{children} </Wrapper>;
}

export default Title;
