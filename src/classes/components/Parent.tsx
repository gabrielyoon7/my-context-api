import React from "react";
import Child1 from "./Child1";

class Parent extends React.Component {
  render() {
    return (
      <>
        부모(뎁스0)
        <Child1 />
        <Child1 />
      </>
    );
  }
}
export default Parent;
