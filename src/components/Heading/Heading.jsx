
function Heading(props) {
  if (props.level === 'h1') {
    return (
      <h1 className="heading-h1">{props.text}</h1>
    );
  } else if (props.level === 'h2') {
    return (
      <h2 className="heading-h2">{props.place}, {props.month} — {props.price}</h2>
    );
  }
}

export default Heading;