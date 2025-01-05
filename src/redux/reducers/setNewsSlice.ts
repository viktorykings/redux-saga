import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TNews } from "../../types/TNews";

interface NewsState {
  latestNews: TNews[]; // Array of NewsItem objects
  popularNews: TNews[];
}

const initialState: NewsState = {
  latestNews: [],
  popularNews: [],
};

export const setNewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setlatestNews: (state, action: PayloadAction<TNews[]>) => {
      return {
        ...state,
        latestNews: action.payload,
      };
    },
    setPopularNews: (state, action: PayloadAction<TNews[]>) => {
      return {
        ...state,
        popularNews: action.payload,
      };
    },
    getLatestNews: (state) => state,
    getPopularNews: (state) => state,
  },
});

export const { getLatestNews, getPopularNews, setlatestNews, setPopularNews } =
  setNewsSlice.actions;

export default setNewsSlice.reducer;
