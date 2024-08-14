import React, { useState } from "react";
import { Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import '../resources/Contact.css';


function Contact() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    setLoading(true);

    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
      message.success("Message Sent");
      navigate("/dashboard"); // Redirect to dashboard
    }, 2000); // Simulated delay
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <h2 className="contact-heading">Contact Us</h2>
        <Form layout="vertical" className="contact-form" onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            className="form-item"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input className="contact-input" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            className="form-item"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input type="email" className="contact-input" />
          </Form.Item>

          <Form.Item
            label="Message"
            name="message"
            className="form-item"
            rules={[{ required: true, message: 'Please input your message!' }]}
          >
            <Input.TextArea className="contact-input" />
          </Form.Item>

          <Form.Item>
            <button className="contact-button" type="submit">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
