import './Card.css';

const Card = (props) => {
  // eslint-disable-next-line react/prop-types
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
