<h1>Plan</h1>

When we are building an app, the first step is to make a plan.

<b>Example:</b>

- Basic UI.
- App components.
    - Header.
        - Logo.
        - Nav Items.
    - Body.
        - Search.
        - Restaurant Container.
            - Restaurant Card.
    - Footer.
        - Copyright.
        - Links.
        - Address.
        - Contact.





<h1>Inline style in JSX.</h1>

If you want to write inline style in JSX, you should 
- use ```style``` attribute, 
- give a JavaScript object as an argument and 
- put that argument in curly braces (because it is a JS code).

Properties should be written with camel case (```backgroundColor```).





<h1>What is <b>props</b>?</h1>

- <b>props</b> also called <b>properties</b>.
- Argument to a function.
- Saying: 'passing a <b>prop</b> to a component' is similar to saying: 'passing an <b>argument</b> to a function".
- React will wrap those <b>props</b> in an object and pass to the component.
- When we have to dynamically pass in some data, we use <b>props</b>.

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





<h1>Config driven UI</h1>

- Approach in designing and developing.
- Layout, behavior and appearance of UI are determined by <b>configuration files</b> or <b>objects</b> rather than hard-coded values.
- Configuration files come from backend in a JSON format.

Allows for:
- Flexible and dynamic UI.
- Separation of Concerns - decoupling logic from values.
- Reusability - common UI code can be reused in different sutuations.





<h1>Optional chaining</h1>

Allows accessing deeply nested properties on the object without need to check if that property is null or undefined.

1. 
const city = person?.address?.city;

- If person does not exist, returns undefined.
- If person exists, checks for address. If address does not exist, returns undefined.
- If person and address exist, checks for city. If city does not exist, returns undefined, otherwise it returns whatever city is set to (even if it is explicity set to null or undefined, it will return null or undefined).

2. 
const city = person.address.city;

- If there exists everything, it will return value of city property.
- If any of those does not exist, or is null/undefined, it will throw a <b>TypeError</b> (saying like: "Cannot read properties of undefined (reading 'address')").





<h1>key</h1>

When rendering a list of components in React, it's important to provide a unique key prop to each component in the list.

- When we loop through in React, we need to pass unique <b>key</b> to the component.
- To do so, we need to pass unique key to the ```key``` property like: <Restaurantcard key={restaurant.id}/>