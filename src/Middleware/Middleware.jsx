import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const student = JSON.parse(localStorage.getItem("student")); // Check if student is logged in

    return student ? children : <Navigate to="/login" />; // Redirect if not logged in
};

export default ProtectedRoute;
