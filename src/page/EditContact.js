import Button from "../components/Button/Button";
import Layout from "../Layout/Layout";
import InputText from "../components/InputText/InputText";
import Form from "../components/Form/Form";

function EditContact() {
  return (
    <Layout title="Edit Contact">
      <Form>
        <InputText />
        <InputText />
        <InputText />

        <Button>Submit</Button>
      </Form>
    </Layout>
  );
}

export default EditContact;
