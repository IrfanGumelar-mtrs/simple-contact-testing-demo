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
    background-color: blue;
  }

  &:disabled {
    background-color: gray;
  }
`;

function Button(props) {
  const { isValidating, isSubmitting } = props;

  // prettier-ignore
  const isDisabled = isValidating === false && isSubmitting === true ? true : false;

  return <Wrapper disabled={isDisabled} {...props} />;
}

export default Button;
