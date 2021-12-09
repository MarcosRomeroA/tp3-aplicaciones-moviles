import * as React from "react";
import { AuthContext } from "./context/AuthContext";
import { Navigator } from "./navigation/Navigator";

const { Provider } = AuthContext;

export default function App() {

  const [user, setUser] = React.useState([]);
  const [auth, setAuth] = React.useState([]);

  return (    
      <Provider value={{ user, setUser, auth, setAuth }}>
        <Navigator />
      </Provider>    
  );
}