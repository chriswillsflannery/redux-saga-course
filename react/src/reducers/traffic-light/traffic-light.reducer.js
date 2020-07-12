import { createAction } from "redux-actions";
import { TRAFFIC_LIGHT } from "../../constants/actions";

export const INITIAL_STATE = {
  color: "🟢",
  display: TRAFFIC_LIGHT.GO,
};

export default function trafficLight(state = INITIAL_STATE, { type }) {
  switch (type) {
    case TRAFFIC_LIGHT.STOP:
      return {
        ...state,
        color: "🔴",
        display: TRAFFIC_LIGHT.STOP,
      };
    case TRAFFIC_LIGHT.SLOW:
      return {
        ...state,
        color: "🟡",
        display: TRAFFIC_LIGHT.SLOW,
      };
    case TRAFFIC_LIGHT.GO:
      return {
        ...state,
        color: "🟢",
        display: TRAFFIC_LIGHT.GO,
      };
    default:
      return state;
  }
}

export const haltTraffic = () => {
  console.log("stopping,,,,,", TRAFFIC_LIGHT.STOP);
  return createAction(TRAFFIC_LIGHT.STOP)();
};
