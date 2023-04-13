import React from "react";
import Child1 from "./Child1";

const Parent: React.FC = () => {
  return (
    <>
      부모(뎁스0)
      <Child1 />
      <Child1 />
    </>
  );
};

export default Parent;
