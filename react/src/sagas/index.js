import { all } from "redux-saga/effects";

import stopTrafficSaga, * as stopTrafficActions from "./traffic-light/stop.saga";
import slowTrafficSaga, * as slowTrafficActions from "./traffic-light/slow.saga";
import goTrafficSaga, * as goTrafficActions from "./traffic-light/go.saga";

export const actions = {
  ...stopTrafficActions,
  ...slowTrafficActions,
  ...goTrafficActions,
};

export default function* rootSaga() {
  yield all([
    stopTrafficSaga(),
    slowTrafficSaga(),
    goTrafficSaga(),
  ]);
}
