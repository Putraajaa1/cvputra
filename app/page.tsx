import foto from "./foto.jpeg";
import "./putra-style.css";

function Profile() {
  return <img src={foto.src} alt="Putra Anjelisna Syopandi" className="fotoku"/>;
}

export default function Gallery() {
  return (
    <section>
      <div className="container mx-auto p-2 text-center">
        <hi className="text-gray-400 font-bold"> CV ONLINE </hi>
        <h2 className="text-3xl"> Putra Anjelisna Syopandi</h2>
      <Profile />
      <p> 
        <h1 className="text-gray-500 font-bold">   saya mahasiswa ma'soem university semester 5 jurusan komputerisasi akutansi</h1>
      </p>
    </div>
    </section>
  );
}