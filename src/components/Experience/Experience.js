import "./Experience.css";
export default function Experience({ item }) {
  const isRight = item.direction === "right";
  return (
    <div className="experience">
      <h6 className={isRight ? "right" : ""}>{item.title}</h6>
      <p className={isRight ? "right right-text" : ""}>{item.content}</p>
    </div>
  );
}
