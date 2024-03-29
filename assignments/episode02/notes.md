
<h1>npm init</h1>
The npm init command is used to initialize a new Node.js project. When you run this command in your terminal or command prompt, it interacts with you through a series of questions and then creates a package.json file in your project directory. The package.json file contains metadata about your project, such as:

package name: (name of your project)
version: (1.0.0)
description: (A short description of your project)
entry point: (index.js) This is the main file of your project.
test command: Command to run tests.
git repository: URL of the git repository.
keywords: Keywords associated with your project.
author: Your name or the name of the project author.
license: (ISC, MIT, etc.) The license under which your project is released.
You can either provide answers to these questions or press Enter to accept the default values or leave them blank.

Creation of package.json: Once you've answered all the questions, npm will generate a package.json file in your project directory with the information you provided. This file is crucial for managing the project's dependencies and scripts.

If you want to skip the questionnaire and create a package.json file with default values, you can run npm init -y or npm init --yes, and npm will automatically generate a package.json file without prompting you for any details.

The package.json file serves as the heart of your Node.js project, making npm init an essential step in setting up a new project.





<h1>what is package.json file?</h1>

The package.json file is a fundamental part of any Node.js project or any project that uses npm (Node Package Manager) for managing packages. It's a JSON (JavaScript Object Notation) file that holds various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies, scripts, and versions. 

The package.json file is central to npm and Node.js ecosystems, serving as the blueprint for your project. It not only details how your project is structured and what it depends on but also allows you to share your project with others, manage versions, and much more efficiently.

<h2>Here are the key components and what they represent:</h2>

1. Project Information
- name: The name of your project.
- version: The current version of your project, following Semantic Versioning.
- description: A brief description of your project.
- keywords: An array of strings that help users discover your project on npm.
- homepage: The URL to the project homepage.
- license: The license type under which the project is released to the public.
- author: The name or organization behind the project and optionally contact information.
- contributors: An array of people who have contributed to the project.

2. Configuration Details
- main: The entry point file of your project, typically index.js, where the execution starts.
- repository: The repository hosting the project's source code.
- scripts: A set of commands or scripts that can be executed on the project. Common scripts include start, test, and build. For example, npm start or npm test.
- engines: Specifies which versions of Node.js (and sometimes npm) this project is compatible with.

3. Dependency Management
- dependencies: Lists the packages your project depends on to run. npm automatically installs these packages when someone installs your project.
- devDependencies: Lists the packages needed for development and testing, but not for running the project in production.
- peerDependencies: Lists the packages that are required by your project as a dependency but need to be installed separately by the consuming project.
- optionalDependencies: Lists packages that are optional to install. npm will attempt to install them, but if it fails, the installation process will still continue.

4. Miscellaneous
- private: If set to true, prevents the package from being accidentally published to npm.
- browserslist: Defines the target browsers for compatibility if you're working on a frontend project.





<h1>What is a difference between package and dependency?</h1>

The terms "package" and "dependency" are often used interchangeably in the context of software development, especially when discussing package managers like npm for Node.js. However, they refer to concepts that, while related, have distinct meanings.

<h2>Package</h2>
A package is a piece of software or a module that you can use in your application. It includes everything needed to add functionality to your application without writing it from scratch. This can include libraries, frameworks, utilities, or other types of reusable code. Packages are often developed to solve common problems or provide specific functionalities, making development more efficient and less error-prone. In the context of Node.js and npm, packages are distributed through the npm registry and can be installed into your projects using npm commands.

<h2>Dependency</h2>
A dependency refers to a package that a project needs in order to run or develop properly. Dependencies are specified in a project's package.json file in the case of Node.js applications. There are two main types of dependencies:
<h3>Runtime Dependencies (dependencies):</h3> These are the packages your application needs to function correctly. They are required for the application to run and perform its intended tasks.
<h3>Development Dependencies (devDependencies):</h3> These packages are necessary only for developing the application, such as testing frameworks, build tools, or compilers like Babel. They are not needed in the production environment where your application runs.

<h2>Key Differences</h2>
<h3>Usage:</h3> A package can be anything that adds functionality to your application, while a dependency is specifically a package that your application needs to operate or be developed.
<h3>Context:</h3> The term package is more general and can refer to any sort of reusable code distributed via npm or other package management systems. Dependency is more about the relationship between packages and your project.
<h3>package.json Role:</h3> In your package.json, dependencies are listed to inform npm what packages need to be installed for your application to work. A single package can be a dependency for many projects.





<h1>What is a bundler?</h1>

Bundlers in programming are tools that compile code, libraries, and various assets from a software project into a single or multiple files, optimizing them for distribution or deployment. Bundlers can transform, bundle, or package just about any resource or asset, including JavaScript, CSS, images, and more, into a format that's easier to use in a web environment.

<h2>Here are some key points about bundlers:</h2>

<h3>Module Bundling:</h3> The primary function of a bundler is to compile modules and libraries into a single file (or a few files). This reduces the number of HTTP requests needed to load a web page, significantly improving the site's performance.

<h3>Transpilation:</h3> Many bundlers come with the ability to transpile code from one form to another. This is particularly useful for converting next-generation JavaScript (ES6+, TypeScript) into a version of JavaScript that can be understood by most web browsers.

<h3>Minification and Optimization:</h3> Bundlers often minify code by removing unnecessary characters (like whitespace) without changing its functionality. They can also optimize assets, such as images and fonts, to reduce their file size.

<h3>Environment Variables and Feature Flags:</h3> They allow the inclusion of environment-specific variables or feature flags that can enable or disable certain features in the code, depending on the build environment (development, testing, production).

