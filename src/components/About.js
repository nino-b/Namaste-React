import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>About (Class Component)</h1>
                <h2>This is the Namaste React project🚀🚀</h2>
                <UserClass name={"Wendy"} location={"UK"} contact={"+44 0131 *******"}/>
            </div>
        )
    }
}


export default About;