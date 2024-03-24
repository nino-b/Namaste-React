# Can I use both default and named exports on the same element?

If we use separate statements we can use both default and named exports on the same element. And both import versions (named and default) will be valid.
```js
function myFunction() {
    console.log('Hello!');
}

// Named export
export { myFunction };
// Default export
export default { myFunction };
```





# Make Data and UI consistent with each other

React solves problem of making Data and UI consistent with each other. When Data changes, UI gets updated according to it.


## State variable

- Used to store property values that belong to a component.
- When state object changes, component re-renders and displays new state.
- In the Class Components state objects can be initialized in the constructor and modified using <b>setState()</b> method.
- In Functional Components state objects can be created using <b>useState()</b> hook.
- When state variable updates, react re-renders the component.