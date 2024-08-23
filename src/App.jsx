// src/App.jsx

import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Plants from './plants/Plants';
import Signup from './components/Signup';
import Contacts from './contact/Contacts';
import Blogs from './blog/Blogs';
import BlogPost from './components/BlogPost';


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plant" element={<Plants />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </>
  );
}
