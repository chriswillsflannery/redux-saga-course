import React from "react";
import { connect } from "react-redux";

import "./App.css";
import { bindActionCreators, compose } from "redux";
import { haltTraffic } from "../../reducers/traffic-light/traffic-light.reducer";

const halt = (haltTraffic) => {
  console.log("HALT!");
  haltTraffic();
};

const App = ({
  color,
  display,
  haltTraffic,
}) => {
  return (
    <div className="app">
      <p>current status:</p>
      <p>traffic light color</p>
      <p>traffic light value</p>
      <button
        onClick={() => halt(haltTraffic)}
      >
        halt traffic
      </button>
    </div>
  );
};

export const mapStateToProps = ({ color, display }) => ({ color, display });

export const mapDispatchToProps = (dispatch) => ({
  haltTraffic: bindActionCreators(haltTraffic, dispatch),
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  React.memo(App),
);
