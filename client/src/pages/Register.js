import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import '../resources/authentication.css'; // Ensure this file includes the required styles
import axios from 'axios';
import Spinner from "../components/Spinner";

function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      setLoading(true);
      await axios.post('/api/users/register', values);
      message.success('Registration Successful');
      setLoading(false);
      navigate("/login");
    } catch (error) {
      message.error('Something went wrong');
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   if (localStorage.getItem("expensetracker-dev-user")) {
  //     navigate("/");
  //   }
  // }, [navigate]);

  return (
    <div className="quicken-login-container">
      {loading && <Spinner />}
      <div className="quicken-login-box">
        <h1 className="quicken-heading">
          <Link to="/" className="quicken-logo">ExTi</Link> / SIGNUP
        </h1>
        <p className="quicken-subtext">Create your account to get started.</p>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            className="form-item"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input className="quicken-login-box ant-input" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            className="form-item"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input type="email" className="quicken-login-box ant-input" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            className="form-item"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password className="quicken-login-box ant-input" />
          </Form.Item>

          <Form.Item>
            <button className="quicken-login-button" type="submit">REGISTER</button>
          </Form.Item>

          <div className="quicken-divider">
            <span>Already have an account?</span>
          </div>
          <Link to="/login" className="quicken-register-link">Sign in here</Link>
        </Form>
      </div>
    </div>
  );
}

export default Register;
