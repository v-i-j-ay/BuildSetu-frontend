import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Login from "../pages/Login";

const AuthPage = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (user) return <Navigate to="/profile" replace />;

  return <Login />;
};

export default AuthPage;