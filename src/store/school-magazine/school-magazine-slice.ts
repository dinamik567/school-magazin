import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SchoolMagazineStateI {
  activePage: number;
  countPage: number;
  activeMonth: string;
}

const initialState: SchoolMagazineStateI = {
  activePage: 1,
  countPage: 1,
  activeMonth: "Сентябрь",
};

export const SchoolMagazineSlice = createSlice({
  name: "SchoolMagazineState",
  initialState,
  reducers: {
    chanageActivePage: (state, action: PayloadAction<number>) => {
      state.activePage = action.payload;
    },
    chanageCountPage: (state, action: PayloadAction<number>) => {
      state.countPage = action.payload;
    },
    chanageActiveMonth: (state, action: PayloadAction<string>) => {
      state.activeMonth = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { chanageActivePage, chanageCountPage, chanageActiveMonth } =
  SchoolMagazineSlice.actions;

export default SchoolMagazineSlice.reducer;
