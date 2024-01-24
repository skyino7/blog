import './App.css';
// import Header from './header';
// import Post from './post';
import './App.css';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
// import { UserContextProvider } from './UserContext';

function App() {
  return (

    // <UserContextProvider>
    <Router>
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route index element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  </Router>
    // {/* </UserContextProvider> */}

  );
}

export default App;