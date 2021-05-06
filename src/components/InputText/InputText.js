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

function InputText(props) {
  console.log(props);
  return (
    <FieldGroup>
      <label>{props.label}</label>
      <Input {...props} />

      {props.touched && props.errors ? (
        <ErrorMessage>{props.errors}</ErrorMessage>
      ) : null}
    </FieldGroup>
  );
}

export default InputText;
