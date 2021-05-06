/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../components/Button/Button";
import Layout from "../Layout/Layout";
import InputText from "../components/InputText/InputText";
import Form from "../components/Form/Form";
import {
  createNewContact,
  updateCreateNewContactLoadingState,
} from "../store/contactSlice";
import { useSelector, useDispatch } from "react-redux";

const CreateContactSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[a-zA-Z0-9]*$/, "Only alphanumeric character allowed")
    .required("Required"),
  lastName: Yup.string()
    .matches(/^[a-zA-Z0-9]*$/, "Only alphanumeric character allowed")
    .required("Required"),
  age: Yup.number()
    .max(100, "Max age is 100")
    .positive("Invalid age")
    .required("Required"),
});

function CreateContact() {
  const dispatch = useDispatch();
  const history = useHistory();

  const isLoading = useSelector(
    (state) => state.contact.loadingStates.createNewContactIsLoading
  );

  useEffect(() => {
    if (isLoading === "fulfilled") {
      dispatch(updateCreateNewContactLoadingState({ status: undefined }));
      history.push("/");
    }
  }, [isLoading]);

  return (
    <Layout title="Create Contacts">
      <Formik
        initialValues={{ firstName: "", lastName: "", age: "" }}
        validationSchema={CreateContactSchema}
        onSubmit={(values) => {
          console.log("im clicked");
          console.log(values);
          dispatch(createNewContact(values));
        }}
      >
        {(formik) => (
          <Form>
            <InputText
              label="First Name"
              id="firstName"
              type="text"
              {...formik.getFieldProps("firstName")}
              errors={formik.errors.firstName}
              touched={formik.touched.firstName}
            />

            <InputText
              label="Last Name"
              id="lastName"
              type="text"
              {...formik.getFieldProps("lastName")}
              errors={formik.errors.lastName}
              touched={formik.touched.lastName}
            />

            <InputText
              label="Age"
              id="age"
              type="number"
              {...formik.getFieldProps("age")}
              errors={formik.errors.age}
              touched={formik.touched.age}
            />

            <Button
              type="submit"
              isValidating={formik.isValidating}
              isSubmitting={formik.isSubmitting}
              onClick={formik.handleSubmit}
              title="Add contact"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
}

export default CreateContact;
