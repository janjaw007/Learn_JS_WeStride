function buttonElement() {
  const btnProps = {
    onClick: () => {
      console.log("click me already !!");
    },
  };

  return React.createElement("button", btnProps, ["Click me!"]);
}

function app() {
  return React.createElement("div", {}, [
    "Welcome To React With API",
    "My name is Jao",
    buttonElement(),
  ]);
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(app());
