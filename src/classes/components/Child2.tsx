import React from "react";
import { GlobalContext, GlobalState } from "../provider/GlobalProvider";

class Child2 extends React.Component {
  static contextType = GlobalContext;

  render() {
    const globalState = this.context as GlobalState;
    return (
      <div>
        ------- 자식(뎁스2)
        <div>
          value1 : {JSON.stringify(globalState.value1)}
          <button onClick={() => globalState.setValue1(!globalState.value1)}>불리안 업데이트</button>
        </div>
      </div>
    );
  }
}
export default Child2;
