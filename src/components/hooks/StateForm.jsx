import React, { useState } from "react";
import useForm from "./UseForm";

const StateForm = () => {
  const [values, handlerChange] = useForm({ email: "", password: "" });
  return (
    <div className="grid component-state-form">
      <h3 className="component-name">State Counter</h3>
      <input
        className="mj"
        name="email"
        placeholder="name"
        value={values.email}
        onChange={handlerChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={values.password}
        onChange={handlerChange}
      />
    </div>
  );
};

export default StateForm;
