import React from "react";
class example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  render() {
    return <div className="">{this.state.date.toLocaleTimeString()}</div>;
  }
}
export default example;
