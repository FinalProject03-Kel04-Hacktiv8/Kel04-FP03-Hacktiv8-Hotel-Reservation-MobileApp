import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// List from API/search/location.js
export const fetchDataLocation = createAsyncThunk(
  "list/getLocation",
  async (location) => {
    try {
      const response = await axios.request(location);
      return response.data;
    } catch (error) {
      console.log("errorFetchingLocationAPI", error);
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    status: "idle",
    loading: false,
    data: [],
    id: "",
    error: null,
  },
  reducers: {
    updateIdSearch: (state, action) => {
      state.id = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataLocation.pending, (state) => {
      state.status = "pending";
      state.loading = true;
    });
    builder.addCase(fetchDataLocation.fulfilled, (state, action) => {
      return {
        ...state,
        status: "success",
        loading: false,
        data: action.payload,
      };
    });
    builder.addCase(fetchDataLocation.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export const { updateIdSearch } = searchSlice.actions;

export default searchSlice.reducer;
