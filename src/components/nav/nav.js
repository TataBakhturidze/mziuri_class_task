import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

function Nav() {
    return (
        <nav>
            <ol>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                <li>
                    <Link to="/comments">Comments</Link>
                </li>
                <li>
                    <Link to="/todos">Todos</Link>
                </li>
                <li>
                    <Link to="/categories">Categories</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ol>
        </nav>
    )
}

export default Nav
