import './App.css';
import Layout from './Layout';
// import Header from './header';
// import Post from './post';
import HomePage from './pages/HomePage';
import {Route, Routes} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (

    <Routes>

      <Route path="/" element={<Layout />}>

        <Route index element={<HomePage />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

      </Route>

    </Routes>

  );
}

export default App;