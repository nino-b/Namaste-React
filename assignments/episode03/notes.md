<h1></h1>
<h2></h2>
<h3></h3>
<h4></h4>

<h1>npx parcel index.html</h1>


Running npx parcel index.html is a command to start the Parcel bundler on a project, with index.html as the entry point.

<h3>npx:</h3> This is a package runner tool that comes with npm (Node Package Manager). It allows you to run packages that are installed locally within your project or globally on your computer. If the package isn't installed, npx will temporarily download and execute it. In this case, npx is used to execute Parcel without requiring a global installation.

<h3>parcel:</h3> This is the Parcel bundler itself. When you invoke Parcel using npx, it starts the bundling process.

<h3>index.html:</h3> This specifies the entry point for Parcel. The bundler starts from this file, analyzes all the dependencies (such as JavaScript, CSS, images, etc.), and bundles them together.





<h1>The "scripts" property in a package.json file</h1>

- The "scripts" property in a package.json file provides a flexible way to define and run custom scripts. 
- These scripts can automate repetitive tasks such as building, testing, starting, and deploying applications, among others. 
- The "scripts" property is essentially a map (or an object) where each entry consists of a script name (the key) and the command to be run (the value).
- If we want to add specific npm commands, we can add there manually.
- If we want to look up specific shortcuts for commonly used npm commands, we should look into ```package.json``` file's ```"scripts"``` property. This is handful when you are working with new project and you want to know specific shortcuts.

<h2>Structure and Usage</h2>

A basic example of the "scripts" property in a package.json file looks like this:

```js
"scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest"
}
```

- <h3>start:</h3> A command under this key is typically used to start your application. It's the standard way to boot up a project in a development environment or production, depending on the command specified.
- <h3>build:</h3> This script is often used to compile or bundle your application's source code into a format ready for production.
- <h3>test:</h3> This entry usually defines a command to run your test suite.

<h2>Running Scripts</h2>

You can run these scripts using npm or yarn by typing npm run ```<script-name>``` or yarn ```<script-name>``` in your terminal. For example, npm run start will execute the command defined under the "start" key. 

<h2>Predefined and Custom Scripts</h2>

npm recognizes certain predefined script names and associates specific behaviors with them. For example, you can run ```npm start``` and ```npm test``` which are shorthands of ```npm run start``` and ```npm run test```.

<h2>Benefits and Common Practices</h2>

- <h3>Automation:</h3> Scripts can automate many tasks, from simple file copying to complex build and deployment processes.

- <h3>Customization:</h3> They offer flexibility, allowing developers to tailor commands to the specific needs of their project.

- <h3>Consistency:</h3> By defining scripts in package.json, you ensure that every developer on the project runs the same commands, enhancing consistency across different environments.





<h1>DOM Element and React Element</h1>

<h2>DOM Element</h2>

- <h3>Definition:</h3> A DOM (Document Object Model) element is an object representing a part of the HTML document. The DOM is a tree-like structure that represents the document in the web browser.

- <h3>Characteristics:</h3>
Real elements that exist in the web document.
Can be interacted with and manipulated using standard JavaScript and browser APIs.
Changes to the DOM elements directly affect the HTML document and can be seen by the user.

<h2>React Element</h2>

- <h3>Definition:</h3>React elements are not actual DOM elements; instead, they are objects that tell React what to render to the DOM.

- <h3>Characteristics:</h3>
Virtual representations of UI components.
Created using JSX (JavaScript XML) or React.createElement() method.
Immutable and cannot be changed once created. React uses them to understand what the UI should look like.
React uses a virtual DOM to compare React elements with the actual DOM and efficiently updates the DOM to match the React elements.





<h1>root.render(objectName)</h1>

- When you execute root.render(heading), React takes the heading object (or any React element/component you provide) and converts it into actual DOM elements. It then mounts these elements into the container specified when creating the root. 

- The content of the heading component (or the provided React element) will replace everything inside the container element in the DOM. If the container had any children before, they would be removed and replaced by the React-rendered content.





<h1>What is JSX?</h1>

- JSX stands for JavaScript XML. It is a syntax extension for JavaScript, recommended by React, to describe the UI structure in a way that resembles HTML. 
- Despite its HTML-like appearance, JSX is actually closer to JavaScript, and browsers don't inherently understand it. 
- Before a JSX code can run in a browser, it must be transformed into standard JavaScript using a transpiler like Babel.

<h2>How JSX Works</h2>

When you write JSX, the expressions are converted into ```React.createElement()``` calls behind the scenes. For example, the JSX expression:

```jsx
const element = <h1>Hello, world!</h1>;
```
Transpiles to:

```javascript
const element = React.createElement('h1', null, 'Hello, world!');
```

This ```React.createElement()``` function creates a JavaScript object ("React element") that represents the DOM node(s). These objects then form the basis of React's virtual DOM, enabling React's efficient update and rendering system.

<h2>Why JSX?</h2>

