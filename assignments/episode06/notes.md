# Why is state variable necessary? Can we use regular JS variables instead?

When a <b>State Variable</b> is updated, it calls the component once again with new input (rendering it again). We declare a State Variable with ```const```. The reason how the State Variable gets a new value is that it gets declared again (with a new value), when the component is called again.

<b>When we change a local state variable, React re-renders the whole component and React triggers Reconcilliation cycle. And it updates only the difference between old and new virtual DOMs.</b>






# CORS problem solved

`https://corsproxy.io/?`

To avoid issues with CORS, just paste `https://corsproxy.io/?` before an api link. For Example:

`https://corsproxy.io/?https://myAPILink.com`