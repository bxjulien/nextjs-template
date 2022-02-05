import styles from './Card.module.scss';

export default function Card(props) {
  return (
    <div className={styles.card} style={{ 'color': props.color }}>
      <span className={styles.title}>{props.title}</span>
      {props.children ? props.children : 'Try typing...'}
      <small>Try changing my 'color' attribute inside Demo.js <br/> It's currently {props.color}</small>
    </div>
  )
}