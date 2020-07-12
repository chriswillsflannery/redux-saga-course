// @ts-nocheck
import { cloneableGenerator } from "@redux-saga/testing-utils";
import { call, put, takeEvery } from "redux-saga/effects";
import { sleep } from "../../utils/saga-utils";

import { TRAFFIC_LIGHT } from "../../constants/actions";
import defaultAction, {
  haltTraffic,
  fireSlowTrafficAction,
} from "./stop.saga";

describe("Stop saga", () => {
  describe("fireSlowTrafficAction", () => {
    const generator = cloneableGenerator(fireSlowTrafficAction)();

    test("creates TRAFFIC_LIGHT.SLOW action", () => {
      expect(generator.next().value).toEqual(put({ type: TRAFFIC_LIGHT.SLOW }));
    });
  });

  describe("haltTraffic", () => {
    const generator = cloneableGenerator(haltTraffic)();

    test('puts action SEQUENCE_INITIATED', () => {
      expect(generator.next().value).toEqual(put({ type: TRAFFIC_LIGHT.SEQUENCE_INITIATED }));
    });

    test("calls sleep util for 4 seconds", () => {
      expect(generator.next().value).toEqual(call(sleep, 4));
    });

    test("calls fireSlowTrafficAction", () => {
      expect(generator.next().value).toEqual(call(fireSlowTrafficAction));
    });
  });

  describe("Default Action", () => {
    const generator = cloneableGenerator(defaultAction)();

    test("listens for every TRAFFIC_LIGHT.STOP action", () => {
      expect(generator.next().value).toEqual(
        takeEvery(TRAFFIC_LIGHT.STOP, haltTraffic),
      );
    });
  });
});
