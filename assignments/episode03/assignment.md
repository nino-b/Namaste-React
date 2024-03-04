<h1>What is JSX?</h1>

- JSX stands for JavaScript XML (Extensible Markup Language).
- It is a syntax extension for JavaScript.
- JSX syntax resembles HTML syntax (or more likely resembles XML syntax).
- JSX is used in React, to make code more readable and express structure of UI more easily (JSX is not required in React. It is just syntactical sugar.).
- JSX improves code readability and maintainability.

<h2>How JSX Works</h2>

JSX => (Babel transpiles it to ->) React.createElement => Object => (after being rendered) HTMLElement

```jsx
const element = <h1>Hello, world!</h1>;
```
Transpiles to:

```javascript
const element = React.createElement('h1', null, 'Hello, world!');
```






<h1>'Superpowers' of JSX.</h1>

- Declarative Syntax: HTML-like syntax makes intuitive and straightforward to describe UI structure.
- Nested Elements: We can nest elements and create complex UI structures.
- Passing Props to Components: Props can be passed like HTML attributes, and that enables customization.
- Conditionals and Loops: We can use conditionals and loops, so create dynamic content.
- Custom Components: We can create custom React components.
- Fragments: Supports fragments. We can attach children to fragment and fragment to DOM. So instead of multiple DOM changes, we make only one.
- Supports JavaScript Expressions: We can embed JavaScript expressions within curly braces ({}). Thus we can embed dynamic content in JSX.
- Escaping Cross-Site-Scripting (XSS): React converts embedded expressions into plain strings, so it treats user input as plain text and    escapes malicious data.





<h1>Role of ```type``` attribute in script tag. What options can we use there?</h1>

Indicates browser what type of script is being used:
- text/javascript: The default type. Explicitly setting is often unnecessary unless you need to ensure compatibility with older browsers. Scripts with this type are treated as JavaScript.
- module: Used for JavaScript modules. Scripts are treated as ECMAScript modules. Among other features, modules support import and export syntax to include or provide functionalities from/to other modules.

Less commonly used:
- text/plain: Scripts are treated as data blocks rather than executable scripts. This can be useful for embedding non-executable code within HTML for demonstration purposes or when the code should be ignored by the browser.
- application/javascript and application/ecmascript: These types are technically correct per MIME type standards and should be treated as JavaScript by browsers. 





<h1>&lbrace;TitleComponent()&rbrace; vs &lt;TitleComponent/&gt;; vs &lt;TitleComponent&gt;&lt;/TitleComponent&gt; in JSX</h1>

- <b>&lbrace;TitleComponent()&rbrace;</b> - Manually invoking function component (not usually done).
- <b>&lt;TitleComponent/&gt;</b> - Using Self-Closing-Tag (commonly used). Used to render a component that doesn't contain children.
- <b>&lt;TitleComponent&gt;&lt;/TitleComponent&gt;</b> - Used to render a component that contains children.