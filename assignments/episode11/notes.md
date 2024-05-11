### Higher Order Components

A Higher Order Component is a function that takes a component and returns a component.

- A Higher Order Component is a function that takes a component, adds some feature and returns a component.
- ```category.card?card['@type']``` we can't start properties with @ in JS. In this case we have to use it to search a property in the json. The Hack is to wrap the name in the quotes and square brackets or just square brackets: ```['']``` or ```[]```.
- ```w-6/12``` - width: half of the page - tailwind divides the page into 12 pieces.
- We can't use hooks in Class based Components. But we can access ```userContext``` with ```.Consumer```.
```
      <UserContext.Consumer>
                        { (data) => console.log(data) }
                    </UserContext.Consumer>
```