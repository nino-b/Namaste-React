# When and why do we need lazy()?

Why Use lazy():
- Reduced Initial Load Time.
- Efficient Resource Utilization.
- mproved User Experience.

When to Use lazy():
- Large Components.
- Routes.
- For Performance Optimization.



# What is suspense?

```Suspense``` is a component that comes from React library. It managese the waiting experience for certain parts of the app. It provides a fallback content that will be displayed while the content is loading. It usually is used with lazy loaded components.






# Why we got this error : A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?

The error occured  when a component was triggered to update in a way that suspends (e.g., waiting on data that isn't yet available from a lazy load or data fetch) during the processing of synchronous events like clicks or keypresses.

We can wrap our component into the ```<Suspense/>```.

```element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>``` - ```fallback={<h1>Loading...</h1>}``` a fallback UI.





# Advantages and disadvantages of using this code splitting pattern?

Advantages:
- Improved Initial Load Time: By splitting your bundle into smaller chunks and only loading the necessary parts for the initial render, you reduce the amount of code and resources tha
- Reduced Memory Usage: Smaller chunks mean less memory is used at any given time.t need to be downloaded when a user first visits your app. 
- Users only download the parts of the application they need when they need them.
- Smooth User Experience.
- Incremental Updates: With code splitting, when parts of your app are updated, users only need to download the updated chunks rather than the entire bundle. This can make subsequent app updates faster and less disruptive.

Disadvantages:
- Complexity in Setup and Maintenance.
- Increased Number of HTTP Requests. Although HTTP/2 mitigates this problem somewhat by allowing multiple files to be loaded in parallel over a single connection, it can still be a concern, especially if the chunks are not optimally sized.
- Flashing of Loading States: Using Suspense with lazy components can lead to frequent displays of fallback loading content, particularly if the network is slow or the components are very large. 






# When do we and why do we need suspense?

Why Use Suspense
- Improved User Experience: Seamless Integration of Asynchronous Data, Consolidated Loading States.
- Performance Optimization: Efficient Loading, Progressive Rendering.

When to Use Suspense:
- Lazy Loading Components.
- Data Fetching.
- Resource Management.