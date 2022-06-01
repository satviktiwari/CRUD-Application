import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/navbaar';
import PostForm from './components/postForm';
import Feed from './components/Feed';
import PostFeed from './components/PostFeed';
import Home from './components/Home';
import Register from './components/Register';
import {Routes, Route} from 'react-router-dom' 
import Edit from './components/Edit';
import Details from './components/Details';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/feed" element={<Feed/>} exact />
        <Route path="/postfeed" element={<PostFeed/>} exact />
        <Route path="/register" element={<Register/>} exact />
        <Route path="/edit/:id" element={<Edit/>} exact />
        <Route path="/view/:id" element={<Details/>} exact />
        <Route path="/post" element={<PostForm/>} exact />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
