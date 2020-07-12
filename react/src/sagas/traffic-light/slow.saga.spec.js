// @ts-nocheck
import { cloneableGenerator } from "@redux-saga/testing-utils";
import { call, put, takeEvery } from "redux-saga/effects";
import { sleep } from "../../utils/saga-utils";

import { TRAFFIC_LIGHT } from "../../constants/actions";
import defaultAction, {
  slowTraffic,
  fireGoTrafficAction,
} from "./slow.saga";

describe("Slow saga", () => {
  describe("fireGoTrafficAction", () => {
    const generator = cloneableGenerator(fireGoTrafficAction)();

    test("creates TRAFFIC_LIGHT.GO action", () => {
      expect(generator.next().value).toEqual(put({ type: TRAFFIC_LIGHT.GO }));
    });
  });

  describe("slowTraffic", () => {
    const generator = cloneableGenerator(slowTraffic)();

    test("calls sleep util for 4 seconds", () => {
      expect(generator.next().value).toEqual(call(sleep, 3));
    });

    test("calls fireGoTrafficAction", () => {
      expect(generator.next().value).toEqual(call(fireGoTrafficAction));
    });
  });

  describe("Default Action", () => {
    const generator = cloneableGenerator(defaultAction)();

    test("listens for every TRAFFIC_LIGHT.SLOW action", () => {
      expect(generator.next().value).toEqual(
        takeEvery(TRAFFIC_LIGHT.SLOW, slowTraffic),
      );
    });
  });
});
