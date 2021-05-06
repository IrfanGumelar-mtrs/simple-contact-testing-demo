import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CONFIGS from "../configs/configs";
import axios from "axios";

const getAllContactData = createAsyncThunk(
  "getAllContactData",
  async (payload, thunk) => {
    const response = await axios.get(`${CONFIGS.BASE_URL}/contact`);
    return response.data;
  }
);

const createNewContact = createAsyncThunk(
  "createNewContact",
  async (payload, thunk) => {
    const response = await axios.post(`${CONFIGS.BASE_URL}/contact`, payload);
    return response.data;
  }
);

const updateContact = createAsyncThunk(
  "updateContact",
  async (payload, thunk) => {
    const response = await axios.put(
      `${CONFIGS.BASE_URL}/contact/${payload.id}`,
      {
        firstName: payload.firstName,
        lastName: payload.lastName,
        age: payload.age,
        photo: payload.photo,
      }
    );
    return response.data;
  }
);

const deleteContact = createAsyncThunk(
  "deleteContact",
  async (payload, thunk) => {
    // console.log("im triggered");
    // console.log("the id is", payload);
    const response = await axios.delete(
      `${CONFIGS.BASE_URL}/contact/${payload}`
    );

    return response.data;
  }
);

export const contactSlice = createSlice({
  name: "contact",
  initialState: {
    loadingStates: {
      getAllContactDataIsLoading: undefined,
      createNewContactIsLoading: undefined,
      updateContactIsLoading: undefined,
      deleteContactIsLoading: undefined,
    },
    list: [
      {
        name: "Amy Farha",
        avatar_url: "https://i.pravatar.cc/300",
        subtitle: "Vice President",
      },
      {
        name: "Chris Jackson",
        avatar_url: "https://i.pravatar.cc/300",
        subtitle: "Vice Chairman",
      },
    ],
  },
  reducers: {
    updateCreateNewContactLoadingState: (state, action) => {
      state.loadingStates.createNewContactIsLoading = action.payload.status;
    },
    updateContactLoadingState: (state, action) => {
      state.loadingStates.updateContactIsLoading = action.payload.status;
    },
    updateDeleteContactLoadingState: (state, action) => {
      state.loadingStates.deleteContactIsLoading = action.payload.status;
    },
  },
  extraReducers: {
    // get all contact data thunk
    [getAllContactData.fulfilled]: (state, action) => {
      state.list = action.payload.data.reverse();
      state.loadingStates.getAllContactDataIsLoading = "fulfilled";

      return state;
    },
    [getAllContactData.pending]: (state, action) => {
      state.loadingStates.getAllContactDataIsLoading = "pending";
    },
    [getAllContactData.rejected]: (state, action) => {
      state.loadingStates.getAllContactDataIsLoading = "rejected";
    },
    // create new contact thunk
    [createNewContact.fulfilled]: (state, action) => {
      state.loadingStates.createNewContactIsLoading = "fulfilled";
    },
    [createNewContact.pending]: (state, action) => {
      state.loadingStates.createNewContactIsLoading = "pending";
    },
    [createNewContact.rejected]: (state, action) => {
      state.loadingStates.createNewContactIsLoading = "rejected";
    },
    // update contact thunk
    [updateContact.fulfilled]: (state, action) => {
      state.loadingStates.updateContactIsLoading = "fulfilled";
    },
    [updateContact.pending]: (state, action) => {
      state.loadingStates.updateContactIsLoading = "pending";
    },
    [updateContact.rejected]: (state, action) => {
      state.loadingStates.updateContactIsLoading = "rejected";
    },
    // delete contact thunk
    [deleteContact.fulfilled]: (state, action) => {
      state.loadingStates.deleteContactIsLoading = "fulfilled";
    },
    [deleteContact.pending]: (state, action) => {
      state.loadingStates.deleteContactIsLoading = "pending";
    },
    [deleteContact.rejected]: (state, action) => {
      state.loadingStates.deleteContactIsLoading = "rejected";
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateCreateNewContactLoadingState,
  updateContactLoadingState,
  updateDeleteContactLoadingState,
} = contactSlice.actions;

export { getAllContactData, createNewContact, updateContact, deleteContact };

export default contactSlice.reducer;
