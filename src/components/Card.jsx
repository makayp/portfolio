function Card({ project }) {
  const { title, description, type, link } = project;
  return (
    <div className={`card ${type}`}>
      <a href={link}>
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </div>
  );
}

export default Card;
