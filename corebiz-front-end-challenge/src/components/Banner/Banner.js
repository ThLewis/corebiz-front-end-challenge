import React from 'react'
import styles from './Banner.module.css'

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.container}>
                <h1>Olá, o que você está buscando? <br /><span>Criar ou migrar seu ecommerce?</span></h1>
            </div>
            <div className={styles.slider}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
            </div>
        </section>
    )
}

export default Banner;