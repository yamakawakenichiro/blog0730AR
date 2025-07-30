import Image from 'next/image'
import styles from 'styles/hero.module.css'
import world from 'images/world.png'

export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && (
        <figure>
          <Image
            src={world}
            alt=""
            width={1500}
            height={1300}
            sizes="(min-width:1152px)576px,(min-width:768px)50vw,100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            priority
          />
        </figure>
      )}
    </div>
  )
}
