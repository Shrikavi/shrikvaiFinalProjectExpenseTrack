import React, { useEffect, useState } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import '../resources/authentication.css'; // Ensure this file includes the required styles
import axios from 'axios';
import Spinner from "../components/Spinner";

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post('/api/users/login', values);
      localStorage.setItem(
        "expensetracker-dev-user",
        JSON.stringify({ ...response.data, password: "" })
      );
      setLoading(false);
      message.success("Login successful");
      navigate("/dashboard");
    } catch (error) {
      setLoading(false);
      message.error("Login failed");
    }
  };

  // useEffect(() => {
  //   if (localStorage.getItem("expensetracker-dev-user")) {
  //     navigate("/dashboard");
  //   }
  // }, [navigate]);

  return (
    <div className="quicken-login-container">
      {loading && <Spinner />}
      <div className="quicken-login-box">
        <div className="quicken-logo">ExTi</div>
        <h2 className="quicken-heading">Sign in</h2>
        <p className="quicken-subtext">Sign in to your ExTi account to access all features.</p>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please enter your email address!" }]}
          >
            <Input placeholder="Email Address" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input type="password" placeholder="Password" />
          </Form.Item>
          <button className="quicken-login-button" type="submit">
            Continue
          </button>
          
          <div className="quicken-divider">New to ExTi?</div>
          <Link to="/register" className="quicken-register-link">
            Create account
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Login;
