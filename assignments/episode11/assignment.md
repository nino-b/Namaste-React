### What is prop drilling?

This often happens when you need to pass data or callbacks from a parent component deep down to its descendant components, potentially through several layers that do not need or use the data themselves.




### What is lifting the state up?

This concept involves moving shared state from child components to their closest common ancestor. By doing this, you make the state accessible to all components that need it, without having to pass props deeply through the component tree—a process known as "prop drilling."




### What is Context Provider and Context Consumer?


In React, the Context API is a way to manage state globally across many components without having to pass props explicitly through every level of the component tree. This API is particularly useful for sharing data that can be considered "global" for a tree of React components, such as the current authenticated user, theme settings, or application-wide preferences.

- Context.Provider lets you define the value that should be accessible to all child components, no matter how deep they are in the component tree.
- Context.Consumer is used in class components and before Hooks to consume the context value, but it's generally less used now with the availability of the simpler and more concise useContext hook in functional components.
- Using context effectively can simplify the data flow in your application and avoid "prop drilling" from parent to child components.
 



### If you don’t pass a value to the provider does it take the default value?
If you don't pass a value to a Context.Provider, the consumers of that context will receive the default value that was specified when the context was created using React.createContext(). This default value is particularly useful for scenarios where a context provider might not be used but the consuming components still need a fallback value to operate correctly.