// @ts-nocheck
import React from "react";
import { connect } from "react-redux";

import "./App.css";
import { bindActionCreators, compose } from "redux";
import { haltTraffic } from "../../reducers/traffic-light/traffic-light.reducer";

const App = ({
  color,
  display,
  haltTraffic,
}) => {
  console.log("state", color, display);
  return (
    <div className="app">
      <p>current status:</p>
      <p>traffic light color: {color}</p>
      <p>traffic light display: {display}</p>
      <button
        onClick={haltTraffic}
      >
        halt traffic
      </button>
    </div>
  );
};

export const mapStateToProps = ({ trafficLight: { color, display } }) => ({
  color,
  display,
});

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    haltTraffic,
  }, dispatch);

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  React.memo(App),
);
