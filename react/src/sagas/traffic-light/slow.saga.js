import { takeEvery } from "redux-saga/effects";
import { TRAFFIC_LIGHT } from "../../constants/actions";

function* slowTraffic() {
  console.log("slowing traffic...");
}

export default function* () {
  yield takeEvery(TRAFFIC_LIGHT.SLOW, slowTraffic);
}
