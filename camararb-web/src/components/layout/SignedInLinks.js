import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li ><NavLink to='/criar'>Novo Problema</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating grey darken-3'>NN</NavLink></li>
        </ul>
    )
}

export default SignedInLinks