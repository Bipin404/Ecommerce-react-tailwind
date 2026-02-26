import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4 max-w-4xl mx-auto w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
