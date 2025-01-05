import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ErrState {
  latestNewsError: string;
  popularNewsError: string;
}

const initialState: ErrState = {
  latestNewsError: "",
  popularNewsError: "",
};

export const errorSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    setlatestNewsError: (state, action: PayloadAction<string>) => {
      return { ...state, latestNewsError: action.payload };
    },
    setPopularNewsError: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        popularNewsError: action.payload,
      };
    },
  },
});

export const { setlatestNewsError, setPopularNewsError } = errorSlice.actions;

export default errorSlice.reducer;
