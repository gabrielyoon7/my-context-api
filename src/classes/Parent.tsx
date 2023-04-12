import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

class Parent extends React.Component {
  render() {
    return (
      <>
        <Child1 />
        <Child2 />
      </>
    );
  }
}
export default Parent;
