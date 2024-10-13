import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createContext, useReducer } from 'react';
import { is, reducer } from './Reducer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export const DataContext = createContext();

const Start = () => {
  const [state, dispatch] = useReducer(reducer, is);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      <App />
    </DataContext.Provider>
  );
};

// Create the root and render the Start component inside it
const root = createRoot(document.getElementById('root'));
root.render(<Start />);
