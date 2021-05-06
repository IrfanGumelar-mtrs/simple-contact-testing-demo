import styled from "styled-components";

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  && > * {
    margin-bottom: 0.5rem;
  }
`;

const Input = styled.input`
  padding: 0.5rem;
  background-color: lightyellow;
`;

const ErrorMessage = styled.div`
  color: red;
`;

function InputText() {
  return (
    <FieldGroup>
      <label>First Name</label>
      <Input />
      <ErrorMessage>Input Invalid</ErrorMessage>
    </FieldGroup>
  );
}

export default InputText;
