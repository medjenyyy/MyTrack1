import Progress from './Progress'
import styles from './Header.module.css'
import registration from '../../../../images/registration.svg'
import Button from '../../../Button/Button'
//нужно сделать здесь событие регистрации, а потом на этом месте оборажаются прогресс и регистрация
function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>Добро пожаловать</h1>
      {/**Будет меняться название привычки наверху */}
      {/* <Progress /> *Будет меняться прогресс для каждой привычки */}
      <Button className={styles.registration}>
        <img src={registration} />
      </Button>
    </header>
  )
}

export default Header
