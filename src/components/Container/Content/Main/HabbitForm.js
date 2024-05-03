import styles from './HabbitForm.module.css'
import comment from '../../../../images/comment.svg'
function HabbitForm() {
  return (
    <form className={styles.habbit__form}>
      {/**При нажатии */}
      <input
        name="comment"
        className={styles.input_icon}
        type="text"
        placeholder="Комментарий"
      />
      <img
        className={styles.input__icon}
        src={comment}
        alt="Иконка комментария"
      />
      <button className={styles.button} type="submit">
        Готово
      </button>
    </form>
  )
}

export default HabbitForm
