import React, { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
export default function Create() {
  const navigate = useNavigate();
  let name = useRef();
  let userName = useRef();
  let password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name.current.value);
    // console.log(userName.current.value);
    // console.log(password.current.value);
    axios.post(`http://localhost:9595/user/add`, {
      name: name.current.value,
      userName: userName.current.value,
      password: password.current.value
    }).then((response) => {
      console.log(response.data);
      alert("User added successfully!!")
      navigate('/read');
    }).catch((error) => { 
      console.log(error.message);
    });
  }

  return (
    <>
      <div className="container mt-3 mb-3">
        <form className="myForm p-3">
          <div className="text-center">
            <h2>User Registration</h2>
          </div>
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputName"
              ref={name}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Username</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputUserName"
              ref={userName}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword"
              ref={password}
            />
          </div>
          <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
