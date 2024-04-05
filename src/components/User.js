import { useState } from "react";

function User({name}) {
    const [count] = useState(0);
    const [anotherCount] = useState(2);
    return (
        <div className="user-card">
            <h2>Count = {count}</h2>
            <h2>anotherCount = {anotherCount}</h2>
            <h2>Name: {name}</h2>
            <h2>Location: Tbilisi</h2>
            <h2>Contact:</h2>
        </div>
    )
}
export default User;