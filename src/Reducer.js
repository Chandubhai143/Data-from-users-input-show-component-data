export const is = {
    user: [
      { name: 'chandan', age: 26, email: 'chandan2000@gmail.com' },
      { name: 'shiwam', age: 5, email: 'shiwam2024@gmail.com' },
      { name: 'jay', age: 30, email: 'jay1996@gmail.com' },
      { name: 'munshi', age: 27, email: 'munshi1998@gmail.com' },
      { name: 'rupesh', age: 24, email: 'rupesh2001@gmail.com' },
    ],
  };
  
  // Corrected reducer function
  export const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_USER':
        return {
          ...state,
          user: [...state.user, action.payload],
        };
      case 'EDIT_USER':
        const updatedUsers = [...state.user];
        updatedUsers[action.payload.index] = action.payload.user; // Update the user at the specified index
        return {
          ...state,
          user: updatedUsers,
        };
      case 'DELETE_USER':
        return {
          ...state,
          user: action.payload, // Set the new user list from the payload
        };
      case 'reset':
        return is; // Reset to the initial state
      default:
        return state; // Return the current state if no action matches
    }
  };
  