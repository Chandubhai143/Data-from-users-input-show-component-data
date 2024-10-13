import { DataContext } from './main';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import React from 'react';

const Show = () => {
  const { state, dispatch } = useContext(DataContext);
  const navigate = useNavigate(); // Set up navigation

  // Handle deletion of a user
  const handleDelete = (index) => {
    const filteredUsers = state.user.filter((_, i) => i !== index);
    dispatch({ type: 'DELETE_USER', payload: filteredUsers });
  };

  // Handle edit action and navigate to the Input component
  const handleEdit = (index) => {
    const userToEdit = state.user[index];
    navigate('/input', { state: { user: userToEdit, index } }); // Pass the user and index to Input component
  };

  return (
    <>
      <div className="container mt-5 my-4">
        <div className="row">
          {state.user && state.user.length > 0 ? (
            state.user.map((user, index) => (
              <div className="col-md-4 col-sm-6 mb-4" key={index}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">
                      <strong>Age:</strong> {user.age} <br />
                      <strong>Email:</strong> {user.email}
                    </p>
                    <button 
                      className="btn btn-primary me-2" 
                      onClick={() => handleEdit(index)}
                    >
                      Edit User
                    </button>
                    <button 
                      className="btn btn-danger" 
                      onClick={() => handleDelete(index)}
                    >
                      Delete User
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No user data available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Show;
