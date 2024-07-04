import { createContext, useState } from "react";

export const UserContext = createContext();

const Context = (props) => {
  const [user, setUser] = useState([
    { name: "John", id: "1" },
    { name: "Any", id: "2" }, // Corrected the duplicate ID
  ]);
  console.log(props);
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export default Context;
