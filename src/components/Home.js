import Bkg from "../Images/Background3.png";
import "./Custom.css";

function Home() {
  return (
    <div>
      <div className="backCont">
        <div className="text">
          <p style={{ fontSize: "30px" }}>
            Halo! <br />
            Nama Saya <br />
            Muhammad Riza Abqari
          </p>
        </div>
        <div className="image">
          <img src={Bkg} alt="Deskripsi Gambar" />
        </div>
      </div>
    </div>
  );
}

export default Home;