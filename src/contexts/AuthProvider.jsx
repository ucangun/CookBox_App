import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("user") || "user@gmail.com"
  );
  const [password, setPassword] = useState(
    localStorage.getItem("password") || "123456"
  );
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("isAuthenticated")
  );

  const FAKE_USER = {
    username: "user",
    user: "user@gmail.com",
    password: "123456",
  };

  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem("user", user);
      localStorage.setItem("password", password);
      localStorage.setItem("isAuthenticated", true);
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("password");
      localStorage.removeItem("isAuthenticated");
    }
  }, [isAuthenticated, user, password]);

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
