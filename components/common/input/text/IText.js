import { useState } from 'react';
import styles from './IText.module.scss';

export default function IText(props) {
  const [focus, setFocus] = useState(false);
  const [isLabelStuck, setIsLabelStuck] = useState(false);
  const [input, setInput] = useState('')

  function onInput(e) {
    e.preventDefault();
    const { name, value } = e.target;

    if (props.limit && value.length > props.limit) return
    props.onInput(name, value);
    if (value && value.length > 0) setIsLabelStuck(true);
    else setIsLabelStuck(false);
    setInput(value);
  }

  return (
    <div onFocus={() => setFocus(true)} onBlur={() => setFocus(isLabelStuck ? true : false)} className={styles.container}>
      {props.label && <label onClick={() => setFocus(true)} className={`${styles.label} ${(focus ? styles.focused : '')}`}>{props.label}</label>}
      <input
        {...props}
        className={`${styles.input} ${(focus ? styles.bordered : '')}`}
        name={props.name}
        onInput={(e) => onInput(e)}
      />
      {props.limit && <small className={styles.limit}>{input.length}/{props.limit}</small>}
    </div>
  )
}