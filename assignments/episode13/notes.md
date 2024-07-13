# Testing

- Manual testing.
- Test Cases:
  - Unit testing.
  - Integration testing.
  - End to End testing (e2e testing).

 
### Unit testing
Test our component in isolation.



### Integration testing
Test our component in integration with other components.  
Where multiple components are involved and they are talking to each other.  
A specific flow will be tested.


### End to End testing

Testing as soon as user lands on a page, till user leaves the website.  
All different flows will be tested.


### Testing Libraries

- 'React Testing Library' (built on top of 'DOM Testing Library').
- If we use 'createReactApp', testing library is already integrated in our app.


React Testing Library uses 'jest' - a JS testing framework.

#### Setting up testing

1. Install 'React Testing Library'

```$ npm install --save-dev @testing-library/react @testing-library/dom```

2. Install 'jest'
```npm install --save-dev jest```
3. Install 'Babel' dependencies.
```$ npm install --save-dev babel-jest @babel/core @babel/preset-env```
4. Configure 'Babel'.
  - Create 'babel.config.js'
```js
  module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```
5. Configure Parcel Config file to disable default Babel transpilation.

Because 'Parcel' also uses 'Babel', there will be a conflict between those two configurations. To avoid this, we should disable 'Babel' transpilation from 'package.json' in 'parcelrc'.
```js
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}
```
6. 'jest' configuration 
```npx jest --init```
7. Install 'jsdom' library.  
If you're using Jest 28 or later, jest-environment-jsdom package now must be installed separately.   
```npm install --save-dev jest-environment-jsdom```  


When we create ```__tests__``` folder, 'jest' will track files that are inside this folder.   
Or any of the following files will be tracked by 'jest': ```.test.js```, ```spec.js```, ```test.ts```, ```spec.ts```.  

This is how we write test cases: ```test("", () => {});```
8. To make JSX work, add this library: ```@babel/preset-react```
9. Include ```@babel/preset-react``` into the 'Babel' config.
``` ['@babel/preset-react', {runtime: 'automatic'}]```
10. Install ```@testing-library/jest-dom```.


In test cases  ```screen.getAllByRole('textbox');``` returns a piece of JSX / react element /react fiber node / virtual DOM object.


We can write test case as:
- ```test("Test Name or Description", () => {}) ```
- ```it("Test Name or Description", () => {}) ```



Test Cases don't run on browser, they run on jest-dom, so they can't make network calls and that's why we can't use browser features, like 'fetch'. Wrap that mock fubctiob ib 'act'. <!-- It comes from react-dom/test-utils' -->. If we use fetch, don't forget to make test callback async.