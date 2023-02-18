import "./Card.css";
const Card = (data) => {
  return (
    <div className="cards">
      <div className="title">
        <h1 className="title">{data.title}</h1>
      </div>
      <img className="image" src={data.image} alt="image" />
      <div className="card-over">
        <p>{data.desc}</p>
      </div>
    </div>
  );
};
export default Card;
