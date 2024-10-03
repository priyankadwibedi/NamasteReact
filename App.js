/**
 * <div id="parent">
 *    <div id="child1">
 *        <h1>This is H1 tag</h1>
 *        <h2>This is H2 tag</h2>
 *    </div>
 *    <div id="child2">
 *        <h1>This is H1 tag</h1>
 *        <h2>This is H2 tag</h2>
 *    </div>
 * </div>
 *
 */





const heading= React.createElement
("div",{"id":"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"This is H1 tag"),
        React.createElement("h2",{},"This is H2 tag"),
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"This is H1 tag from another div"),
        React.createElement("h2",{},"This is H2 tag from another div"),
    ]),
]);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
