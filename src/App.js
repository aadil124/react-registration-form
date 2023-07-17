import RegistrationForm from "./components/RegistrationForm";

function App() {
  return <RegistrationForm />;
}

export default App;


//    <h1>Registration Form</h1>
//    <form onSubmit={submitHandle}>
//      <label>
//        Name:
//        <input
//          type="text"
//          value={inputValue.name}
//          name="name"
//          onChange={onChangeHandle}
//        />
//      </label>
//      <br />
//      <br />
//      <label>
//        Age:
//        <input
//          type="number"
//          value={inputValue.age}
//          name="age"
//          onChange={onChangeHandle}
//        />
//      </label>
//      <br />
//      <br />
//      <label>
//        Email:
//        <input
//          type="email"
//          value={inputValue.email}
//          name="email"
//          onChange={onChangeHandle}
//        />
//      </label>
//      <br />
//      <br />
//      <label>
//        Password:
//        <input
//          type="password"
//          value={inputValue.password}
//          name="password"
//          onChange={onChangeHandle}
//        />
//      </label>
//      <br />
//      <br />
//      <label>
//        Confirm Password:
//        <input
//          type="password"
//          value={inputValue.cpassword}
//          name="cpassword"
//          onChange={onChangeHandle}
//        />
//      </label>
//      <br />
//      <br />
//      <button type="submit">Submit</button>
//    </form>
//  </div>;