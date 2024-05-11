import UserContext from "../utils/UserContext";
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
                <div>
                    Logged In User:
                    <UserContext.Consumer>
                        { (loggedInUser) => <h1 className="text-bold">{loggedInUser}</h1> }
                    </UserContext.Consumer>
                </div>
                <h2>This is the Namaste React project🚀🚀</h2>
                <UserClass name={"Wendy"} location={"UK"} contact={"+44 0131 *******"}/>
            </div>
        )
    }
}


export default About;