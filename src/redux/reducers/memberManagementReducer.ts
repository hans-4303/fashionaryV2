import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  testValue: 0
}

const memberManagementSlice = createSlice({
  name: "memberManagement",
  initialState,
  reducers: {
    increase(state, action) {
      state.testValue = state.testValue + 1;
    },
    decrease(state, action) {
      state.testValue = state.testValue - 1;
    }
  }
})

export const memberManagementActions = memberManagementSlice.actions;
export default memberManagementSlice.reducer;