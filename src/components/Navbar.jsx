import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
    <div className="container mx-auto p-2">
        <Link to={'/'}>
            <h2 className="text-white text-2xl font-bold">React Crud</h2> 
        </Link>
    </div>
</nav>
  )
}

export default Navbar