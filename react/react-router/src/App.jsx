import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Book from './pages/Book'
import BookList from './pages/BookList'
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import BookNavbar from './pages/BookNavbar'

function App() {


  return (
    <>
      <Routes>
        <Route path="/books" element={<h1>Extras</h1>}/>
      </Routes>
      <ul>
        <li><Link to="/" state="hello from state">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/books">Booklist</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<BookNavbar />}>
            <Route index element={<BookList />} />
            <Route path=":id" element={<Book />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
