# What are various ways to add images into our App? Explain with code examples

1. Importing images Directly.
- If project is small or medium size, we can directly import images.
- Also, if we are using a bundler, directly imported images get compressed.
```js
import React from 'react';
import logo from './logo.png';  

function App() {
  return <img src={logo} alt="Logo" />;
}

export default App;
```

2. Using images from Public Directory.
- We can place images in a <b>public</b> directory of a project and use relative paths.
- This images don't get processed by bundlers.
```js
function App() {
  return <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" />;
}

export default App;
```

3. Using external URLs.
```jsx
function App() {
  return <img src="https://example.com/logo.png" alt="Logo" />;
}

export default App;
```

4. Dynamic Iports for Images.
```js
import React, { useState } from 'react';

function App() {
  const [logo, setLogo] = useState();

  import('./logo.png')
    .then(image => {
      setLogo(image.default);
    })
    .catch(error => {
      console.log(error);
    });

  return <img src={logo} alt="Logo" />;
}

export default App;
```





# What would happen if we do console.log(useState())?

We will get an array with two elements:
- First element: initial state (in this case ```undefined```)
- Second element: a function that updates this state.






# How will useEffect behave if we don't add a dependency array?

Because of absence of dependency array, the effect will run for any other re-renders caused by other changes, even if they don't directly affect variables inside ```useEffect```.





# What is SPA?

Single Page Application (SPA), is a web application or a website that interacts with user by dynamically rewriting current page, rather than loading new pages from server. This results more fluid and faster experience, minimizes amount of data transferred between server and client and  reduces web page load times.





# What is difference between Client Side Routing and Server Side Routing?

### Server Side Routing:
Navigation between pages causes a full page reload.

Pros:
- Simpler initial setup for basic websites.
- Server handles most of the rendering, which is benefitial for clients with less processing power.

Cons:
- Slower page transition, as each navigation requires a new round trip to the server.
- Less seamless user experience due to page reloads.
- High server load.


### Client Side Routing
A web application loads single HTML page in the browser and dynamically updates the content as user navigates the application.

Pros:
- Faster page transitions.
- Better user experience, smooth and quick content updates.
- Reduced server load (only once and then only data as needed).

Cons:
- Slower initial load, because entire application framework and assets must be loaded upfront.
- More complex setup.