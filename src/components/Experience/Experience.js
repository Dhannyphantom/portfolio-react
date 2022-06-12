import "./Experience.css";
export default function Experience({ item }) {
  const isRight = item.direction === "right";
  return (
    <div className="experience">
      <h6 className={isRight ? "right" : "left"}>{item.title}</h6>
      {item.list ? (
        <ul>
          {item.content.split(". ").map((str) => (
            <li className="left-text"> {str} </li>
          ))}
        </ul>
      ) : (
        <p className={isRight ? "right right-text" : "left-text"}>
          {item.content}
        </p>
      )}
    </div>
  );
}
