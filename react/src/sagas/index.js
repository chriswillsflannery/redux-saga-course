import { all } from "redux-saga/effects";

import stopTrafficSaga, * as stopTrafficActions from "./traffic-light/stop.saga";
import slowTrafficSaga, * as slowTrafficActions from "./traffic-light/slow.saga";

export const actions = {
  ...stopTrafficActions,
  ...slowTrafficActions,
};

export default function* rootSaga() {
  yield all([
    stopTrafficSaga(),
    slowTrafficSaga(),
  ]);
}
