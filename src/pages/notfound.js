import React from 'react'
import { Link } from 'react-router-dom'

export const NotFoundPage = () => (
  <div>
    <h2>Page Not Found!</h2>
    <Link to="/">Home Page</Link>
    <Link to="/about">About Page</Link>
  </div>
)
