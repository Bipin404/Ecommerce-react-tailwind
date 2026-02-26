import React from 'react'
import { Link } from 'react-router-dom'

import tshirt from '../assets/tshirt.jpg'
import mug from '../assets/mug.jpg'
import bag from '../assets/bag.jpg'
import hat from '../assets/hat.jpg'

function Home() {
  return (
    <div>
      <div className="bg-yellow-100 border border-yellow-300 p-8 text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Welcome to MyShop!</h2>
        <p className="text-gray-600 mb-4">We sell the best products at the best prices.</p>
        <Link
          to="/products"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          View Products
        </Link>
      </div>

      <h3 className="text-xl font-bold mb-4">Why Shop With Us?</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="border p-4 rounded">
          <h4 className="font-bold mb-1">Free Shipping</h4>
          <p className="text-gray-600 text-sm">We offer free shipping on orders over $50.</p>
        </div>
        <div className="border p-4 rounded">
          <h4 className="font-bold mb-1">Easy Returns</h4>
          <p className="text-gray-600 text-sm">Return anything within 30 days no questions asked.</p>
        </div>
        <div className="border p-4 rounded">
          <h4 className="font-bold mb-1">24/7 Support</h4>
          <p className="text-gray-600 text-sm">Our support team is always here to help you.</p>
        </div>
      </div>

      <h3 className="text-xl font-bold mb-4">Featured Products</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {['T-Shirt', 'Mug', 'Bag', 'Hat'].map((item, i) => (
          <div key={i} className="border p-3 rounded text-center">
            <div className="bg-gray-100 h-24 mb-2 flex items-center justify-center">
              <img
                src={
                  i === 0
                    ? tshirt
                    : i === 1
                    ? mug
                    : i === 2
                    ? bag
                    : hat
                }
                alt={item}
                className="h-20 object-contain"
              />
            </div>
            <p className="font-medium">{item}</p>
            <p className="text-blue-600 font-bold">$19.99</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home