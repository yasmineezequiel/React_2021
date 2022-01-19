import styles from './Card.module.css';

const Card = (props) => {
  // return <div className={styles.card}>{props.children}</div>;
  // line 6, I can now use my Card component to wrap any new component taking a prop of className as argument to add new styles of each individual component such as .input in AddUser, using AddUser.modules.css
  return <div className={`${styles.card} ${props.className}`}>{props.children}</div>;
};

export default Card;
