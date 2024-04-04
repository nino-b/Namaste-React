# How do you create Nested Routes react-router-dom cofiguration

- Nested Routes allow structuring application hierarchically, where each section has their own sub-section.
```js
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />}>
        // Nested route under /about
        <Route path="team" element={<Team />} />
      </Route>
    </Routes>
  );
}
```






# Read about createHashRouter, createMemoryRouter from React Router docs.

createHashRouter is useful if we can't configure server to direct all traffic to React Router application. 

Instead of normal URL, it will use hash (#) portion of the URL, to manage the 'application URL'.

Using hash URL is not recommended.
- Search Engine Optimizatin problem - historically, search engines have difficulty indexing single-page applications that use hash routing, because hash fragment usually indicates state or a position in a page, rather than representing distinct, navigatable content.
- Limited Browser History Support - doesn't leverage browser's history API. Might cause less predictable behavior when using forward and back buttons.





# What is the order of life cycle method calls in Class Based Components

In React class-based components, lifecycle methods are hooks that allow us to run code at specific points in a component's lifecycle.

Lifecycle phases:
1. Mounting.
2. Updating.
3. Unmounting.

### Mounting
1. constructor(props)
2. static getDerivedStateFromProps(props, state)
3. render()
4. componentDidMount()

### Updating
1. static getDerivedStateFromProps(props, state)
2. shouldComponentUpdate(nextProps, netState)
3. render()
4. getSnapshotBeforeUpdate(prevProps, prevState)
5. componentDidUpdate(prevProps, prevState, snapshot)

### Unmounting
1. componentWillUnmount

### Error Handling
1. static getDerivedStateFromError(error)
2. componentDidCatch(error, info)


### Mounting

These methods are called when an instance of a component is being created and inserted in the DOM, in this order:

1. constructor(props)
- Is called before React component it is mounted.
- Initializes state and binds event handler methods to an instance.

2. static getDerivedStateFromProps(props, state)
- Called right before rendering element.
- Returns an object - to update the state, or null - to update nothing.

3. render()
- Mandatory!
- Examines 'this.props' and 'this.state' and returns single React element, null or a fragment.

4. componentDidMount()
- Called immediately after a component is mounted (inserted in the tree).
- Initialization that requires DOM nodes should go here.


### Updating
1. static getDerivedStateFromProps(props, state)
- called before the rendering process.



2. shouldComponentUpdate(nextProps, netState)
- Lets React know if a component's output is not affected by the current change in the state or propes.
- Returns 'true' by default. Returning 'false' will prevent the component from updating.

3. render()

4. getSnapshotBeforeUpdate(prevProps, prevState)
- Called right before the most recently rendered output is committed to the DOM.
- Enables the component to capture some information from the DOM (e.g. scroll position) before it is potentially changed.
- Returned value will be passed as a parameter to 'componentDidUpdate()'.

5. componentDidUpdate(prevProps, prevState, snapshot)
- Called immediately after updating occurs.
- Is not called for the initial render.
- Use this as an opportunity to operate on the DOM when the component has been updated.


### Unmounting

1. componentWillUnmount()
- Called when a component is about to be removed from the DOM.
- In this methos, we should perform any necessary cleanup.


### Error Handling
1. static getDerivedStateFromError(error)
- Used to render a fallback UI after an error is caught.

2. componentDidCatch(error, info)
- Used to log error information.




# Why do we use componentDidMount?






# Why do we use componentWillUnmount? Show with example






# (Research) Why do we use super(props) in constructor?






# (Research) Why can't we have the callback function of useEffect async?
