import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const registerAPI = createAsyncThunk("/auth/register", async (data) => {
  try {
    const response = await axios.post("http://localhost:3000/auth/register", {
      data,
    });
  } catch (error) {
    console.log(error);
  }
});
const initialState = { data: [], loading: "idle" };

const registerSlice = createSlice({
  name: "registerUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerAPI.pending, (state, action) => {
      state.loading("Loading...");
    });
    builder.addCase(registerAPI.rejected, (state, action) => {
      state.loading("Failed!");
    });
    builder.addCase(registerAPI.fulfilled, (state, action) => {
      state.loading("succeded");
      state.data.push(action.payload);
    });
  },
});

// dispatch(registerAPI());

export default registerSlice.reducer;
