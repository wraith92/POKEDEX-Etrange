import React from 'react'

export default function navbar() {
    return (
        <div>
            <nav className="bg-gray-800">
                <ul className="flex">
                    <li>
                        <Link to="/" className="text-white px-4 py-2">Home</Link>
                    </li>
                    <li>
                        <Link to="/personnages" className="text-white px-4 py-2">pokedex</Link>
                    </li>
                 
                </ul>
            </nav>
        </div>
    )
}
