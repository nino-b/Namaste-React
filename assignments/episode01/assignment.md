<h1>What is Emmet?</h1>
<h2>How Emmet Works</h2>
Emmet is a plugin for many popular text editors and IDEs. It allows developers to write HTML and CSS code using abbreviated snippets that expand into full-fledged HTML elements or CSS properties, significantly speeding up the coding process.

<h2>HTML Abbreviations</h2>
In HTML, Emmet allows you to use abbreviations that represent HTML elements and their attributes in a concise manner. Here are some examples:

- Basic Tag Expansion: Writing ```p``` and expanding it will give you ```<p></p>```.
- Nesting Elements: Using ```>``` allows you to nest elements inside each other. For example, div>ul>li expands to:
```html
<div>
    <ul>
        <li></li>
    </ul>
</div>
```

- Multiplication: The ```*``` symbol is used to repeat elements. ```ul>li*3``` expands to an unordered list with three list items.
- ID and Class Shortcuts: Using # for IDs and . for classes lets you quickly add these attributes. ```div#header.navbar``` expands to ```<div id="header" class="navbar"></div>```.
- Attribute Operators: Adding attributes is straightforward. ```a[href="https://example.com"]``` becomes ```<a href="https://example.com"></a>```.
<h2>CSS Abbreviations</h2>
In CSS, Emmet provides shortcuts for writing CSS properties and values. Here are a few examples:

- Property Abbreviations: Typing ```m10``` expands to ```margin: 10px;```. Emmet knows many CSS properties and offers shorthand for them.
- Responsive Values: You can use ```w100p``` for ```width: 100%;```. The ```p``` stands for percent, and similarly, ```vh```, ```vw```, etc., can be used.
- Color Abbreviations: Typing ```c#``` expands to ```color: #```, waiting for you to complete the hex code.






<h1>Difference between a Library and a Framework.</h1>
<h2>Library:</h2>
<h3>Definition:</h3> A library is a collection of functions and routines that a program can call upon to perform specific tasks. It's essentially a set of tools that developers can choose to use or not use, depending on their needs.
<h3>Analogy:</h3> Think of a library as a toolbox where each tool serves a specific purpose. You open the toolbox and select a tool (a function or routine) when you need it. After using it, the control returns to you, and you decide what to do next.
<h3>Control:</h3> When you use a library, you are in control of the flow of the application. You decide when to call the library and which parts of it to use. The library performs specific operations and returns control to your application.


<h2>Framework:</h2>
<h3>Definition:</h3> A framework, in contrast, provides a structure and guidelines for building your application. It often includes pre-written code, libraries, and a set of rules that dictate how your application should be organized and how certain operations should be performed.
<h3>Analogy:</h3> A framework is like the blueprint for a building. The blueprint provides an overall structure and specifies how different parts of the building should be constructed. When building, you follow the blueprint's guidelines; you don't randomly start constructing rooms.
<h3>Control:</h3> With a framework, the control flow is inverted: the framework calls upon your code rather than your code calling upon the framework. This is sometimes referred to as the "Hollywood Principle" or "Inversion of Control" (IoC), meaning "Don't call us, we'll call you."
<h3>Convention over Configuration:</h3> Many frameworks follow this principle, meaning they prefer you to follow predefined ways of doing things, which can significantly speed up development for those who adhere to these conventions.


<h2>Key Differences Summarized:</h2>
<h3>Control Flow:</h3> In a library, you call the code when you need it. In a framework, the framework dictates when your code is called.
<h3>Scope:</h3> Libraries are typically focused on specific tasks or functionalities, while frameworks offer a more comprehensive approach to application development, providing tools, guidelines, and structure.
<h3>Flexibility vs. Convention:</h3> Libraries offer more flexibility as you choose when and how to use them. Frameworks, by enforcing certain conventions and structures, might limit flexibility but can greatly enhance development speed and application robustness by providing a proven structure and set of practices.






<h1>What is CDN? Why do we use it?</h1>

A Content Delivery Network (CDN) is a system of distributed servers that deliver web content and pages to a user based on the geographic locations of the user, the origin of the webpage, and the content delivery server. The primary purpose of a CDN is to improve the speed and performance of web content delivery to users around the world. These CDN servers cache (store) copies of the content, so they can serve requests directly to users without having to go back to the source server every time. Here's why we use CDNs:

<h3>Improved Load Times:</h3> By caching content at network edge locations closer to the user, CDNs reduce the distance data must travel, resulting in faster page load times. This is particularly beneficial for websites with a global audience.

