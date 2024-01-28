import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const Navigate=useNavigate();
    const logout=()=>{
        // localStorage.clear();
        Navigate("/");

    }
  return (
    <>
    <nav className="bg-black p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div>
        <Link to="/" className="text-white text-lg font-bold">
          Loaning System
        </Link>
      </div>
      <div>
        <ul className="flex space-x-4">
        
          
          <li>
            <Link to="/transactions" className="text-white hover:underline">
              Transactions
            </Link>
          </li>
          <li>
            <button onClick ={logout} className="text-white hover:underline">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav></>
  )
}

export default Navbar