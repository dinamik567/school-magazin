import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { schoolClasses } from "../../../mock";
import { SchoolClassModel } from "../../core/magazine/models";

export interface SchoolMagazineState {
  activeMonth: string;
  schoolClasses: SchoolClassModel;
  activeYear: number;
}

const initialState: SchoolMagazineState = {
  activeMonth: "Сентябрь",
  activeYear: new Date().getFullYear(),
  schoolClasses: new SchoolClassModel(schoolClasses[0]),
};

export const SchoolMagazineSlice = createSlice({
  name: "SchoolMagazineState",
  initialState,
  reducers: {
    changeActiveMonth: (state, action: PayloadAction<string>) => {
      state.activeMonth = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeActiveMonth } = SchoolMagazineSlice.actions;

export default SchoolMagazineSlice.reducer;
