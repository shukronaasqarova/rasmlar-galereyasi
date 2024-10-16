import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">MySite</Link>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">Bosh sahifa</Link></li>
            <li><Link to="/about" className="hover:underline">Biz haqimizda</Link></li>
            <li><Link to="/contact" className="hover:underline">Aloqa</Link></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 MySite. Barcha huquqlar himoyalangan.</p>
      </footer>
    </div>
  )
}

export default MainLayout