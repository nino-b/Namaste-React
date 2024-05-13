# Redux
<b></b>
<b>Redux Store</b> is a global Object.

- We keep most of the major data in this object.
- <b>Slices inside Redux Store</b>: because Redux Store is a very big object, there are <b>Slices</b> - a small portion of a redux store.
- Slices are useful to keep the data separate.
- We can't directly modify Slices.
- To modify the Slice, an action should be <b>Dispatched</b>. It will call a function (known as <b>Reducer</b>). And that function will modify the Slice, the state.
- Selector is a hook.
- ```useSelector((store) => store.cart.items);``` subscribe to the specific part of the store.

Write data:
```
Action (e.g. btn click) -> Dispatches Action -> Calls the Reducer Function -> Modifies the Slice
```


Read data:
- To read data we use <b>Selector</b>.
- Using <b>Selector</b> is known as <b>Subscribing To The Store</b>.
- When a component is subscribed to the store, it is In Sync with the Store.
```
We use a Selector to Read the data (Subscribe to the Store) -> Selector will Modify the React Component
```


# Redux Toolkit

- Install @reduxjs/toolkit and react-redux (another library)


### dispatch()

When we use ```dispatch()``` method, it will create an object with the property of ```payload``` and it will have as an argument whatever we pass in the ```dispatch()``` function.