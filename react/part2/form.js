function ReactBasicForm({ onSubmit }) {
  return (
    <form id="" form onSubmit={onSubmit}>
      <div className="form__field">
        <label>FirstName :</label>
        <input type="text" name="firstName" />
      </div>
      <div className="form__field">
        <label>LastName :</label>
        <input type="text" name="lastName" />
      </div>
      <div className="form__submit">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

function App() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    let formValues = {};

    for (const [name, value] of formData) {
      formValues = {
        ...formValues,
        [name]: value,
      };
    }
    console.log(formValues);
    const fullname = `${formValues.firstName} ${formValues.lastName}`;

    alert(`Hello mr. ${fullname}`);
  };

  return (
    <div>
      <ReactBasicForm onSubmit={handleOnSubmit} />
    </div>
  );
}

//Create Root Element
const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);

root.render(<App />);
