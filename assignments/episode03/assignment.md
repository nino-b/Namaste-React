<h1>What is JSX?</h1>

- JSX stands for JavaScript XML (Extensible Markup Language).
- It is a syntax extension for JavaScript.
- JSX syntax resembles HTML syntax (or more likely resembles XML syntax).
- JSX is used in React, to make code more readable and express structure of UI more easily.
- JSX is not required in React. It is just syntactical sugar.

<h2>How JSX Works</h2>

JSX => (Babel converts to) React.createElement() object => (gets rendered)

```jsx
const element = <h1>Hello, world!</h1>;
```
Transpiles to:

```javascript
const element = React.createElement('h1', null, 'Hello, world!');
```

<h2>Why JSX?</h2>

- JSX makes easier to describe UI structure.
- Improves readability and maintainability.



<h1>'Superpowers' of JSX.</h1>

- Declarative Syntax: JSX allows for a declarative syntax that makes it straightforward to describe UIs. It closely resembles HTML, making it easier for developers to visualize the layout of their app while they code.

- JavaScript Expression Integration: JSX supports JavaScript expressions within the markup. You can embed expressions in JSX by wrapping them in curly braces ({}). This means you can integrate dynamic content and logic directly within your UI declarations.

- Component-based Structure: JSX promotes a component-based architecture, where UIs are broken down into reusable pieces called components. This approach makes code more modular, easier to maintain, and promotes reuse.

- Type Safety with TypeScript: When used with TypeScript, JSX provides type safety for your components' props and state, reducing runtime errors and helping with code quality and maintainability.

- Tooling and Autocompletion: Modern IDEs and text editors provide excellent support for JSX, including autocompletion, syntax highlighting, and linting. This support makes it easier to write, understand, and debug your code.

- Optimization and Performance: When JSX code is compiled, it transforms into optimized JavaScript code. React’s diffing algorithm efficiently updates the DOM when the state of objects changes, improving the performance of the application.

- Escaping of Values: JSX automatically escapes values embedded in JSX before rendering them. This behavior is crucial for preventing XSS (Cross-Site Scripting) attacks, making applications more secure by default.

- Spread Attributes: JSX allows for the spreading of attributes using the spread operator ({...}). This feature is useful for passing props to components without having to list them explicitly, making the code cleaner and more readable.

- Fragments: JSX supports fragments, which let you group a list of children without adding extra nodes to the DOM. This is useful for wrapping multiple elements without introducing unnecessary markup.

- Conditional Rendering: JSX syntax works seamlessly with JavaScript's logical operators (&&, ||, ternary operator) to conditionally render components. This feature allows for more dynamic and responsive UIs.





<h1>Role of ```type``` attribute in script tag. What options can we use there?</h1>





<h1>&lbrace;TitleComponent&rbrace; vs &lbrace;&lt;TitleComponent/&gt;&rbrace; vs &lbrace;&lt;TitleComponent&gt;&lt;/TitleComponent&gt;&rbrace; in JSX</h1>
