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