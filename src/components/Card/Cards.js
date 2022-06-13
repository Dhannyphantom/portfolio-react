import "./Cards.css";

const cardsArr = [];

const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={require("../../assets/skills/js.png")} />
        <p>60%</p>
      </div>
      <p className="card-name">Javascript</p>
    </div>
  );
};

export default function Cards() {
  return (
    <section>
      <Card />
    </section>
  );
}
