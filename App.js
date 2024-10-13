import React from "react";
import ReactDOM from "react-dom";

/**
 * Header
 *   -Logo
 *   -Nav Items
 * Body
 *   -Search Bar
 *   -Resturant Container
 *        -Card
 *      -Image
 *      -Title
 *      -Cuisines
 *      - Star
 * Footer
 *    -Copyright
 *    -Links
 *    -Contact
 * 
 * 
 * 
 */
const jsxheading=<h1>This is JSX</h1>; 

//Functional level components

const Title=()=>(
    <h1 className="heading" tabIndex="5">
        {jsxheading}
        Namaste React using JSX;
    </h1>
);

const HeadingComponent= ()=>(
<div id="container">
    {jsxheading}
      <Title/>
      <h1 className="heading">Namaste React Functional components</h1>
    </div>
);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
