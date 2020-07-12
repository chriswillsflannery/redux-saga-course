import { combineReducers } from "redux";

import trafficLight, * as trafficLightActions from "./traffic-light/traffic-light.reducer";

export default combineReducers({
  trafficLight,
});

export const moduleActions = {
  ...trafficLightActions,
};
