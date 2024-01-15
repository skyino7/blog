import './App.css';
import Header from './header';
import Post from './post';
import {Route, Routes} from "react-router-dom";

function App() {
  return (

    <Routes>

      <Route index element={
        <main>
          <Header />
          <Post />
          <Post />
          <Post />
        </main>
      } />

      <Route path="/login" element={
        <h1>Login</h1>
      } />

    </Routes>

  );
}

export default App;