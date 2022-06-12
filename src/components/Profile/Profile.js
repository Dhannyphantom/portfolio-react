import { nanoid } from "nanoid";
import "./Profile.css";
import me from "../../assets/me.png";
import Experience from "../Experience/Experience";

const leftExperienceArr = [
  {
    id: nanoid(),
    title: "biography",
    content: "Some text",
  },
  {
    id: nanoid(),
    title: "contact",
    content: "Some text",
  },
  {
    id: nanoid(),
    title: "services",
    content: "Some text",
  },
];
const rightExperienceArr = [
  {
    id: nanoid(),
    title: "years of experience",
    content: "3",
  },
  {
    id: nanoid(),
    title: "clients satisfaction",
    content: "99.9%",
  },
  {
    id: nanoid(),
    title: "languages & tech",
    content: "+15",
  },
  {
    id: nanoid(),
    title: "projects done",
    content: "5",
  },
];

export default function Profile() {
  const leftExperienceElements = leftExperienceArr.map((obj) => (
    <Experience key={obj.id} item={{ ...obj, direction: "left" }} />
  ));
  const rightExperienceElements = rightExperienceArr.map((obj) => (
    <Experience key={obj.id} item={{ ...obj, direction: "right" }} />
  ));
  return (
    <section className="profile-section">
      <div className="experiences">{leftExperienceElements}</div>
      <div className="border">
        <div className="pic-container">
          <img src={me} alt="" className="pic" />
        </div>
      </div>
      <div className="experiences">{rightExperienceElements}</div>
    </section>
  );
}
