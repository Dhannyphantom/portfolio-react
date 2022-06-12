import "./Profile.css";
import me from "../../assets/me.png";

export default function Profile() {
  return (
    <section className="profile-section">
      <div>
        <p>f</p>
        <p>i</p>
        <p>t</p>
      </div>
      <div className="border">
        <div className="pic-container">
          <img src={me} alt="" className="pic" />
        </div>
      </div>
    </section>
  );
}
