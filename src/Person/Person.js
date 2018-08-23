import React from "react";

const Person = props => {
  return (
    <div onClick={props.click} >
      <h1>This is {props.name} who is {props.age} years old</h1>
      <p> {props.children} </p>
    </div>
  );
};

/* class OtherPerson extends Component {
  render() {
    return <div>this is a person again</div>;
  }
} */

export default Person;
//export default OtherPerson;
