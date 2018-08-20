import React, {Component} from 'react'

const Person = () => {
    return <h1> This is a person </h1>
}

class OtherPerson extends Component{
    render(){
        return (
            <div>this is a person again</div>
        );
    }
}

//export default Person;
export default OtherPerson;