<h3>Reduced Bandwidth Costs:</h3> CDNs can significantly reduce the amount of data an origin server must transfer, lowering hosting costs for website owners. This is achieved through techniques like caching and other optimizations.

<h3>Increased Content Availability and Redundancy:</h3> CDNs can handle more traffic and withstand hardware failure better than many origin servers, due to their distributed nature. This increases the availability of web content and improves overall reliability.

<h3>Enhanced Website Security:</h3> CDNs offer security benefits such as DDoS protection, improvements to security certificates, and other optimizations that can help defend against a variety of cyber threats.

<h3>Load Balancing:</h3> By distributing the load evenly across multiple servers, CDNs can manage more user requests at the same time. This ensures no single server bears too much load, which can prevent site crashes during traffic spikes.





<h1>Why is React known as React?</h1>
<h2>Declarative Nature</h2>
React embraces a declarative approach for creating user interfaces. This means that you tell React what you want to achieve (i.e., the desired state of the UI) rather than the step-by-step how to achieve it (imperative programming). For instance, in a React application, you describe a component's UI for a specific state without worrying about the transitions or DOM manipulations to get there. This makes your code more readable and easier to debug.

<h2>Reactive Updates</h2>
When the state of a React component (the data it displays) changes, React reacts to this change by automatically re-rendering the component to reflect the new state. This is where the name "React" comes from—it reacts to state changes. You don't have to explicitly update the DOM; React handles it efficiently by comparing the component's previous output and the new output, and applying only the necessary DOM updates. This process is known as reconciliation.

<h2>Component-Based Architecture</h2>
React applications are built using components, which are reusable, composable, and encapsulated elements that manage their own state. Each component is responsible for rendering a part of the UI and can react independently to state changes. This modular architecture not only makes development more efficient but also enhances the reactivity of the application, as each component is designed to update in response to data changes.

<h2>Virtual DOM</h2>
A key innovation in React is the Virtual DOM—a lightweight copy of the actual DOM. The Virtual DOM provides a layer of abstraction that enables React to efficiently update the UI. When the state of an object changes, React first applies the changes to the Virtual DOM. Then, it compares the updated Virtual DOM with a pre-update version and calculates the most efficient way to apply these changes to the real DOM. This diffing algorithm ensures that the minimal number of DOM manipulations are made, which is critical for high-performance applications.

<h2>Why "React"?</h2>
The name "React" succinctly captures the essence of the library—it's all about creating UIs that react dynamically to state changes. The reactive update mechanism, combined with a declarative programming paradigm, enables developers to build complex UIs that can update in real-time in response to user interactions, data retrievals, and other events, without the boilerplate code typically associated with keeping the UI in sync with underlying data models.





<h1>What does `crossorigin`  attribute mean in HTML?</h1>

The crossorigin attribute in HTML is used with ```<link>```, ```<img>```, and ```<script>``` elements to configure how cross-origin requests are handled for resources associated with these elements. It's part of the mechanism to securely load resources from another domain, allowing web developers to control whether and how the browser sends credentials (like cookies or HTTP authentication) with cross-origin requests. Here's what the crossorigin attribute values mean:

<h3>anonymous:</h3> With this setting, cross-origin requests for the resource will be made without any credentials (like cookies, client SSL certificates, or HTTP authentication). If the server doesn't give permission for the resource to be shared with the origin of the requesting code by using the appropriate CORS headers (Access-Control-Allow-Origin), the browser will treat the request as a failure. It's useful for loading resources that are publicly accessible but reside on another domain.

<h3>use-credentials:</h3> This setting allows the browser to include credentials (cookies, client SSL certificates, HTTP authentication) with the cross-origin request. The server must also include the origin of the requesting site in the Access-Control-Allow-Origin header and must set Access-Control-Allow-Credentials to true for the browser to accept the response and make use of the resource. This is used when the requested resource is behind some sort of access control that requires credentials.

If the crossorigin attribute is not set, the resource is fetched without a CORS request (i.e., without sending the Origin header), and browsers will block the response if it comes from a different origin and tries to interact with the requesting code in a manner that requires CORS approval.

Using the crossorigin attribute correctly is important for maintaining the security and privacy of both the resource being fetched and the user's data. It helps in preventing Cross-Site Scripting (XSS) and data theft by ensuring that cross-origin resources are loaded in a controlled and secure manner.





<h1>What is the difference between React and ReactDOM?</h1>


