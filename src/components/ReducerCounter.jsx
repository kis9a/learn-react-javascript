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
    case "decrement":
      return countState - 1;
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
      <div className="m1 component-state-counter">
        <h2 className="mk component-name">Reducer Counter</h2>
        <p className="p1">{count} times clicked</p>
        <button onClick={() => dispatch("increment")}>+1</button>
        <button onClick={() => dispatch("decrement")}>-1</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </div>
    </>
  );
};

export default ReducerCounter;
