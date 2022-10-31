import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchmail } from "./mailAPI";

const initialState = {
  value: 0,
  sendMessageIsOpen: false,
};

export const incrementAsync = createAsyncThunk(
  "mail/fetchmail",
  async (amount) => {
    const response = await fetchmail(amount);

    return response.data;
  }
);

export const mailSlice = createSlice({
  name: "mail",
  initialState,

  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      });
  },
});

export const { openSendMessage, closeSendMessage } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;



export default mailSlice.reducer;
