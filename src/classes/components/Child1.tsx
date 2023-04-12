import React from "react";
import Child2 from "./Child2";

class Child1 extends React.Component {
  render() {
    return (
      <div>
        -- 자식(뎁스1)
        <Child2 />
        <Child2 />
      </div>
    );
  }
}
export default Child1;
