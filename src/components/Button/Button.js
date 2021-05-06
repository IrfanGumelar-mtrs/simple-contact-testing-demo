import styled from "styled-components";

const Wrapper = styled.button`
  padding: 0.5rem;
  border: none;
  background-color: deepskyblue;
  color: white;
  cursor: pointer;
  border-radius: 0.3rem;
  font-size: 1rem;
  &&:active {
    background-color: gray;
  }
`;

function Button(props) {
  return <Wrapper {...props} />;
}

export default Button;
