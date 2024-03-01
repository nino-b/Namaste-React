import React from "react";
import ReactDOM from "react-dom/client";

// JSX => (Babel transpiles it to ->) React.createElement => Object => (after being rendered) HTMLElement

// JSX - HTML-Like or XML-Like syntax.

const Title = () => (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX 🚀
        </h1>
)

const HeadingComponent = () => (
    <div id="container">
        <Title/>
        <h1 className="heading" >Namaste React Functional Component!🚀🚀</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>)