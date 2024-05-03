import Header from './Content/Header/Header'
import styles from './Greeting.module.css'
function Greeting() {
  return (
    <>
      {/* <Header /> */}
      <div className={styles.greeting}>
        <p className={styles.bigText}>
          <span>MyTrack</span> поможет организовать жизнь и достичь новых целей.
        </p>
        <p className={styles.smallText}>
          Наша платформа предлагает уникальные возможности для отслеживания и
          развития привычек:{' '}
          <span>статистика, прогресс и добавление всевозможных категорий.</span>
        </p>
      </div>
    </>
  )
}

export default Greeting
