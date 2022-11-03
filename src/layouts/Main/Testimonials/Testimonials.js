import React from 'react'
import ClientReview from './ClientReview'
import styles from "./Testimonials.module.scss"

export default function Testimonials() {
  return (
    <section id={styles.testimonials}>
        <h4>Testimonials</h4>
        <h3>Our Client Reviews</h3>

        <ClientReview />

    </section>
  )
}
