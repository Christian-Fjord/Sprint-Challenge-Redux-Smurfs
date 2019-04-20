Q: Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

A : filter, map

.map() is used to make a new array with new properties from a base array

Q: Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

A: 
  actions are blocks of info sent from the app to a store

  reducers specify how the apps state is changed in response to the actions

  store holds the state tree of an app. it is used as the primary source of data for the app


Q: What is the difference between Application state and Component state? When would be a good time to use one over the other?

A: 
  component state is locally stored within a component and not able to be accessed from other components uless it is passed as props to the sub component
  
  app state is able to be accessed by any components that are connected to the store

  you wouldn't use app state because:
  it can be accessed byt any component which can lead to issues of security
  as well as the fact that state is immutable in redux which means every time a new array is pulled, it will make a new one, having an excessive use of memory

Q: What is middleware?

A: a tool used for logging, talking to an asynchronous APi, routing, and crash reporting

Q: Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

A: It allows for you to write action creators that will return a function rather than an action

Q: Which `react-redux` method links up our `components` with our `redux store`?

A: .connect()
