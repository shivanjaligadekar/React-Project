import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
export default function Read() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios.get(`http://localhost:9595/user/all`)
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      }).catch((error) => {
        console.log(error);
      })
  }

  const handleRegister = () => {
    // console.log(767);
    navigate('/create');
  }

  const handleLocalStorage = (id,name,userName,pass) => {
    // console.log(id,name,userName,pass);
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("userName", userName);
    localStorage.setItem("pass", pass);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="container mt-3 mb-3">
        <button className='btn btn-info m-2' onClick={handleRegister}>Register</button>
        <h3>Users</h3>
        <div className="row mt-3 mb-3">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Password</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user) => {
                  return (
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.userName}</td>
                      <td>{user.password}</td>
                      <td>
                        <Link to="/update">
                          <button
                            className="btn btn-success"
                            onClick={() =>
                              handleLocalStorage(
                                user.id,
                                user.name,
                                user.userName,
                                user.password
                              )
                            }
                          >
                            Update
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

