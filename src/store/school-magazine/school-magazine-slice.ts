import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SchoolMagazineState {
  activePage: number;
  countPage: number;
  activeMonth: string;
}

const initialState: SchoolMagazineState = {
  activePage: 1,
  countPage: 1,
  activeMonth: "Сентябрь",
};

export const SchoolMagazineSlice = createSlice({
  name: "SchoolMagazineState",
  initialState,
  reducers: {
    changeActivePage: (state, action: PayloadAction<number>) => {
      state.activePage = action.payload;
    },
    changeCountPage: (state, action: PayloadAction<number>) => {
      state.countPage = action.payload;
    },
    changeActiveMonth: (state, action: PayloadAction<string>) => {
      state.activeMonth = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeActivePage, changeCountPage, changeActiveMonth } =
  SchoolMagazineSlice.actions;

export default SchoolMagazineSlice.reducer;
