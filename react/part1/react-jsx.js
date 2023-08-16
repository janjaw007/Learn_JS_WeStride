// function Button() {
//   const handleOnclick = () => {
//     console.log("Click already !!");
//   };
//   return <Button onClick={() => handleOnclick()}>click me!</Button>;
// }

function App() {
  return (
    <div>
      Welcome To React With JSX
      <Button />
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(App());
