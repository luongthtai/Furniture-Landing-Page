import React from 'react'
import styles from "./QualityItems.module.scss"

export default function QualityItems({ title, content, forUs }) {
  return (
    <div className={styles.qualityItems}>
        <h4>{title}</h4>
        <h3>{forUs}</h3>
        <p>{content}</p>
        <button>More Info</button>
    </div>
  )
}
