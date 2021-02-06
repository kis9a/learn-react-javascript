import React from "react";
import StateCounter from "../components/hooks/StateCounter";
import {
  EffectCounterClass,
  EffectCounterFunction,
} from "../components/hooks/EffectCounter";
import ContextCounter from "../components/hooks/ContextCounter";
import ReducerCounter from "../components/hooks/ReducerCounter";
import StateForm from "../components/hooks/StateForm";
import EffectForm from "../components/hooks/EffectForm";

function Hooks() {
  return (
    <div className="hooks">
      <div className="p1 mj flex hooks-group">
        <StateCounter />
        <EffectCounterClass />
        <EffectCounterFunction />
        <ContextCounter />
        <ReducerCounter />
        <style>
          {
            "\
        .hooks-group{\
          display: grid;\
          width: 90%;\
          grid-template-columns:  1fr 1fr 1fr;\
          grid-gap: 16px;\
        }\
      "
          }
        </style>
      </div>
      <hr />
      <div className="p1 mj flex hooks-group">
        <StateForm />
        <EffectForm />
        <style>
          {
            "\
        .hooks {\
          width: 90%;\
        };\
        .hooks-group{\
          display: grid;\
          width: 100%;\
          grid-template-columns:  1fr 1fr 1fr;\
          grid-gap: 16px;\
        }\
      "
          }
        </style>
      </div>
    </div>
  );
}

export default Hooks;
