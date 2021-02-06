import React, { useEffect } from "react";
import useForm from "./UseForm";

const EffectForm = () => {
  const [values, handlerChange] = useForm({ email: "", password: "" });

  useEffect(() => {
    console.log("render");
  }, [values.email, values.password]);

  return (
    <div className="grid component-state-form">
      <h3 className="component-name">Effect Form</h3>
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

export default EffectForm;
