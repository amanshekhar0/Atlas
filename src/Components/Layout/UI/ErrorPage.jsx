import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'


const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    
    return (
        <div className="error-container">
            <h1 className="error-title">Oops! Something went wrong</h1>
            <h2 className="error-message">Error: {error.data || "Unknown error"}</h2>
            <NavLink to="/" className="home-link">Go back to home</NavLink>
        </div>
    )
}

export default ErrorPage
