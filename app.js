const heading = React.createElement(
  "h1",
  {
    id: "heading1",
  },
  "Hello world from React."
);

const heading2 = React.createElement("h2", {}, "I'm h2 tag");

const nested = React.createElement("div", { id: "div" }, [heading, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nested);
