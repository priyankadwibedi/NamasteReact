import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const jsxHeading = (
    <h1 className="heading" tabIndex="5">
        This is learning React with JSX
    </h1>
);

const elem = <span>This is React Element</span>

//Title Component

const Title = () =>(
    <div>
    {elem}
 <img src="https://cdn.vectorstock.com/i/750p/05/72/smiling-superhero-bear-cub-vector-34390572.avif"/>;
 </div>
);

//Heading Functional Component
const Heading = () => (
    <div id="container">
    {jsxHeading}
    <Title/>
    <h1> This is an example of functional componennt</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);
