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