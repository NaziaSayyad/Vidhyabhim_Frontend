import React, { useState } from "react";
import "./Auth.css"; // Import CSS file

const StudentAuth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            // Login logic
            const storedUser = JSON.parse(localStorage.getItem("student"));
            const toogle  =  localStorage.setItem("toogle", JSON.stringify(formData));
           
            if (storedUser && storedUser.username === formData.username && storedUser.password === formData.password) {
                alert("Login successful!");
            } else {
                alert("Invalid credentials!");
            }
        } else {
            // Signup logic
            localStorage.setItem("student", JSON.stringify(formData));
            alert("Account created successfully! You can now log in.");
            setIsLogin(true);
        }
    };

    return (
        <div className="auth-container">
            <h2>{isLogin ? "Student Login" : "Student Signup"}</h2>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} required />

                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />

                <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
            </form>
            <p onClick={() => setIsLogin(!isLogin)} className="toggle-text">
                {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
            </p>
        </div>
    );
};

export default StudentAuth;
