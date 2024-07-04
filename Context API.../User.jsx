import React, { useContext } from "react";
import { UserContext } from "../context/Context"; // Make sure the path is correct

function User() {
  const users = useContext(UserContext);
  console.log(users);

  return (
    <div className="text-yellow-50">
      <h3 className="mt-10 bg-blue-200 w-1/2">User Information</h3>
      {users.map((user) => (
        <div key={user.id}>
          <p>User Name: {user.name}</p>
        </div>
      ))}
    </div>
  );
}

export default User;
