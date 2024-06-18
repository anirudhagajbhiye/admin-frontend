import React, { useEffect, useState } from "react";
import styles from "./user-list.module.css";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch("http://localhost:3001/users");
    const responseJSON = await response.json();

    console.log(responseJSON);
    setUsers(responseJSON)
  };
  return (
    <>
      <h1>I am user list</h1>
      <table>
        <tr>
          <th>ID</th>
          <th>Password</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Created</th>
          <th>Modified</th>
        </tr>

        {users.map((user) =>{
          return (
            <tr>
              <td>{user.CustomerID}</td>
              <td>{user.CustomerName}</td>
              <td>{user.ContactName}</td>
              <td>{user.Address}</td>
              <td>{user.City}</td>
              <td>{user.PostalCode}</td>
              <td>{user.Country}</td>
            </tr>
          )
        })}
      </table>
    </>
  );
}

export default UserList;
