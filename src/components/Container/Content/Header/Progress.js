import styles from './Progress.module.css'

function Progress() {
  return (
    <>
      <div className={styles.progress}>
        {/**будет меняться на прогресс вначале должно быть имя */}
        <div className={styles.progress__text}>
          <div className={styles.progress_name}>Прогресс</div>
          <div className={styles.progress_precent}>%</div>
        </div>
        <div className={styles.progress__bar}>
          <div className={styles.progress__cover_bar}></div>
        </div>
      </div>
    </>
  )
}

export default Progress
