// LogoSlider.jsx
import "../css/logoSlider.css";

const logos = [
    "/logos/google.png",
    "/logos/microsoft.png",
    "/logos/amazon.png",
    "/logos/netflix.png",
    "/logos/meta.png",
];

export default function LogoSlider() {
    return (
        <div className="slider">
        <div className="slide-track">
            {logos.concat(logos).map((logo, index) => (
            <div className="slide" key={index}>
                <img src={logo} alt="company logo" />
            </div>
            ))}
        </div>
        </div>
    );
}