 import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface AuthState {
  isSubmited: boolean;
}

const initialState: AuthState = {
  isSubmited: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userSubmit: (state) => {
      state.isSubmited = true;
    },
  },
});

export const authStatus = (state: RootState) => state.auth;

export const { userSubmit } = authSlice.actions;
export default authSlice.reducer;
