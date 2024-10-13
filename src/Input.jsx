import { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import for routing
import { DataContext } from './main';

const Input = () => {
  const { dispatch } = useContext(DataContext);
  const location = useLocation(); // Use location to access passed state
  const navigate = useNavigate(); // To navigate after saving

  // Initialize form state
  const [data, setData] = useState({ name: "", age: "", email: "" });
  const [editIndex, setEditIndex] = useState(null); // Track index for editing

  // If location.state is available, pre-fill the form for editing
  useEffect(() => {
    if (location.state) {
      setData(location.state.user);
      setEditIndex(location.state.index);
    }
  }, [location]);

  // Handle input change
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Handle form submission for adding or editing a user
  const handleSave = (e) => {
    e.preventDefault();
    if (data.name && data.age && data.email) {
      if (editIndex !== null) {
        // Editing an existing user
        dispatch({ type: 'EDIT_USER', payload: { index: editIndex, user: data } });
      } else {
        // Adding a new user
        dispatch({ type: 'ADD_USER', payload: data });
      }
      // Clear the form and navigate back to Show component
      setData({ name: "", age: "", email: "" });
      navigate('/show'); // Navigate back to show after saving
    }
  };

  return (
    <>
      <h2 className="text-center p-5">{editIndex !== null ? "Edit User" : "Add New User"}</h2>
      <form className="me-auto ms-auto bg-warning w-50 rounded-4 p-4" onSubmit={handleSave}>
        <div className="mb-3">
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" value={data.name} name="name" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age:</label>
          <input type="number" className="form-control" value={data.age} name="age" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" value={data.email} name="email" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-info">{editIndex !== null ? "Update User" : "Save "}</button>
      </form>
    </>
  );
};

export default Input;
