import { configureStore } from "@reduxjs/toolkit";
import memberManagementReducer from "./reducers/memberManagementReducer";

const store = configureStore({
  reducer: {
    memberManagement: memberManagementReducer,
  },
});

export default store;
