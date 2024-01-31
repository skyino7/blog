import './App.css';
// import Header from './header';
// import Post from './post';
import './App.css';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import { UserContextProvider } from './UserContext';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';

function App() {
  return (

    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreatePost  />} />
          <Route path="/post/:id" element={<PostPage  />} />
        </Route>
      </Routes>
    </UserContextProvider>

  );
}

export default App;