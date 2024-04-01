# What is a Microservice?

It is an code's architecture style where jobs are divided to multiple small modules. Each module adheres Single Responsibility Principle.

Characteristics:
- Modularity and Decentralization: application is divided into smaller indipendent modules.
- Specialization / Single Responsibility Principle: each module is focused on smaller tasks.
- Scalability and Reusability: smaller code chunks can be easily scaled and be reused for specific tasks.






# What is Monolith architecture?

Type of code architecture where components, such as UI, business operations, database operations and other operations, are part of a single codebase.

Characteristics:
- Single codebase and runtime: all parts of code are developed and run as a single entity.
- Tight coupling: different components are depended on each other which makes scalability and reusability much harder.
- Complexity grows over time: although initially application is much simpler, overtime complexity grows significantly.






# What is the difference between Monolith and Microservice?

- Monolithic architecture: application is built as single unit. All different components (front-end, back-end ...) are in a single codebase.
- Microservice architecture: application is broken down into multiple micro services. Each service is self-contained and has specific task.






# Why do we need a useEffect Hook?

```useEffect()``` hook enables React's functional components to perform side effects (such as data fetching, DOM manipulation...).

```useEffect()``` takes two arguments ```useEffect(() => {}, []);```:
- A callback function. It is called after the component is rendered.
- An array of dependencies, which tells when to re-run the effect. This feature helps for performance optimization.



# What is Optional Chaining?

Allows us to access deeply nested properties of an object without having to check if each reference is nullish - ```null``` or ```undefined```. If property is ```null``` or ```undefined```, it returns ```undefined``` instead of throwing ```TypeError```.

```js
const value = object?.property;
const value = object?.[expression];
const value = array?.[index];
const value = func?.(args);
```





# What is Shimmer UI?

Also called 'Shimmer'.

It is a design effect, a placeholder animation, that indicates content is loading. 

Shimmer UI creates a placeholder animation that mimics layout of the content before it fully loads onto the screen.






# What is the difference between JS expression and JS statement?

- JS Expression: a code that produces a value.
```js
'Hello World!';
3.14;
5*10;
functionCall();
true;
```

- JS Statement: a code that performs an action.
```js
// Variable declaration
let x = 5;

// Conditional statement
if (x > 5) { /* do something */ };

// Loop statement
for (let i = 0; i < 5; i++) { /* do something */ };

// Function declaration
function myFunction() { /* do something */ };
```





# What is Conditional Rendering, explain with a code example

Used to render different elements or components based on certain conditions. Conditions are checked with regular js conditional checks: if, else, switch, ternary operators.
```js
function WelcomeMessage(props) {
  if (props.isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign in.</h1>;
  }
}
```





# What is CORS?

Cross-Origin Resource Sharing - security feature that restricts how resources on a web page can be requested from another domain. 

CORS provides a way for servers to declare that their resources can be requested from another domain.

// Originally browsers had Same-Origin Policy, which prevented pages from making requests to another domain.

Two types of CORS requests:
- Simple request.
- Preflighted request.

#### Simple Request

- Uses only certain headers, like: GET, HEAD, POST and few others.
- Requests are made with an ```Origin``` header: ```Origin: http://example.com```.
- Server resoinds with ```Access-Control-Allow-Origin``` if request is allowed: Access-Control-Allow-Origin: ```http://example.com```.

#### Preflighted Request

- Uses other HTTP methods, other than GET, HEAD or POST.
- Browser sends preliminary 'preflight' request using 'OPTIONS' method.
- 'Preflight' request checks if the actual request is allowed.
- If request is allowed, browser sends actual request.
    - Preflight Request Header: ```Origin: http://example.com```.
    - Access-Control-Request-Method:'DELETE'.
    - Preflight Response Header: Access-Control-Allow-Origin: ```http://example.com```.
    - Access-Control-Allow-Methods: POST, GET, DELETE





# What is async and await?

```async``` and ```await``` keywords are used to simplify working with promises. They are 'syntactic sugar'. They improve readability of asynchronous code.

- ```async```: to turn a function declaration into asynchronous function, we write ```async``` in front of the function:
```js
async function asyncFunction() {}
```

- ```await```: we use ```await``` keyword inside asynchronous function to pause function execution until promise is resolved or rejected.
```js
async function myAsyncFunction() {
  const result = await someAsyncOperation();
  console.log(result); 
}
```




# What is the use of `const json = await data.json();` in getRestaurants()

It converts fetched data into JSON object, so it will be usable in coding.