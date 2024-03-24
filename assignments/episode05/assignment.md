<h1>What is the difference between Named Export, Default export and '* as' export?</h1>

### Named export

- Allows to export multiple values from a module.
- When importing we need to use the same name that is in the curly braces {}.
```js
// Exporting
export const myFunction = () => {...};
export const myVariable = 123;

// Importing
import { myFunction, myVariable } from './myModule.js';
```


### Default export

- Each module can have only one default export, which is considered as main thing exported from the page.
- When importing, we can use any name to refer to it.
- Curly braces are not necessary.
```js
// Export
const myFunction = () => {...};
export default myFunction;

// Import
import anyNameWeWant from './myModule.js';
```


### '* as' import

- To import all named exports from a module as properties of a single object.
```js
// Export
export const myFunction = () => {...};
export const myVariable = 123;

// Import
import * as myModule from './myModule.js';
```





<h1>What is the importance of config.js file</h1>

- Configuration settings centralization: it makes easier to find and manage config settings, instead of looking for them through whole application.
- Consistency across the application: we ensure that the same configuration settings apply to different parts of application.
- Ease of modification and scalability: centralized settings are easier to modify.
- Security: to keep API keys, database passwords and other sensitive information out of source code.





<h1>What are React Hooks?</h1>

Hooks allow to use state and other React features without writing a class.

- React Hooks are normal JS utility functions.
- They enable functional components utilize state, perform side effects, access context...
- Hooks provide a more direct API to the React concepts: props, state, context, refs, and lifecycle. 
- React Hook examples useState() and useEffect().
- useState() generates react state.
- We need to import each Hook from react folder as named import: ```import { useState } from "react";```
#### useState() example
- useState() maintains component state.
- When we call useState() it gives us a state variable.
- We recieve that state variable inside an array: ```const [state] = useState()```.
- We can pass values inside useState(): ```useState([])```.
- We can modify state variables with functions that we pass during variable creation. Convension is that we name that function the same name as variable and add 'set' in front of it: ```const [state, setState] = useState()```.





<h1>Why do we need a useState Hook?</h1>

- Enables functional components to manage state.
- Encourage writing smaller and reusable stateful logic.
- Improves readability. They allow more declarative and liner organization of component logic.





# How does React make our program fast?

It optimizes DOM operations.

- Creates Virtual DOM: lightweight copy of DOM.
- Reconciliation Algorithm: 
    - Compares current state of Virtual DOM to the previous state and updates only differences. 
    - Updates are batched - there is only one page repaint cycle.
    - Uses keys to identify elements in a list and this way it tracks elements that have been changed.
- Lazy loading: elements are loaded when they are needed.