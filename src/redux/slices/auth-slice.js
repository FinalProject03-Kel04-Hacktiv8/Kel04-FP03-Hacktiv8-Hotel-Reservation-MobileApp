import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const authLogin = ({ email, password, user }) => {
  return new Promise((resolve, reject) => {
    if (email === user.email && password === user.password) {

      setTimeout(() => {
        resolve({token: "login"});
      }, 2000);

    } else {
      setTimeout(() => {
        reject("Invalid email and password");
      }, 2000);
    }
  });
}

export const userLogin = createAsyncThunk("auth/login", async ({email, password, user}) => {
  try {
    const response = await authLogin({email, password, user});

    return response;
    
  } catch (error) {
    throw(error);
  }
});

const initialState = {
  loading: false,
  isAuthenticated: false,
  token: null,
  error: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogout: (state) => {
      state.loading = false,
      state.isAuthenticated = false,
      state.token = null;
      state.error = null;
    },
    userAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    // profileUpdate: (state, action) => {
    //   const {text, name} = action.payload;

    //   state.user[name] = text;
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.token = null;
      state.error = null;
    })
    .addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
    })
    .addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
  }
})

export const { userLogout, userAuthenticated } = authSlice.actions;
export default authSlice.reducer;
