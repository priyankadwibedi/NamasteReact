import React from "react";
import ReactDOM from "react-dom/client";

// const heading= React.createElement
// ("div",{"id":"parent"},[
//     React.createElement("div",{id:"child1"},[
//         React.createElement("h1",{},"This is H1 tag"),
//         React.createElement("h2",{},"This is H2 tag"),
//     ]),
//     React.createElement("div",{id:"child2"},[
//         React.createElement("h1",{},"This is H1 tag from another div"),
//         React.createElement("h2",{},"This is H2 tag from another div"),
//     ]),
// ]);

const heading= (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX
    </h1>
);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
