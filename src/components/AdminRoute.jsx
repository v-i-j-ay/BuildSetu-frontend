import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function AdminRoute({ children }) {

  const { user, loading } = useAuth();

  // wait until firebase checks login
  if (loading) {
    return <div className="text-center mt-10">Checking authentication...</div>;
  }

  // not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // not admin
  if (user.email !== "buildsetu@gmail.com") {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default AdminRoute;