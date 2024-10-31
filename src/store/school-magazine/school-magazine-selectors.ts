import { RootState } from "../store";

export const selectActivePage = (state: RootState) =>
  state.shoolMagazineState.activePage;
export const selectCountPage = (state: RootState) =>
  state.shoolMagazineState.countPage;
