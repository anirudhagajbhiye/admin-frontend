import React, { useEffect, useState } from "react";
import styles from "./user-list.module.css";
import { Link } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch("http://localhost:3001/users");
    const responseJSON = await response.json();

    console.log(responseJSON);
    setUsers(responseJSON);
  };
  return (
    <>
      <h1>I am user list</h1>
      <Link to="/new-user">NewUser</Link>
      <div style={{ overflowX: "auto" }}>
        <table>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Created</th>
            <th>Modified</th>
            <th>Edit</th>
          </tr>

          {users.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.email}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.created}</td>
                <td>{user.modified}</td>
                <td>
                  <Link to={`/edit-user?id=${user.id}`}>Edit-User</Link>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default UserList;
