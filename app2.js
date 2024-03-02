import React from 'react'; //it takes react from node_modules
import ReactDOM from 'react-dom/client';

//React.createElement => ReactElement - JS Object => HTML Element(render)

//JSX (transpiled before it reaches the JS engine)- parcel - babel
//JSX => babel transpile => React.createElement => ReactElement - JS Object => HTML Element(render)

const jsxheading = <h1 id="heading">Hello World from JSX</h1>;
console.log(jsxheading);


//React functional components
const HeadingComponent = () => {
    return <h1 id="heading">Hello World from Functional Component</h1>
};                        


const HeadingComponent2 = () => (
    <div>
        <HeadingComponent /> //rendering component inside component
        <HeadingComponent></HeadingComponent> //one more way
        {HeadingComponent()}
        {jsxheading} //rendering element inside component
      <h1 id="heading">Hello World from Functional Component2</h1>
    </div>
  );


const root = ReactDOM.createRoot(document.getElementById("root1"));

root.render(jsxheading);
root.render(<HeadingComponent2 />);