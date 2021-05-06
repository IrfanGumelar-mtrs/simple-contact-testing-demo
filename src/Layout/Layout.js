import styled from "styled-components";
import Title from "../components/Title/Title";

const Wrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  width: 600px;
  border: 1px solid black;
  border-radius: 5px;
`;

function Layout({ title, children }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
}

export default Layout;
