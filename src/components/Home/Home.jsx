import React from 'react'
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.home}>
        <h1>Welcome to the Shop</h1>
        <p>Here you will find a wide variety of products, from jewelry to electronics, all at affordable prices.</p>
        <p>Please select a category from the navigation bar above.</p>
    </div>
  )
}

export default Home