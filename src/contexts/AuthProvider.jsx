import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("user@gamil.com");
  const [password, setPassword] = useState("123456");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const FAKE_USER = {
    username: "user",
    user: "user@gmail.com",
    password: "123456",
  };

  const handleLogin = (e, navigate) => {
    e.preventDefault();
    if (user === FAKE_USER.user && password === FAKE_USER.password) {
      setIsAuthenticated(true);
      alert("You're successfully logged in!");
      navigate("/search");
    } else {
      alert("Invalid email adress or password");
    }
  };

  const handleLogout = (e, navigate) => {
    e.preventDefault();
    setIsAuthenticated(false);
    alert("You're successfully logged out!");
    setUser("");
    setPassword("");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        password,
        setPassword,
        handleLogin,
        handleLogout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
