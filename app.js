import React from "react";
import ReactDOM from "react-dom/client";

// JSX => (Babel transpiles it to ->) React.createElement => Object => (after being rendered) HTMLElement

// JSX - HTML-Like or XML-Like syntax.

const Title = () => {
    return <h1>Namaste React using JSX 🚀</h1>
}
const HeadingComponent = () => {
    return <div id="container">
        <Title/>
        <h1>Namaste React Functional Component!🚀</h1>
    </div>
    
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);