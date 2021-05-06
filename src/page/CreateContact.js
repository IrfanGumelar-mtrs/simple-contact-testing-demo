import Button from "../components/Button/Button";
import Layout from "../Layout/Layout";
import InputText from "../components/InputText/InputText";
import Form from "../components/Form/Form";

function CreateContact() {
  return (
    <Layout title="Create Contacts">
      <Form>
        <InputText />
        <InputText />
        <InputText />

        <Button>Submit</Button>
      </Form>
    </Layout>
  );
}

export default CreateContact;
