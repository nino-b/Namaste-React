## Hooks

- Hooks are regular utility functions.
- Place them in the utility functions' folder.
- For each hook create different file.



### Chunking / Code Splitting / Dynamic Loading / Lazy Loading / On Demand Loading


Bundling all JS code into one JS file is not practical, because it might get very large. This is why it is better to bundle code into smaller pieces.


- A bundle should have enough code for a major feature.
- ```import React, { lazy } from "react";``` - ```lazy(() => import(path))```.
E.g.:
```const Grocery = lazy(() => import('./components/Grocery.js'));```
 no need for ```import Grocery from "./components/Grocery.js";```