<h2>React</h2>
React is a JavaScript library to build user interfaces, primarily for single-page applications. It's designed to be declarative, making it easier to reason about your application and aims to be efficient by only updating parts of the UI that need changes.

<h2>ReactDOM</h2>
ReactDOM is a separate package that provides DOM-specific methods that can be used in a web environment. While React can be used without a DOM (for example, in React Native for mobile app development), ReactDOM makes it possible to interact with the web browser's DOM.

<h2>How They Work Together</h2>
In a typical React web application, React manages the components, state, and interactions within your application, abstracting away the direct manipulation of the DOM. ReactDOM takes the instructions from React on what should be displayed and translates them into actual DOM updates. This separation of concerns allows React to focus on the application logic and user interface components, while ReactDOM handles the specifics of rendering and updating the DOM in the web environment.

To summarize, React provides the framework for defining and managing UI components and their state, while ReactDOM bridges React with the DOM, allowing your React components to be rendered as actual DOM elements in the browser. This distinction helps keep the core React library lightweight and focused, while still enabling comprehensive interaction with the web environment through ReactDOM.





<h1>What is the difference between React.development.js and React.production.js files via CDN?</h1>

<h2>React.development.js</h2>

<h3>Purpose:</h3> This file is intended for use in development environments. It includes additional warnings, error messages, and checks that are helpful during the development process. These features make it easier to identify and debug issues.

<h3>Performance:</h3> Because it contains extra diagnostic code and detailed error messages, React.development.js is larger in size and slower in performance compared to the production version. These characteristics are acceptable in development because they aid in debugging and provide a more informative development experience.

<h2>React.production.js</h2>

<h3>Purpose:</h3> This file is optimized for production environments. It omits development warnings and diagnostic checks to reduce file size and improve performance. The production version is minified, meaning that whitespace, comments, and unnecessary characters are removed, and variable names may be shortened.

<h3>Performance:</h3> React.production.js is significantly smaller and faster than the development version. These optimizations are crucial for a production environment, where performance and load times are critical.





<h1>What are async and defer?</h1>

<h2>async</h2>

<h3>Usage:</h3> 

```<script async src="script.js"></script>```
<h3>Behavior:</h3> When you add the async attribute to a script, it allows the browser to continue parsing the HTML document while the script is being downloaded in the background. As soon as the script finishes downloading, parsing is paused, and the script is executed. This means that async scripts are not guaranteed to execute in the order in which they appear in the HTML document.
<h3>Ideal for:</h3> Scripts that do not depend on other scripts and do not modify the DOM (Document Object Model) immediately. An example might be analytics scripts or ads that run independently of the main page content.


<h2>defer</h2>

<h3>Usage:</h3> 

```<script defer src="script.js"></script>```
<h3>Behavior:</h3> The defer attribute also allows the browser to download scripts in the background without blocking HTML parsing. However, scripts with the defer attribute are executed only after the entire document has been parsed. Unlike async scripts, defer scripts are executed in the order they appear in the HTML document.
<h3>Ideal for:</h3> Scripts that need to access or modify the DOM and rely on the full HTML document being parsed. defer is useful for scripts that need to run after the document is fully loaded but before the DOMContentLoaded event.


<h2>Comparison and Use Cases</h2>

Order of Execution:</h3> async scripts are executed as soon as they are downloaded, which can lead to them running out of order. defer scripts, on the other hand, respect the order in which they appear in the HTML document.
<h3>Impact on DOMContentLoaded:</h3> Scripts loaded with async can delay the DOMContentLoaded event if they take a long time to download and execute. defer scripts wait for the entire document to be parsed before executing, so they don't have the same potential to delay DOMContentLoaded.


<h2>Without async or defer</h2>

<h3>Loading Behavior:</h3> 

The browser encounters the ```<script>``` tag and immediately stops parsing the HTML document.
<h3>Execution:</h3> The script is downloaded synchronously, meaning the browser waits for the script to download and execute before it continues parsing the HTML document. This can lead to significant delays in page rendering, especially if the script is large or if the server response is slow.
<h3>Impact on Page Load:</h3> The main drawback of not using async or defer is that it can severely affect the perceived load time of the page. Users might see a blank page or unstyled content for longer than necessary because the browser is waiting for the script to load and execute before it can continue rendering the rest of the page.
<h3>Use Case:</h3> This approach might still be suitable for small scripts that are essential for the initial rendering of the page or for scripts that need to execute as early as possible in the page load process. However, for most external scripts, especially those that are not critical for the initial page render, this can lead to a poor user experience.