Although not strictly required for using React, JSX provides syntactical sugar that makes it easier to express the structure of your UI. It allows for a more HTML-like syntax, which improves readability and maintainability, particularly in large applications or when working within a team. The ability to embed JavaScript expressions directly within the UI structure definition simplifies the process of building dynamic, data-driven applications.

<h2>In JSX, unlike HTML:</h2>

- If you want to write ```class```, as attribute, you should write ```'className'```: ```<h1 className="heading" id="h1"></h1>```
- We don't use hyphens for attributes. Instead we use camel case: ```<h1 tabIndex="1"></h1>```
- If JSX is several lines, we need to wrap it in parenthesis.





<h1>What is XML?</h1>

- XML, which stands for Extensible Markup Language, is a markup language much like HTML and was designed to store and transport data in a plain text format. It allows both humans and machines to read and write data with ease. 
- XML's primary purpose is to facilitate the sharing of structured data across different information systems, particularly via the Internet, and to encode documents in a format that is both human-readable and machine-readable.
- JSX is not HTML in JavaScript. It is a syntax extension for JavaScript that allows you to write HTML-like code which can coexist with JavaScript/React code. 

<h2>Key Features of XML</h2>

- Self-descriptive: The tags used in XML documents are not predefined like HTML tags. Instead, they are custom tags created by the author of the XML document to accurately describe the data and its structure.

- Hierarchical Structure: XML documents form a tree structure that is easy to interpret. 

- Platform-Independent: XML is a text-based format, which makes it independent of hardware, software, and application environments. 

- Extensible: Users can create their own tags and data structures according to the needs of their specific applications, making it a flexible way to structure data.

- Supports Unicode: XML supports all Unicode characters. This makes XML suitable for internationalized environments, allowing it to represent most of the world's written languages.





<h1>What is a difference between XML and HTML syntax?</h1>

<h2>Purpose</h2>

- <h3>HTML:</h3> Designed specifically for creating and designing web pages and web applications. It focuses on how data looks (presentation and layout) rather than what the data actually means.
- <h3>XML:</h3> Created to store and transport data with a focus on what data is (content and structure) rather than how it looks. It is used for data exchange between systems and applications.

<h2>Tags and Structure</h2>

- <h3>HTML:</h3> 

Has a predefined set of tags understood by web browsers to render web pages. Tags like ```<p>```, ```<div>```, ```<h1>```, and ```<a>``` have specific purposes and effects on the content's presentation.
- <h3>XML:</h3> 

Does not have predefined tags. Users define their own tags according to their data's needs, making it extremely flexible. For example, ```<book>```, ```<author>```, and ```<price>``` could be tags in an XML document describing books.

<h2>Usage Context</h2>

- <h3>HTML:</h3>  Primarily used for creating structured documents on the web, like web pages and web applications.
- <h3>XML:</h3>  Used in a wide variety of applications beyond the web, including configuration files, data exchange formats in web services (SOAP, REST), office document formats (OOXML, ODF), and many others where custom structured data storage is needed.





<h1>What is a difference between React Element and React Component?</h1>

<h2>React Element</h2>

- A React Element is a plain object that describes a DOM node and its attributes or properties. It is the simplest building block in React.

<h2>React Component</h2>

- A React Component can be a function or a class that returns a React Element or a tree of them. Components can accept inputs called props and maintain internal state.
- There are two types of components: 
    - Class Based Component (old way, usually not used).
    - Functional Component (new way, mostly used).
- Components are designed to be reusable. You can define a component once and render it in multiple places, each time with different properties (props).
- Functional Component is a regular JavaScript function which returns React Element or JSX code.
- When we write a component, we should start its name with capital letter, otherwise, we will get an error (like: ```const HeadingComponent```).
- ```<ComponentName/>``` - we use Self-Closing Tags to invoke Functional Components (as well as Class components).
- 'Component Composition'- combining smaller, simpler components.

Elements are the output of components. You can think of components as factories that produce elements.





<h1>How does JSX help in avoiding XSS attacks?</h1>

<h3>Cross-Site Scripting (XSS)</h3>

- <b>Cross-Site Scripting (XSS)</b> is a security vulnerability typically found in web applications. XSS enables attackers to inject malicious scripts into content that appears to be from a trusted source. 
- When other users interact with this content, the injected scripts can execute in their browsers, leading to potential data theft, session hijacking, and other security breaches.
- XSS vulnerabilities stem from web applications that fail to properly sanitize input from users before outputting it to web pages. 

<h3>Escaping User Input</h3> 

- When we use curly braces ({}) to embed expressions in JSX, React converts the input into a string (if it isn't already a string) and escapes it. 
- This process ensures that any potentially dangerous characters in the input, such as <, >, " (double quotes), ' (single quotes), and {} (curly braces), are safely encoded. 
- As a result, if an attacker tries to inject a script into JSX via user input, the script tags and associated code would be treated as plain text rather than being executed.