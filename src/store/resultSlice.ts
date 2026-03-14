import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ResultState {
  text: string;
}

const initialState: ResultState = {
  text: "",
};

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    setResult: (state, action: PayloadAction<string>) => {
      state.text = "";
    },
    clearResult: (state) => {
      state.text = "";
    },
  },
});

export const { setResult, clearResult } = resultSlice.actions;
export default resultSlice.reducer;
