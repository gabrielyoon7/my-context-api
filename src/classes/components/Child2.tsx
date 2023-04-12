import React from "react";
import { GlobalContext, GlobalState } from "../provider/GlobalProvider";

class Child2 extends React.Component {
  static contextType = GlobalContext;

  render() {
    const globalState = this.context as GlobalState;
    return (
      <div>
        ------- 자식(뎁스2) {globalState.value2}
      </div>
    );
  }
}
export default Child2;
