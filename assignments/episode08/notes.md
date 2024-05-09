### Methods

- this.state = {}  -- create state in class based components.
  - e.g. this.state = {count: 1}
- this.setState = {} -- update state in class based components.
  - e.g. this.setState = {count: this.state.count + 1}
- componentDidMount() -- the class component loads -> constructor is called -> render() is called -> componentDidMount() is called.
- ```componentDidMount``` is used to make API calls in class based components.
- ```useEffect``` one of the uses is to make API calls in functional components. We pass an empty dependency array as an argument, which means that API call will be done only once. ```useEffect(() => {}, [])```.



# State variable - behind the scenes

Behind the scenes, React creates one big state variable that holds all those multiple state variables, that we create in functional component.

In class component, there exists only one state object (```this.state = {}```) that holds multiple state variables.

- Never update state variables directly in class components! Instead, use ```this.setState``` method. ```this.setState``` takes an object as an argument, which contains updated value of the state variable(s). If we want to update only a portion of large state object, we can pass only specific updated values of state variables, React will update only them and won't change anything else.
- When we update the state, react rerenders the component.
- we can (should) update multiple components together, in one ```this.setState```.
- Both of these versions give us the same result, the difference is that the second one uses destructuring:
```
import React from "react";
class About extends React.Component {}
```
```
import { Component } from "react";
class About extends Component {}
```


# Lifecycle methods

The class component loads -> constructor is called -> render() is called -> componentDidMount() is called.



```componentDidMount``` is used to make API calls.

React first renders the element and then makes an API call and fills the component with the returned data. Otherwise it would have to wait for the API call to return the data and then render the component. This is why ```render()``` is executed the first and then the ```componentDidMount``` which makes an API call.

If we have multiple components, it will first call ```constructor``` and ```render``` of each childe, then when it finishes executing  ```constructor``` and ```render``` for each child, then will execute ```componentDidMount``` for each child. E.g.:
1. ```<Component1/>```
2. ```<Component2/>```

Execution:
1. ```constructor```  for ```Component1```;
2. ```render```  for ```Component1```;
--------------------------------------------------
3. ```constructor```  for ```Component2```;
4. ```render```  for ```Component2```;
-------------------------------------------------
5. ```componentDidMount```  for ```Component1```;
6. ```componentDidMount```  for ```Component2```;


```componentWillUnmount``` is called just before component is unmounted (e.g. before user goes to the new page).

!['Lifecycle diagram'](/assignments/diagrams/react-lifecycle-methods.png)


React batches multiple children's render and commit phases. This is one of the reason, why React is fast. Because DOM manipulation is very expensive and batching the changes will help to improve performance.



### Mounting

- Constructor (dummy)
- Render (dummy)
   - ```<HTML dummy>```
- Component Did Mount
  - ```<API Call>```
  - ```<this.setState>``` -> State variable is updated.

### Update

  - render (API data)
  - ```<HTML (new API data)>```
- Component Did Update

