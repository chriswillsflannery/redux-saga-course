import { call, put, takeEvery } from "redux-saga/effects";
import { TRAFFIC_LIGHT } from "../../constants/actions";
import { sleep } from "../../utils/saga-utils";

export function* fireSlowTrafficAction() {
  console.log("slowing traffic");
  yield put({ type: TRAFFIC_LIGHT.SLOW });
}

export function* haltTraffic() {
  yield put({ type: TRAFFIC_LIGHT.SEQUENCE_INITIATED });
  yield call(sleep, 4);
  yield call(fireSlowTrafficAction);
}

export default function* () {
  yield takeEvery(TRAFFIC_LIGHT.STOP, haltTraffic);
}
