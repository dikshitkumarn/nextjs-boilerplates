import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AUTH_DATA, AUTH_STATE, INITIALIZE_ACTION } from "@/models";

const initialState: AUTH_STATE = {
  isAuthenticated: false,
  isInitialized: false,
  data: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initialize: (
      _state: AUTH_STATE,
      action: PayloadAction<Partial<INITIALIZE_ACTION>>
    ): AUTH_STATE => ({
      ..._state,
      ...action.payload,
      isInitialized: true,
    }),
    login: (
      _state: AUTH_STATE,
      action: PayloadAction<AUTH_DATA>
    ): AUTH_STATE => ({
      ..._state,
      isAuthenticated: true,
      data: action.payload,
    }),
    logout: (_state: AUTH_STATE, aciton: PayloadAction<void>): AUTH_STATE => ({
      ...initialState,
      isAuthenticated: false,
      data: null,
      isInitialized: true,
    }),
  },
});

export const { actions: authActions, reducer: authReducer } = slice;
