import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
// 상동
// jsx 구문이 아닌 react 앨리먼트 생성방식 (순수 자바스크립트 코드 사용)
ReactDOM.render(React.createElement(App), document.getElementById("root"));

// JSX 구문
// - 브라우저에서 실행되는 자바스크립트가 아님
// - 브라우저가 실행할 수 있는 실제 자바스크립트 명령으로 변환 이루어짐
