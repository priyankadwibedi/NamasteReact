/**
 * 
 * <div id="parent">
 *    <div id="child">
 *       <h1>/h1>
 *     </div>
 * </div>
 * 
 *  this is nested form in REACT
 */


const parent = React.createElement(
"div",
 {id:"parent"},
 React.createElement(
    "div",
    {id:"child"},
    React.createElement("h1",{},"This is an example of nested div")
 )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
