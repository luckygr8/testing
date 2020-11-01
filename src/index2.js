import React from "react";
import ReactDom from "react-dom";

const Hello = () => {
  return <h1>hello</h1>;
};

function Hi() {
  return (
    <div>
      <Hello />
      <p>this is a nice day, perhaps , or not !</p>
    </div>
  );
}

function Some(props) {
  console.log(props.children);
  return (
    <div>
      <h1>{props.one}</h1>
      <p>{props.two}</p>
      {props.children[1]}
    </div>
  );
}

function Some(props) {
  //console.log(props.children);
  let { one, two, children, three } = props;
  console.log(one, two, three, children);
  return (
    <div>
      <h1>{one}</h1>
      <p>{three == null ? "undefined" : three}</p>
    </div>
  );
}

ReactDom.render(
  <Some one="hey" two="there" three="good day">
    <h1>some test1</h1>
    <h1>some test2</h1>
    <h1>some test3</h1>
  </Some>,
  document.querySelector("#root")
);
