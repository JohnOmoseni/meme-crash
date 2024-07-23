import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type StateProp = {
  openMenu: boolean;
  screenSize: number;
  activeModal: string;
  showModal: boolean;
};

const initialAppState: StateProp = {
  openMenu: false,
  screenSize: 0,
  activeModal: "",
  showModal: false,
};

const appSlice = createSlice({
  name: "app",
  initialState: initialAppState,
  reducers: {
    setOpenMenu: (state, action: PayloadAction<boolean>) => {
      state.openMenu = action.payload;
    },
    setScreenSize: (state, action: PayloadAction<number>) => {
      state.screenSize = action.payload;
    },
    setActiveModal: (state, { payload }) => {
      const { activeModal, showModal } = payload;
      state.activeModal = activeModal;
      state.showModal = showModal;
    },
  },
});

export default appSlice.reducer;
export const { setScreenSize, setOpenMenu, setActiveModal } = appSlice.actions;
