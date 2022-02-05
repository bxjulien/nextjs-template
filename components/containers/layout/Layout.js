
import styles from './Layout.module.scss';

export default function Layout(props) {
  return (
    <div className={styles.layout}>
      <header>

      </header>

      <main>
        {props.children}
      </main>

      <footer>

      </footer>
    </div>
  )
}