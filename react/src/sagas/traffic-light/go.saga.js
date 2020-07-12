import { takeEvery } from "redux-saga/effects";
import { TRAFFIC_LIGHT } from "../../constants/actions";

function* goTraffic() {
  console.log("go!");
}

export default function* () {
  yield takeEvery(TRAFFIC_LIGHT.GO, goTraffic);
}
