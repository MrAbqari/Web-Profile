import "./Custom.css";
  
function About() {
  return(
    <div id="About" className="profile-card">
        <h3>About Me</h3>
        <p>
          Halo! Nama saya adalah Muhammad Riza Abqari. Oleh teman-teman saya, saya
          sering dipanggil "Riza". Saya lahir di kota kecil yang indah,
          Pandeglang, pada tanggal 09 Juli 2004. Sekarang saya sedang menempuh
          pendidikan di Universitas Pendidikan Indonesia dan saya berada di
          jurusan Pendidikan Ilmu Komputer.
        </p>
        <h4>Riwayat Pendidikan</h4>
        <table>
          <tbody>
            <tr>
              <td>SD</td>
              <td>:</td>
              <td>SDN Karaton 1</td>
            </tr>
            <tr>
              <td>SMP</td>
              <td>:</td>
              <td>SMPN 3 Pandeglang</td>
            </tr>
            <tr>
              <td>SMA</td>
              <td>:</td>
              <td>SMAN 6 Pandeglang</td>
            </tr>
            <tr>
              <td>PTN</td>
              <td>:</td>
              <td>Universitas Pendidikan Indonesia</td>
            </tr>
          </tbody>
        </table>
      </div>
  );
}

export default About;
