import React from "react";
import ReactDOM from "react-dom/client";
const a_tag = React.createElement(
  "h1",
  {
    key: "title3",
    className: "hello",
  },
  "hello thud is hh hhn form the root"
);
const b_tag = React.createElement(
  "h2",
  {
    key: "title2",

    className: "world",
  },
  "same world"
);
const divtag = React.createElement(
  "div",
  {
    key: "title1",
    className: "DIVTAG",
  },
  [a_tag, b_tag]
);
console.log(divtag);
const title = () => <h1>hello</h1>
function hello(props) {
    return <div>hello {props}</div>
}
const Heading = () => (
    <div>
     {< somecomponent.photo />}
      <h1>hellow heding component</h1>
    </div>
  );


function photostory(){
  return <h1>photostory teller</h1>
}  
function videostory(){
    return <h1>videostory teller</h1>
}
const somecomponent = {
    photo : photostory,
    video : videostory
}
console.log(somecomponent.photo())
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
