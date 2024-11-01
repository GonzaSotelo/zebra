
import './Banner.css'; // Archivo CSS personalizado para estilos del banner

const Banner = () => {
  return (
    <div className="banner-container">
      <video className="banner-video" src="../public/video/ZebraLagoEventos.mp4" autoPlay muted loop></video>
      <div className="banner-overlay">
        <h1>Zebra Lago Eventos</h1>
        <p>Tu descripción aquí</p>
      </div>
    </div>
  );
};

export default Banner;
