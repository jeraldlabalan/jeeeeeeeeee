import React from 'react'
import styles from "./SkillsStyles.module.css"
import Frontend from './Frontend'
import Backend from './Backend'

function Skills() {
  return (
    <section className={`${styles.skills} section`} id="skills">

      <h2 className="section__title">
        Skills
      </h2>
      <div className={`${styles.skills__container} container grid`}>
      <Frontend />
      <Backend />
      </div>

    </section>

    
  )
}

export default Skills