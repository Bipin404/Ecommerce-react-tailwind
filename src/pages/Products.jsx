import React from 'react'

// Import your images from assets
import tshirtImg from '../assets/tshirt.jpg'
import mugImg from '../assets/mug.jpg'
import toteImg from '../assets/tote.jpg'
import capImg from '../assets/cap.jpg'
import bottleImg from '../assets/bottle.jpg'
import notebookImg from '../assets/notebook.jpg'
import hoodieImg from '../assets/hoodie.jpg'
import standImg from '../assets/stand.jpg'

const products = [
  { id: 1, name: 'Basic T-Shirt', price: 19.99, description: 'A simple cotton t-shirt.', image: tshirtImg },
  { id: 2, name: 'Coffee Mug', price: 12.99, description: 'A white ceramic mug.', image: mugImg },
  { id: 3, name: 'Tote Bag', price: 24.99, description: 'A canvas tote bag.', image: toteImg },
  { id: 4, name: 'Baseball Cap', price: 15.99, description: 'Adjustable cap fits all sizes.', image: capImg },
  { id: 5, name: 'Water Bottle', price: 22.99, description: 'Keeps drinks cold for 24 hours.', image: bottleImg },
  { id: 6, name: 'Notebook', price: 9.99, description: 'Lined notebook 200 pages.', image: notebookImg },
  { id: 7, name: 'Hoodie', price: 39.99, description: 'Warm and comfy hoodie.', image: hoodieImg },
  { id: 8, name: 'Phone Stand', price: 14.99, description: 'Adjustable phone stand.', image: standImg },
]

function Products() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map(product => (
          <div key={product.id} className="border rounded p-3">
            <img
              src={product.image}
              alt={product.name}
              className="h-28 w-full object-contain mb-2"
            />
            <p className="font-bold">{product.name}</p>
            <p className="text-xs text-gray-600 mb-2">{product.description}</p>
            <p className="text-blue-600 font-bold mb-2">${product.price}</p>
            <button className="w-full bg-blue-600 text-white py-1 rounded text-sm hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products