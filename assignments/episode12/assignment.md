### useContext vs Redux.

#### useContext
useContext is a hook provided by React for consuming context to access the data shared through a Context.Provider. It's suitable for passing down data through the component tree without having to pass props manually at every level (prop drilling).

Advantages:
- Simplicity.
- Performance: It does not introduce much overhead and is integrated directly into React.


Limitations:
- Limited Middleware Support.
-  For complex state logic that requires capabilities like time-travel debugging, async logic that interacts with the state, or more controlled state updates, useContext might become cumbersome.

#### Redux
Redux is a state management library designed for managing the application state globally. It provides a single source of truth for the state, accessible by any component in the application, and helps manage state changes in a predictable manner.

Advantages:
- Centralized State Management.
- Middleware and Enhancers.
- Developer Tools.

Limitations:
- Complexity (for small projects or for simple state management needs).
- Verbosity (compared to the ```useContext```).




### Advantage of using Redux Toolkit over Redux.

- Simplifies Store Setup.
- Reduces Boilerplate Code.
- Built-in Thunk Support.
- Better Developer Experience.
- Performance Optimizations.
- Officially Recommended.




### Explain Dispatcher.

In Redux the term refers to the process or method of dispatching actions to the Redux store. Redux uses a single store that holds the complete state tree of your application, and the only way to change the state inside it is to emit an action, an object describing what happened. This is done using the store’s dispatch() function.





### Explain Reducer.

A reducer is a pure function that takes the current state of an application and an action, and returns the new state. 




### Explain slice.

A slice is essentially a piece of the overall Redux state, usually corresponding to a specific feature or domain. It includes everything needed to manage a specific piece of the state, including:
- The initial state of the slice.
- A set of reducers, each defining how different actions affect this part of the state.
- Automatically generated action creators corresponding to each reducer function.




### Explain selector.

It  is a function that derives or computes data from the Redux state. Selectors are used to encapsulate the logic for retrieving a specific piece of state or for performing computations on the state.




### Explain createSlice and the configuration it takes.

```createSlice``` automatically generates action creators and action types based on the reducers you define.

Configuration of ```createSlice```:
When you use createSlice, you provide a configuration object with the following properties:
- name: A string that is used as the prefix for generated action types. This is the only required property.
- initialState: The initial state for the slice's reducer. This can be any value that you want the state to start with.
- reducers: An object where the keys define the action names, and the values are reducer functions corresponding to how the state should be updated when those actions are dispatched. Each reducer function will receive the current state and an action object, and it should return the new state.
- extraReducers (optional): This allows the slice to respond to other action types that may not be part of the slice itself, such as actions defined by other slices or external libraries. You can define these reducers in two forms:
- As an object where keys are action types and values are reducers.
- Using a builder callback that provides methods to add handling for additional actions.