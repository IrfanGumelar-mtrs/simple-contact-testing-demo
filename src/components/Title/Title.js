import styled from "styled-components";

const Wrapper = styled.h1`
  font-size: 2rem;
  text-align: center;
`;

function Title({ children }) {
  return <Wrapper data-testid="title">{children}</Wrapper>;
}

export default Title;
