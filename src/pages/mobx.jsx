import React from "react";
import { Provider } from "mobx-react";
import TodoStore from "../store/mobx";
import Mbox from "../components/mbox/Mbox";

const MboxP = () => {
  return (
    <Provider TodoStore={TodoStore}>
      <Mbox />
    </Provider>
  );
};

export default MboxP;
