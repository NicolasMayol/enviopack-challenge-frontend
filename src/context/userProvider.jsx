import { createContext, useState } from "react";

const defaultValue = {}
const UserProvider = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(defaultValue);

  return (
    <UserProvider.Provider value={{ user, setUser }}>
      {children}
    </UserProvider.Provider>
  );
};

export default UserProvider;