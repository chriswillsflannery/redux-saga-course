import { call, put, takeEvery } from "redux-saga/effects";
import { TRAFFIC_LIGHT } from "../../constants/actions";
import { sleep } from "../../utils/saga-utils";

export function* fireGoTrafficAction() {
  console.log("go'ing traffic");
  yield put({ type: TRAFFIC_LIGHT.GO });
  yield put({ type: TRAFFIC_LIGHT.SEQUENCE_PAUSED });
}

export function* slowTraffic() {
  yield call(sleep, 3);
  yield call(fireGoTrafficAction);
}

export default function* () {
  yield takeEvery(TRAFFIC_LIGHT.SLOW, slowTraffic);
}
