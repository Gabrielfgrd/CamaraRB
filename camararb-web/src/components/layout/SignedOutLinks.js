import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li ><NavLink to='/cadastrar'>Cadastrar</NavLink></li>
            <li><NavLink to='/entrar'>Login</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks