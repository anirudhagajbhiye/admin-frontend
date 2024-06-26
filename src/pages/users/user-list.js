import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

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
      <Table striped bordered hover variant="dark" responsive>
        <tr>
          <thead>
            <th>ID</th>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Created</th>
            <th>Modified</th>
            <th>Edit</th>
            <th>Delete</th>
          </thead>

          <tbody>
            {users &&
              users.map((user) => {
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
                    <td>
                      <Button
                        variant="primary"
                        onClick={async ({}) => {
                          console.log(user.id);

                          const requestOptions = {
                            method: "DELETE",
                            headers: { "Content-Type": "application/json" },
                          };

                          const response = await fetch(
                            `http://localhost:3001/users/${user.id}`,
                            requestOptions
                          );

                          const responseJSON = await response.json();

                          console.log(responseJSON);
                          loadData();
                        }}
                      >
                        {" "}
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </tr>
      </Table>
    </>
  );
}

export default UserList;
