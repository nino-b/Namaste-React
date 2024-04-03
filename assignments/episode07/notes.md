# useEffect() hook

- Import the hook from React library: ```import { useEffect } from "react";```
- Call <b>useEffect</b> with two arguments: a callback function and a dependency array.
- Only a callback function is mandatory.
- If the dependency array is not present <b>useEffect</b> is called every time the component is rendered. The dependency array changes behavior of its render.
- If the dependency array is empty, the <b>useEffect</b> is called only on initial render.
- If the dependency array is present <b>useEffect</b> is called when the dependency changes.
- Never use <b>useState</b> or <b>useEffect</b> inside the 'if ... else' statement! It might create inconsistencies.




# useState() hook

- Never use <b>useState</b> hook outside the component!
- It creates local state variables inside the functional component.
- Call <b>useState</b> at the top of functional component.
- Never use <b>useState</b> or <b>useEffect</b> inside the 'if ... else' statement! It might create inconsistencies! (Even though this is a valid code).
- Never create state variables inside 'for' loop or a function!
- State variables should be created in the functional component, at the top of it.





# Routing

- When we have to develop routs, we have to create a <b>routing configuration</b>.
- ```import { createBrowserRouter } from "react-router-dom";``` it will create routing configuration (what will happen on a specific rout. Like whar should happen whwn we click 'home').
- 
```js
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
    },
    {
        path: "/about",
        element: <About/>,
    },
]);
```
- 
```js
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
        ],
        errorElement: <ErrorComp/>,
    },
]);
```

- ```RouterProvider``` will provide this routing configuration to our app: ```import { createBrowserRouter, RouterProvider } from "react-router-dom";```.
- ```root.render(<RouterProvider router={appRouter}/>);```.
- There are different routers in 'React Router' library. The recommended one is ```createBrowserRouter```. Other routers might be preferable in specific cases.
- ```useRouteError``` hook gives us more information about error ("react-router-dom" feature).
- ```Outlet``` - to load children routers dynamically, we use ```Outlet``` hook.
- ```<Outlet/>``` will be filled with a child, respective to the path we are using.
- ```<Outlet/>``` is replaced by the component, so it won't be visible in HTML.
- ```<Link to="/path"></Link>``` Component - works like an anchor tag. The difference is that ```Link`` doesn't reload the page. It refreshes components. This is how React applications are Single Page Applications. ("react-router-dom" feature).
- ```path: "/restaurants/:resId"``` in this code ```:resId``` colon means that this part of the path is dynamic.







# Shortcut 'rafce'

- A shortcut to generate a component: 'rafce'
- This shortcut needs vs code extension: 'ES7 React/Redux/GraphQL/React-Native snippets'