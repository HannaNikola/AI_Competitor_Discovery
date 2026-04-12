import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ResultState {
  analysis: any | null;
  competitors: any | null;
  insight: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: ResultState = {
  analysis: null,
  competitors: null,
  insight: null,
  loading: false,
  error: null,
};

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    setResult: (
      state,
      action: PayloadAction<{
        analysis: any;
        competitors: any;
        insight: any;
      }>,
    ) => {
      state.analysis = action.payload.analysis;
      state.competitors = action.payload.competitors;
      state.insight = action.payload.insight;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearResult: (state) => {
      state.analysis = null;
      state.competitors = null;
      state.insight = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { setResult, clearResult, setError, setLoading } = resultSlice.actions;
export default resultSlice.reducer;


