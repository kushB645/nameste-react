

const parent= React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"},
        [
            React.createElement("h1",{},"it's just a heading h1"),
            React.createElement("h2",{},"it's just a heading h2")
        ]
    ),
    React.createElement("div",{id:"child2"},
        [
            React.createElement("h3",{},"it's just a heading h3"),
            React.createElement("h4",{},"it's just a heading h4")
        ]
    )]
)


// const heading = React.createElement(
//     "h1", {
//         id:"haeding",xyz:"hello"

// }, "hello world");

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);