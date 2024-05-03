import styles from './Button.module.css'

export default function Button(props) {
  const { children, disabled = false } = props
  return (
    <button className={styles.button} disabled={disabled} {...props}>
      {children}
    </button>
  )
}
