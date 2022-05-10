// You must add all "things" you use in your effect function if those "things" could change because your component (or some parent component) re-rendered. That's why variables or state defined in component functions, props or functions defined in component functions have to be added as dependencies!

// Here's a made-up dummy example to further clarify the above-mentioned scenarios:

// import { useEffect, useState } from 'react';
 
// let myTimer;
 
// const MyComponent = (props) => {
//   const [timerIsActive, setTimerIsActive] = useState(false);
 
//   const { timerDuration } = props; // using destructuring to pull out specific props values
 
//   useEffect(() => {
//     if (!timerIsActive) {
//       setTimerIsActive(true);
//       myTimer = setTimeout(() => {
//         setTimerIsActive(false);
//       }, timerDuration);
//     }
//   }, [timerIsActive, timerDuration]);
// };

// In this example:

// timerIsActive is added as a dependency because it's component state that may change when the component changes (e.g. because the state was updated)

// timerDuration is added as a dependency because it's a prop value of that component - so it may change if a parent component changes that value (causing this MyComponent component to re-render as well)

// setTimerIsActive is NOT added as a dependency because it's that exception: State updating functions could be added but don't have to be added since React guarantees that the functions themselves never change

// myTimer is NOT added as a dependency because it's not a component-internal variable (i.e. not some state or a prop value) - it's defined outside of the component and changing it (no matter where) wouldn't cause the component to be re-evaluated

// setTimeout is NOT added as a dependency because it's a built-in API (built-into the browser) - it's independent from React and your components, it doesn't change
