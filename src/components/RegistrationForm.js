import React, { useState } from "react";
import "../App.css";
import ShowData from "./ShowData";

const RegistrationForm = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [visible, setVisible] = useState(false);
  const [store, setStore] = useState([]);
  // console.log(store);

  const onChangeHandle = (event) => {
    setInputValue((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandle = (e) => {
    e.preventDefault();

    if (inputValue.password === inputValue.cpassword) {
      // console.log(inputValue);
      //   setInputValue((prevData) => ({
      //     ...prevData,
      //     inputValue,
      //   }));
    } else {
      alert("Password does not match");
    }
  };

  const btnClickHandler = () => {
    console.log("Clicked");
    setVisible(true);
    // console.log(inputValue);

    // console.log([...store, inputValue]);

    setStore([...store, inputValue]);
    setInputValue({
      name: "",
      age: "",
      email: "",
      password: "",
      cpassword: "",
    });
  };


  //Delete functionality

  const handleDelete = (index)=>{
    // console.log("Deleted",index)
    const deletedData = store.filter((item,id)=>{
      // console.log("item",item,"number",num)
      return id!==index 
    })
    console.log(deletedData)
    setStore(deletedData)
  }

  //Edit Functionality 

  const handleEdit = (index)=>{
   console.log("Edit",index)
   
   const updatedData = store.map((item,id)=>{
    console.log("item",item,"index==",index)
    setInputValue((prevData)=>({
      [item.name]:item.name,
      // [inputValue.age]:item.age,
      // [inputValue.email]:item.email,
      // [inputValue.password]:item.password,
      // [inputValue.cpassword]:item.cpassword,
    }))

    console.log(item.name)
   })

  }
  return (
    <>
      <body>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-9 mx-auto">
              <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
                {/* <div className="card-img-left d-none d-md-flex"></div> */}
                <div className="card-body p-4 p-sm-5">
                  <h5 className="card-title text-center mb-5 fw-light fs-5">
                    Register
                  </h5>
                  <form onSubmit={submitHandle}>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInputUsername"
                        placeholder="myusername"
                        required
                        name="name"
                        value={inputValue.name}
                        onChange={onChangeHandle}
                        autoComplete="off"
                      />
                      <label for="floatingInputUsername">Username</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInputUserAge"
                        placeholder="myage"
                        required
                        name="age"
                        value={inputValue.age}
                        onChange={onChangeHandle}
                      />
                      <label for="floatingInputUserAge">Age</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInputEmail"
                        placeholder="name@example.com"
                        name="email"
                        value={inputValue.email}
                        onChange={onChangeHandle}
                      />
                      <label for="floatingInputEmail">Email address</label>
                    </div>

                    <hr />

                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        name="password"
                        value={inputValue.password}
                        onChange={onChangeHandle}
                      />
                      <label for="floatingPassword">Password</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPasswordConfirm"
                        placeholder="Confirm Password"
                        name="cpassword"
                        value={inputValue.cpassword}
                        onChange={onChangeHandle}
                      />
                      <label for="floatingPasswordConfirm">
                        Confirm Password
                      </label>
                    </div>

                    <div className="d-grid mb-2">
                      <button
                        className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                        type="submit"
                        onClick={btnClickHandler}
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <h1>Show Details</h1>

          <div>
            {visible ? <ShowData inputValue={inputValue} store={store} handleDelete={handleDelete} handleEdit={handleEdit}/> : null}
          </div>
        </div>
      </body>
    </>
  );
};

export default RegistrationForm;
