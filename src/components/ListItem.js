const ListItem = (props) => {
  return (
    <li className="concept">
      <img src={props.value.image} alt={props.value.title} />
      <h2>{props.value.title}</h2>
      <p>{props.value.description}</p>
    </li>
  );
};


export default ListItem;