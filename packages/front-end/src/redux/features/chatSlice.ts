import { ChatBotState } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ChatBotState = {
  chatbotId: "",
  chatLog: [],
};

const chatbotSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChatLog: (state, { payload }) => {
      state.chatLog = payload;
    },
  },
});

export default chatbotSlice.reducer;
export const { setChatLog } = chatbotSlice.actions;
