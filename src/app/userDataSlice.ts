import { createSlice } from "@reduxjs/toolkit";

export interface UserData {
  myData: Array<object>;
}

const initialState: UserData = {
  myData: [],
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    addUserData: (state, action) => {
      state.myData = action.payload;
    },
  },
});

export const { addUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
