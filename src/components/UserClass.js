import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: 'Jane Doe',
                location: 'Default',
                avatar_url: 'https://dummy-photo.com'
            }
        }
    }
    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/nino-b');
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
    }
    render() {
        const { name, location, avatar_url } = this.state.userInfo;

        return (
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>Name: {name} (Class)</h2>
                <h2>Location: {location} (Class)</h2>
                <h2>Contact: {} (Class)</h2>
        </div>
        );
    }
}
export default UserClass;