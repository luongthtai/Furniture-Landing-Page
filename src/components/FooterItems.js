import React from 'react'
import styles from "./FooterItems.module.scss"

export default function FooterItems(props) {

  return (
    <div id={styles.footerItems}>
        <h3>sevices</h3>
        <div>
            <p>branding</p>
            <p>Campaigns</p>
            <p>Email</p>
        </div>
    </div>
  )
}
