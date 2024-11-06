
import './Banner.css'; // Archivo CSS personalizado para estilos del banner

const Banner = () => {
  return (
    <div className="banner-container">
      <video className="banner-video" src="video/ZebraLagoEventos.mp4" autoPlay muted loop></video>
      <div className="banner-overlay">
        
        <p>Vos lo soñas... Nosotros lo hacemos realidad</p>
        <button>Contactanos</button>
      </div>
    </div>
  );
};

export default Banner;
