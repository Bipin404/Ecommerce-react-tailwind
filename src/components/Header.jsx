import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Bips_Shop</h1>
        <nav>
          <Link to="/" className="mr-4 hover:underline">Home</Link>
          <Link to="/products" className="mr-4 hover:underline">Products</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
