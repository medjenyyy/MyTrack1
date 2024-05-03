import styles from './Main.module.css'
import HabbitForm from './HabbitForm'
function Main() {
  return (
    <main>
      <div id="days"></div>
      <div className={styles.habbit}>
        <div className={styles.habbit__day}>День _</div>
        <HabbitForm />
      </div>
    </main>
  )
}

export default Main
