import logo from '../../images/logo.svg'
import styles from './Menu.module.css'
import Button from '../Button/Button'
import addHabitImg from '../../images/addHabit.svg'
function Menu() {
  return (
    <div className={styles.panel}>
      <img className={styles.logo} src={logo} alt="Логотип Habbit App" />
      <nav className={styles.menu}>
        <div className={styles.menu__list}></div>
        <Button className={styles.menu__item}>
          <img src={addHabitImg} />
        </Button>
        <Button className={styles.menu__item}>Спорт</Button>
        <Button className={styles.menu__item}>Вода</Button>
      </nav>
    </div>
  )
}

export default Menu
