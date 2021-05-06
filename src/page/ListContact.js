import styled from "styled-components";
import Button from "../components/Button/Button";
import Layout from "../Layout/Layout";

const ContactName = styled.div`
  font-size: 1.5rem;
`;

const ContactAge = styled.div`
  font-size: 1.25rem;
  color: gray;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid lightseagreen;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 5px;

  && > * {
    margin-bottom: 0.5rem;
  }
`;

const ListWrapper = styled.div`
  margin: 1rem 0;
  && > * {
    margin-bottom: 1rem;
  }
`;

const ButtonOptions = styled.div`
  display: flex;
  justify-content: flex-end;

  & > * {
    margin: 0 0.5rem;
  }
`;

function ListContact() {
  const item = (
    <ListItem>
      <div>
        <ContactName>Floor jansen</ContactName>
        <ContactAge>110 years old</ContactAge>
      </div>
      <ButtonOptions>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </ButtonOptions>
    </ListItem>
  );

  return (
    <Layout title="Your Contacts">
      <Button>Add new contact</Button>
      <ListWrapper>
        {item}
        {item}
        {item}
      </ListWrapper>
    </Layout>
  );
}

export default ListContact;
