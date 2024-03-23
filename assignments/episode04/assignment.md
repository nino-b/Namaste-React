<h1>Is JSX mandatory for React?</h1>

No, JSX is not mandatory for React. JSX is a syntax extension commonly used with react to easily describe UI structure. It can be used to 'mask' complex actions that is going underline and make code more readable. It is used to describe UI instead of writing complex ```React.createElement(tagName, parameters, input)```.




<h1>Is ES6 mandatory for React?</h1>

No, ES6 is not necessary for React but it is recommended because it introduces more efficient, readable and maintainable features, such as; classes, arrow functions, import/export, template literals and many more.




<h1>How can I write comments in JSX?</h1>

We can write JS comments in curly braces {} with /**/. Otherwise comments will be treated as part of JSX and will be displayed in the UI or may even throw an error.





<h1>What is &lt;React.Fragment&gt;&lt;/React.Fragment&gt; and &lt;&gt;&lt;/&gt;</h1>

&lt;React.Fragment&gt;&lt;/React.Fragment&gt; and its shorthand &lt;&gt;&lt;/&gt; allow us to group all children elements without adding extra nodes to the DOM.
- It is like ```document.createDocumentFragment()``` in JS.
- &lt;&gt;&lt;/&gt; shorthand syntax doesn't support keys or attributes. It just wraps all elements.




<h1>What is Virtual DOM?</h1>

It is a lightweight copy of DOM in memory. When a react component is rendered, React creates virtual DOM representation of UI. When state or component props change React creates new virtual DOM and it compares to the previous one (called 'diffing'). If there is a difference between these two structures, then it applies changes to the actual DOM.




<h1>What is Reconciliation in React?</h1>

A React process by which React updates DOM when component state changes.
- When component's state changes React marks it as 'dirty' and schedules an update.
- React calls render method of the components that have changed - generates new Virtual DOM.
- Compares new and old Virtual DOMs to each other. This comparison is happening in the memory.
- React calculates minimal number of necessary changes for the DOM. React uses ```key``` props to identify elements uniquely and determine which elements have changed.
- Updates actual DOM.




<h1>What is React Fiber?</h1>

It is a complete reimplementation of React's reconciliation algorithm.

#### Advantages
- Incremental Rendering: splits rendering work into chunks and spreads them over multiple frames - allows main thread to be responsive.
- Update Prioritization: can prioritize high priority updates (like animation and user interaction) over lower priority updates (data fetching).
- Concurrency: React can prepare multiple versions of UI at the same time.




<h1>Why do we need keys in React? When do we need keys in React?</h1>

- When rendering a list of components in React (when we loop through), it's important to provide a unique <b>key</b> prop to each component in the list.

- To do so, we need to pass unique key to the ```key``` property like: 
```js
<Restaurantcard key={restaurant.id}/>
```
- It is important because it provides performance optimization. When unique keys are provided and we add new component, React rerenders only that new component, instead of all components.
- If we are using ```.map``` and we need unique key, we should <b>NEVER USE INDEX (parameter of .map) AS UNIQUE KEY!</b> Because there are cases when order of items might change.





<h1>Can we use index as keys in React?</h1>

We can use index as keys in React, but it is not recommended. Because there are cases when order of items might change.




<h1>What are props in React?</h1>

- <b>props</b> also called <b>properties</b>.
- Argument to a function.
- Saying: 'passing a <b>prop</b> to a component' is similar to saying: 'passing an <b>argument</b> to a function".
- React will wrap those <b>props</b> in an object and pass to the component.
- When we have to dynamically pass in some data, we use <b>props</b>.
- Read-only.

We can <b>destructure props oject on the fly</b>.
- instead of writing this:
```js
const Restaurantcard = (props) => {
    return (
        <div>
            <h3>{props.resName}</h3>
            <div>
                <h4>{props.region}</h4>
                <h4>{props.rating}</h4>
                <h4>{props.deliveryTime}</h4>
            </div>
        </div>
    )
}

<Restaurantcard
    image={adjaruli}
    resName="Adjara Feast"
    region="Georgian, Adjarian."
    rating="5.0"
    deliveryTime="38 minutes"
/>
```

- We can write this way:
```js
const Restaurantcard = ({resName, region, rating, deliveryTime}) => {
    return (
        <div>
            <h3>{resName}</h3>
            <div>
                <h4>{region}</h4>
                <h4>{rating}</h4>
                <h4>{deliveryTime}</h4>
            </div>
        </div>
    )
}

<Restaurantcard
    resName="Adjara Feast"
    region="Georgian, Adjarian."
    rating="5.0"
    deliveryTime="38 minutes"
/>
```





<h1>What is a Config Driven UI?</h1>

- Approach in designing and developing.
- Layout, behavior and appearance of UI are determined by <b>configuration files</b> or <b>objects</b> rather than hard-coded values.
- Configuration files come from backend in a JSON format.

Allows for:
- Flexible and dynamic UI.
- Separation of Concerns - decoupling logic from values.
- Reusability - common UI code can be reused in different sutuations.