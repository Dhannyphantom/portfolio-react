import "./Cards.css";

const Card = () => {
  return (
    <div>
      <div>
        <p>Image</p>
        <p>60%</p>
      </div>
      <p>React Native</p>
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
