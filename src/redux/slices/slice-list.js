import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// List from API/properties/list.js
export const fetchDataList = createAsyncThunk("list/getList", async (List) => {
  try {
    const response = await axios.request(List);
    return response.data;
  } catch (error) {
    console.log("errorFetchingAPI", error);
  }
});

const listSlice = createSlice({
  name: "list",
  initialState: {
    status: "idle",
    loading: false,
    data: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataList.pending, (state) => {
      state.status = "pending";
      state.loading = true;
    });
    builder.addCase(fetchDataList.fulfilled, (state, action) => {
      return {
        ...state,
        status: "success",
        loading: false,
        data: action.payload,
      };
    });
    builder.addCase(fetchDataList.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export default listSlice.reducer;
