import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type StateProp = {
  openMenu: boolean;
  screenSize: number;
  activeModal: string;
  showModal: boolean;
  isNetworkAvailable: boolean;
  isWalletConnected: boolean;
};

const initialAppState: StateProp = {
  openMenu: false,
  screenSize: 0,
  activeModal: "",
  showModal: false,
  isNetworkAvailable: false,
  isWalletConnected: true,
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
    setNetwork: (state, action: PayloadAction<boolean>) => {
      state.isNetworkAvailable = action.payload;
    },
    setWalletConnected: (state, action: PayloadAction<boolean>) => {
      state.isWalletConnected = action.payload;
    },
  },
});

export default appSlice.reducer;
export const {
  setScreenSize,
  setOpenMenu,
  setActiveModal,
  setNetwork,
  setWalletConnected,
} = appSlice.actions;
