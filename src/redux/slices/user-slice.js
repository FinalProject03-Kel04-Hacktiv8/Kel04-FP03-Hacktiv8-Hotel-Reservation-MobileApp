import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "John",
  lastName: "Doe",
  imgUrl: "https://yt3.googleusercontent.com/eLCADxKBRj3JGsifnxitZwfsbeV3DDlS3r8SzN5QPT2juw0fTV34T09vIZWfEF3D4JmV2z6hZA=s900-c-k-c0x00ffffff-no-rj",
  gender: "Male",
  phone: "+6281234567891",
  email: "johnd@gmail.com",
  password: "johnd123"
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    profileUpdate: (state, action) => {
      const {text, name} = action.payload;

      state[name] = text;
    }
  },
});

export const { profileUpdate } = userSlice.actions;
export default userSlice.reducer;
