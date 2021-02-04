//useReducerをimport
import React, { useReducer } from "react";

//counterの初期値を0に設定
const initialState = 0;
//reducer関数を作成
//countStateとactionを渡して、新しいcountStateを返すように実装する
const reducerFunc = (countState, action) => {
  //reducer関数にincrement、increment、reset処理を書く
  //どの処理を渡すかはactionを渡すことによって判断する
  switch (action) {
    case "increment":
      return countState + 1;
    case "reset":
      return initialState;
    default:
      return countState;
  }
};
const ReducerCounter = () => {
  //作成したreducerFunc関数とcountStateをuseReducerに渡す
  //useReducerはcountStateとdispatchをペアで返すので、それぞれを分割代入
  const [count, dispatch] = useReducer(reducerFunc, initialState);
  //カウント数とそれぞれのactioを実行する<button/>を設置する
  return (
    <>
      <div className="grid component-state-counter">
        <h3 className="component-name">Reducer Counter</h3>
        <p>{count}</p>
        <button onClick={() => dispatch("increment")}>Button</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </div>
    </>
  );
};

export default ReducerCounter;
