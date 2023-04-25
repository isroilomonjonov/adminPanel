import { configureStore, createSlice } from "@reduxjs/toolkit";
import { mapLocations } from "../constants/MOCK_DATA_MAP";
import { mainPageData } from "../constants";
import {
  barChartData,
  pieChartData,
  ariaChart,
} from "../constants/MOCK_DATA_CHART";
const adminPaelInitialState = {
  map: mapLocations,
  chart: { barChartData, pieChartData, ariaChart },
  mainData: [...mainPageData],
};
const adminPanelSlice = createSlice({
  name: "admin",
  initialState: adminPaelInitialState,
  reducers: {
    add(state, action) {
      const str = (Math.random() + 1).toString(36).substring(7);
      const nameStr = str.charAt(0).toUpperCase() + str.slice(1);
      const date = new Date();
      console.log(date.getMonth());

      state.mainData.push({
        id: Date.now().toString(),
        name: nameStr,
        amount: +action.payload.amount,
        causes: action.payload.couses,
        date: `${
          `${date.getDate()}`.length === 1
            ? `0${date.getDate()}`
            : `${date.getDate()}`
        }-${
          `${date.getMonth() + 1}`.length === 1
            ? `0${date.getMonth() + 1}`
            : `${date.getMonth() + 1}`
        }-${date.getFullYear()}`,
        paymentType: action.payload.paymentType,
        type: action.payload.type,
      });
    },
  },
});
export const adminPanelAction = adminPanelSlice.actions;
const store = configureStore({
  reducer: {
    data: adminPanelSlice.reducer,
  },
});
export default store;
