import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const authLogin = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    if (email === "johnd@gmail.com" && password === "johnd123") {
      const data = {
        user: {
          firstName: "John",
          lastName: "Doe",
          gender: "Male",
          age: "20",
          email: "johnd@gmail.com",
        },
        token: "login"
      }

      setTimeout(() => {
        resolve(data);
      }, 2000);

      setTimeout(() => {
        resolve({isAuthenticated: true});
      }, 2500);

    } else {
      setTimeout(() => {
        reject("Invalid email and password");
      }, 2000);
    }
  });
}

export const userLogin = createAsyncThunk("auth/login", async ({email, password}) => {
  try {
    const response = await authLogin({email, password});

    return response;
    
  } catch (error) {
    throw(error);
  }
});

const initialState = {
  loading: false,
  isAuthenticated: false,
  token: null,
  user: {},
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
      state.user = {};
      state.error = null;
    },
    userAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    profileUpdate: (state, action) => {
      const {text, name} = action.payload;

      state.user[name] = text;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.token = null;
      state.user = {};
      state.error = null;
    })
    .addCase(userLogin.fulfilled, (state, action) => {
      const {token, user} = action.payload;
      
      state.loading = false;
      state.token = token;
      state.user = user;
    })
    .addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
  }
})

export const { userLogout, userAuthenticated, profileUpdate } = authSlice.actions;
export default authSlice.reducer;