<h3>Hot Module Replacement (HMR):</h3> Some bundlers offer HMR, which allows developers to see their changes in real time without needing to refresh the page, significantly speeding up development.

<h3>Code Splitting:</h3> This feature enables dividing the code into various bundles which can then be loaded on demand or in parallel, improving the initial load time of a web application.

<h2>Popular Bundlers</h2>

- Webpack: One of the most popular bundlers, webpack is highly configurable and can handle not just JavaScript but also CSS, images, and more through the use of loaders and plugins.
- Parcel: Known for its zero-configuration approach, Parcel offers a simpler setup than webpack and supports a wide range of file types.
- Rollup: Focused more on JavaScript libraries, Rollup uses a different approach to bundling that produces smaller bundles. It's especially good for code that needs to be treeshaken.
- Browserify: One of the earliest bundlers, Browserify allows developers to use require('modules') in the browser by bundling up all the dependencies.
- Vite and Snowpack: These newer tools focus on serving source code over the browser during development for faster reloads and builds, leveraging modern web standards.





<h1>What is package-lock.json?</h1>

package-lock.json is a snapshot of exactly what was installed in your project at a specific time. It ensures that your project works the same way, no matter when or where you set it up, by using the same versions of every package and their dependencies as when you last confirmed everything worked together.

<h2>Analogy</h2>

Imagine you're building a model airplane, and you have an instruction sheet that tells you what parts you need and how to assemble them. In the world of JavaScript programming, your project is like the model airplane, and the instruction sheet is your package.json file, which lists all the components (libraries or packages) you need to build your project.

However, each component you use might also need other smaller components to work, just like some parts of the airplane might need screws or glue that aren't listed in the main instructions but are necessary to put everything together.

<h2>Here's where package-lock.json comes into play:</h2>

<h3>It's a detailed list:</h3> The package-lock.json file is like a detailed inventory of every single piece you used, including all the small bits like screws and glue. It doesn't just list the main parts; it also lists everything each part needs and exactly which versions of those were used.

<h3>Ensures consistency:</h3> Just as it would be problematic if you started building the model airplane and the manufacturer changed the size of a wing without telling you, in software, packages get updated, which might cause issues if your project isn't compatible with the new version. The package-lock.json makes sure that whenever you or anyone else sets up the project, all the parts used are exactly the same, preventing the "but it worked on my machine!" problem.

<h3>Saves time:</h3> If someone else wants to build the same model airplane, instead of going out and possibly getting parts that might not fit (because of changes or updates), they can look at your detailed list and get exactly the same parts you used. This way, they can start building right away without figuring out what's needed. In programming, this means when someone else (or even you, on a different computer) tries to set up the project, it installs quickly without needing to resolve which versions of each package should be used.

<h2>Here are the key purposes of the package-lock.json file:</h2>

<h3>Dependency Resolution:</h3> It locks the versions of installed packages and their dependencies. This ensures that every installation of the project dependencies will result in the same file structure in node_modules, across all environments. It records the exact version of each installed package which allows npm to reproduce the same environment through npm install.

<h3>Performance Improvements:</h3> By having a detailed account of the dependency tree, npm can skip repeated metadata resolutions for previously-installed packages. This results in faster installations.

<h3>Integrity Verification:</h3> The file includes integrity checksums for each listed package, which npm uses to verify the integrity of installed packages, ensuring that the package has not been tampered with or corrupted.

<h3>Conflict Resolution:</h3> It helps in team environments by ensuring that every team member is using exactly the same version of every package. This prevents "works on my machine" issues where code works in one environment but not in another due to different package versions.

<h3>Audit and Security:</h3> It can be used to audit the installed packages for security vulnerabilities and licensing issues since it contains detailed information about each package's version and dependencies.






<h1>What are transitive dependencies?</h1>
Transitive dependencies in the context of software development and package management are the dependencies of the dependencies within your project. To put it simply, if your project depends on Package A, and Package A depends on Package B, then Package B is a transitive dependency of your project.





<h1>.gitignore - which files to add</h1>
.gitignore includes files that we don't want to push on Git.

- We must upload on Git package.json and package-lock.json, because they maintain information of what dependencies are necessary for our code.
- We should add node_modules to .gitignore, because if there are package.json and package-lock.json, we can regenerate node_modules. We just need to use command: ```npm install``` and it will recreate node_modules.






<h1>Error with: npx parcel build index.html</h1>

- If app.js is your application's main JavaScript file and not an entry point for a Node.js module, you can remove the "main" field from your package.json if it's not necessary.

- If you are building a library or a package that will be used in a Node.js environment, and app.js is the correct entry point for that, then you should not change the "main" field to index.html. Instead, you should review your Parcel configuration and potentially use a Parcel-specific configuration file to handle web application builds separately from the Node.js entry point.

- If you are trying to specify an output file for Parcel, you should use Parcel's own options to define output files and directories, rather than the "main" field in package.json.





<h1>Older Browser Compatibility</h1>

To make sure, that our project is compatible to older versions of browsers, we need to take several steps:

- In package.json file, we need to add "browserslist" property, that will take an array of browsers as an argument ( ["last 2 Chrome version", "last 2 Firefox version"]) / "browserslist": ["last 2 version"]. This means that our code will definitely work in those versions of browsers and it might or might not work in rest of the browsers (so, it does not mean that it won't work in rest of the browsers).
- To check how many users have those versions of browsers: https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z





<h1> Parcel </h1>

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPS
- Tree Shaking - remove unused code
- Different dev and production bundles