import React from 'react'

function Contact() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form className="border p-4 rounded">
            <div className="mb-3">
              <label className="block mb-1 font-medium">Your Name</label>
              <input
                type="text"
                className="border w-full p-2 rounded"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-3">
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                className="border w-full p-2 rounded"
                placeholder="john@example.com"
              />
            </div>
            <div className="mb-3">
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                className="border w-full p-2 rounded"
                rows="4"
                placeholder="Write your message here..."
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3">Our Info</h3>
          <div className="border p-4 rounded">
            <p className="mb-2"><span className="font-medium">Address:</span> Kalanki,Kathmandu</p>
            <p className="mb-2"><span className="font-medium">Phone:</span> 9860809857</p>
            <p className="mb-2"><span className="font-medium">Email:</span> support@bipsshop.com</p>
            <p className="mb-2"><span className="font-medium">Hours:</span> Mon-Fri 9am to 5pm</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
