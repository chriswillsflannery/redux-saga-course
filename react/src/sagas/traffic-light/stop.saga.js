import { put, takeEvery } from "redux-saga/effects";
import { TRAFFIC_LIGHT } from "../../constants/actions";

// function* haltTraffic() {
//   console.log("halting traffic...");
//   setTimeout(() => {
//     function* gen() {
//       yield put({ type: TRAFFIC_LIGHT.SLOW });
//     }
//     gen();
//   }, 3000);
// }

function stopp() {
  console.log("stop");
}

export default function* () {
  yield takeEvery(TRAFFIC_LIGHT.STOP, stopp);
}
