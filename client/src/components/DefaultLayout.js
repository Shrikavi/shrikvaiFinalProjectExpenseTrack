import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../resources/default-layout.css';
import { Button } from 'antd';

function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem('expensetracker-dev-user'));
  const navigate = useNavigate();

  return (
    <div className='layout d-flex'>
      <div className="sidebar">
        <div className="logo">
          <h1>
            <Link to="/" className="text-decoration-none text-dark">
             <h2>ExTi</h2> 
            </Link>
          </h1>
        </div>
       
        <div className="user-info">
         
          <h1 className="username">
            <Link to="/account" className="text-decoration-none text-dark">
            
              <h2>Hello {user.name}👋<br></br><br></br></h2>
            </Link>
          </h1>
        </div>
        
        <div className="logout-button">
          <Button
            type="primary"
            danger
            onClick={() => {
              localStorage.removeItem("expensetracker-dev-user");
              navigate("/");
            }}
          >
            Logout
          </Button>
        </div>
      </div>
      <div className='content flex-grow-1 scroll scroll4'>
        {props.children}
      </div>
     
    </div>
  );
}

export default DefaultLayout;
