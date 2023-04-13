import React from "react";
import GlobalProvider from "./provider/GlobalProvider";
import Parent from "./components/Parent";

const FunctionalRoot: React.FC = () => {
  return (
    <GlobalProvider>
      <Parent />
    </GlobalProvider>
  );
};

export default FunctionalRoot;
