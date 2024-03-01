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





<h1>Role of ```type``` attribute in script tag. What options can we use there?</h1>





<h1>&lbrace;TitleComponent&rbrace; vs &lbrace;&lt;TitleComponent/&gt;&rbrace; vs &lbrace;&lt;TitleComponent&gt;&lt;/TitleComponent&gt;&rbrace; in JSX</h1>
