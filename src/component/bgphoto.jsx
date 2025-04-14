import bus1 from "../image/bus1.jpg";
import bus2 from "../image/bus2.jpg";
import bus3 from "../image/bus3.jpg";
import bus4 from "../image/bus4.jpg";

function Bgimages() {
    const images = [bus1, bus2, bus3, bus4];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const backgroundStyle = {
        backgroundImage: `url(${randomImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      };
    return (
        backgroundStyle
    );
}

export default Bgimages
