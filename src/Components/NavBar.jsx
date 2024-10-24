//import React from 'react'
import '../Assets/CSS/navbar.css'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div><ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/view">View</Link></li>
    <li><Link to="/create">Create</Link></li>
    <li><Link to="/update">Update</Link></li>
    <li><Link to="/delete">Delete</Link></li>
  </ul></div>
  )
}

export default NavBar