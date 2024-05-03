import Header from './Header/Header'
import styles from './Content.module.css'
import Main from './Main/Main'
import Greeting from '../Greeting'
function Content() {
  return (
    <div className={styles.content}>
      <Header />
      {/* <Main /> */}
      <Greeting />
    </div>
  )
}

export default Content
