import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "../features/jobs/jobsSlice";
import registerReducer from "../features/auth/registerSlice";

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    registers: registerReducer,
  },
});

export default store;
