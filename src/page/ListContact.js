/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "../components/Button/Button";
import Layout from "../Layout/Layout";
import {
  getAllContactData,
  deleteContact,
  updateDeleteContactLoadingState,
} from "../store/contactSlice";

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

function ContactItem(props) {
  return (
    <ListItem>
      <div>
        <ContactName>
          {props.firstName} {props.lastName}
        </ContactName>
        <ContactAge>{props.age} years old</ContactAge>
      </div>
      <ButtonOptions>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </ButtonOptions>
    </ListItem>
  );
}

function ListContact() {
  const dispatch = useDispatch();

  const contactList = useSelector((state) => state.contact.list);

  const isGetAllContactDataLoading = useSelector(
    (state) => state.contact.loadingStates.getAllContactDataIsLoading
  );
  const isDeleteContactLoading = useSelector(
    (state) => state.contact.loadingStates.deleteContactIsLoading
  );

  useEffect(() => {
    dispatch(getAllContactData());
  }, []);

  useEffect(() => {
    if (isDeleteContactLoading === "rejected") {
      window.alert("Failed to delete contact item", "Something is wrong", [
        { text: "OK" },
      ]);
    }

    if (isDeleteContactLoading === "fulfilled") {
      dispatch(getAllContactData());
    }

    dispatch(updateDeleteContactLoadingState({ status: undefined }));
  }, [isDeleteContactLoading]);

  // prettier-ignore
  const listOfContacts = contactList.map((item, index) => 
    <ContactItem
      key={index}
      id={item.id}
      firstName={item.firstName}
      lastName={item.lastName}
      age={item.age}
    />
  );

  return (
    <Layout title="Your Contacts">
      <Button>Add new contact</Button>
      <ListWrapper>
        {isGetAllContactDataLoading === "pending" ? "Loading..." : null}
        {isGetAllContactDataLoading === "rejected"
          ? "Sorry something is wrong"
          : null}
        {isGetAllContactDataLoading === "fulfilled" ? listOfContacts : null}
      </ListWrapper>
    </Layout>
  );
}

export default ListContact;
