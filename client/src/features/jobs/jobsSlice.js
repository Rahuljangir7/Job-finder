import { createSlice } from "@reduxjs/toolkit";

const jobsSlice = createSlice({
  name: "jobs",
  initialState: [],
  reducers: {
    jobGet(state, action) {
      state;
    },
    jobView(state, action) {
      state;
    },
  },
});

export const { jobGet, jobView } = jobsSlice.actions;
export default jobsSlice.reducer;
