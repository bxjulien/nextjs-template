import styles from './Home.module.scss';
import Demo from '../../features/demo/Demo';

export default function Home() {

  return (
    <div className={styles.home}>
      <h1>Home</h1>
      <Demo />
    </div>
  )
}