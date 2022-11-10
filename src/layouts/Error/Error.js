import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Error.module.scss"

export default function Error() {
  return (
    <div id={styles.error}>
        <h1>Oops!</h1>
        <h3>404-PAGE NOT FOUND</h3>
        <p>The page you are looking for might have been removed had its name changed or is temprorarily unanailable.</p>
        <Link to="/">Back to Home</Link>
    </div>
  )
}
