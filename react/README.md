### components/StateCounter

```
再レンダリング後も React はその変数の現在の state の値をそのまま持っており 、最新の state の値を関数に渡します。現在の state の値を更新したい場合は、setState を呼びます。
```

### components/EffectButtonClass or EffectButtonFunction

```
useEffect とは
useEffect を使うと、useEffect に渡された関数はレンダーの結果が画面に反映された後に動作します。
つまり useEffect とは、「関数の実行タイミングを React のレンダリング後まで遅らせる hook」になります。

副作用の処理（DOM の書き換え、変数代入、API 通信など）を関数コンポーネントで扱えます。
クラスコンポーネントでのライフサイクルメソッドに当たります。

componentDidMount
componentDidUpdate
componentWillUnmount

```

### components/useContextButton

````
https://ja.reactjs.org/docs/context.html

コンテクストは各階層で手動でプロパティを下に渡すことなく、コンポーネントツリー内でデータを渡す方法を提供します。

型的な React アプリケーションでは、データは props を通してトップダウン（親から子）で渡されますが、
アプリケーション内の多くのコンポーネントから必要とされる特定のタイプのプロパティ（例： ロケール設定、UI テーマ）にとっては面倒です。コンテクストはツリーの各階層で明示的にプロパティ
```
````

### components/useReducerCounter

```
useState と useReducer の比較
useState useReducer
扱える state の type 数値、文字列、論理値 オブジェクト、配列
関連する state の取り扱い ☓ 複数を同時に取り扱うことが出来る
ローカル or グローバル ローカル グローバル useContext()と一緒に取り扱う

useReducer とは
状態管理のためのフックで、useState と似たような機能。useState は useReducer に内部実装されています。

(state, action) => newState という型の reducer を受け取り、現在の state と dispatch 関数の両方を返します。

reducer は state を更新するための関数で、dispatch は、reducer を実行するための呼び出し関数です。 （変数を宣言するときに、state の更新方法をあらかじめ設定しておくことが出来る。）
dispatch(action)で実行
action は何をするのかを示すオブジェクト　
{type: increment, payload: 0}のように、type プロパティ（action の識別子）と値のプロパティで構成されている。
Redux で実現していた state 管理が、useContext & useReducer で実現できるようになり、Redux が不要になってきました。
```
