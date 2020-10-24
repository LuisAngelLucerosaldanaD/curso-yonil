import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
    return (
        <div>
            <Link to="/">
                <button type="button">
                    Home
                </button>
            </Link>
            <Link to="/about">
                <button type="button">
                    About
                </button>
            </Link>
        </div>
    )
}

export default Nav
