import React from "react";
import GlobalProvider from "./provider/GlobalProvider";
import Parent from "./components/Parent";

class ClassesRoot extends React.Component {
  render() {
    return (
      <GlobalProvider>
        <h2>Classes Context API</h2>
        <Parent />
      </GlobalProvider>
    );
  }
}
export default ClassesRoot;
