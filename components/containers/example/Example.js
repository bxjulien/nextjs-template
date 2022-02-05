import styles from './Example.module.scss';
import IButton from '../../common/input/button/IButton';
import { useRouter } from 'next/router';

export default function Example() {
  const router = useRouter();
  
  return (
    <div className={styles.example}>
      <h1>Example</h1>
      <IButton onClick={() => router.push('/')}>Back to Home</IButton>
    </div>
  )
}