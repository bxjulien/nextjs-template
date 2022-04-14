import { useRouter } from 'next/router';
import { useState } from 'react';
import Card from '../../common/card/Card';
import IText from '../../common/input/text/IText';
import IButton from '../../common/input/button/IButton';
import styles from './Demo.module.scss';

export default function Demo() {
  const [state, setState] = useState({
    test: '',
    cardTitle: 'My Card'
  });
  const router = useRouter();

  function handleInput(name, value) {
    setState({ ...state, [name]: value })
  }

  return (
    <div className={styles.demo}>

      <p className={styles.title}>Demo Container</p>

      <span className={styles.value}>Input value : {state.test}</span>

      <IText value={state.test} name="test" label="test" limit="20" onInput={handleInput} />

      <Card title={state.cardTitle} color="black">{state.test}</Card>

      <IButton onClick={() => router.push('/example')}>Navigate to Example page</IButton>

    </div>
  )
}