import "./Cards.css";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <p>Image</p>
        <p>60%</p>
      </div>
      <p className="card-name">React Native</p>
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
