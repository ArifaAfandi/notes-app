import styles from './card.module.scss'


const Card = ({ content, icons, completed, activity, createDate }) => {

  const year = createDate && createDate.getFullYear();
  const month = createDate && (createDate.getMonth() + 1).toString().padStart(2, '0');
  const day = createDate && createDate.getDate().toString().padStart(2, '0');

  const formattedDate = `${day}/${month}/${year}`;

  return (
    <div className={styles.card}>
      <span style={activity && {width: '100%'}}>
        {activity ? `Name with '${content}' created at ${formattedDate}` : `${content}`}
      </span>
      {icons && <span>{icons}</span>}
      {completed && <button>Completed</button>}
    </div>
  )
}

export default Card