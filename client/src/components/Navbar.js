import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Nav>
      <Logo>ExTi</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact Me</NavLink>
      </NavLinks>
      <Buttons>
        <Button to="/login" color="#9ac068">Login</Button>
        <Button to="/register" color="#9ac068">Signup</Button>
      </Buttons>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #57187e; /* Purple background */
  color: white;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
`;

const Logo = styled.div`
  font-size: 1.9rem;
  font-weight: bold;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 16px;
  &:hover {
    border-bottom: 2px solid white;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled(Link)`

  padding: 0.5rem 1rem;
  border: 2px solid #ffffff; /* Green border */
  border-radius: 20px;
  background-color: ${props => props.color};
  color: white;
  cursor: pointer;
  font-size: 0.9rem;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #4b0082; /* Darker green for hover effect */
  }
`;
