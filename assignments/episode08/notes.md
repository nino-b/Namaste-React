# State variable - behind the scenes

Behind the scenes, React creates one big state variable that holds all those multiple state variables, that we create in functional component.

In class component, there exists only one state object (```this.state = {}```) that holds multiple state variables.

- Never update state variables directly in class components! Instead, use ```this.setState``` method. ```this.setState``` takes an object as an argument, which contains updated value of the state variable(s). If we want to update only a portion of large state object, we can pass only specific updated values of state variables, React will update only them and won't change anything else.