import React, { useEffect, useState } from "react";

const NewUser = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    console.log("Username = " + username);
    console.log("Password = " + password);
    console.log("Email = " + email);
    console.log("FirstName = " + firstName);
    console.log("LastName = " + lastName);
  }, [username, password, email, firstName, lastName]);

  return (
    <>
      <h1>I am new user</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          console.log("Username = " + username);
          console.log("Password = " + password);
          console.log("Email = " + email);
          console.log("FirstName = " + firstName);
          console.log("LastName = " + lastName);

          const data = {
            username: username,
            password: password,
            email: email,
            first_name: firstName,
            last_name: lastName,
          };

          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          };

          const response = await fetch(
            "http://localhost:3001/users",
            requestOptions
          );

          const responseJSON = await response.json();
          console.log("data entered", responseJSON);
          window.location.replace("http://localhost:3000/user-list");
        }}
      >
        <label for="username">Username: </label>
        <input
          name="username"
          type="text"
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
        <br />
        <label for="password">Password: </label>
        <input
          name="password"
          type="text"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <br />
        <label for="email">Email: </label>
        <input
          name="email"
          type="text"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <br />
        <label for="first_name">First Name: </label>
        <input
          name="first_name"
          type="text"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <br />
        <label for="last_name">Last Name: </label>
        <input
          name="last_name"
          type="text"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default NewUser;
