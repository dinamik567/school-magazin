import { RootState } from "../store";

export const selectMagazinePage = (state: RootState) =>
  state.schoolMagazineState;
export const selectActiveMonth = (state: RootState) =>
  state.schoolMagazineState.activeMonth;
