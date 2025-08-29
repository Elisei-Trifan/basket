import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginResult } from "../../api";
import { AuthApi } from "../../api";

interface AuthState {
  user: LoginResult | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
