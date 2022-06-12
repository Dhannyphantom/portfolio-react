import "./Profile.css";
import me from "../../assets/me.png";

export default function Profile() {
  return (
    <section className="profile-section">
      <div>
        <p>Fugiat cupidatat magna occaecat non ut.</p>
      </div>
      <div className="border">
        <div className="pic-container">
          <img src={me} alt="" className="pic" />
        </div>
      </div>
      <div>
        <p>Fugiat cupidatat magna occaecat non ut.</p>
      </div>
    </section>
  );
}
