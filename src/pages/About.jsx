import { Link } from "react-router-dom";
import Navbar from '../components/Navbar'


function About() {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-blue-800">Sobre nosotros</h1>
            <p className="text-lg text-gray-700 mt-4 max-w-xl text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut libero sit amet purus sollicitudin luctus.
            </p>
            <Link to="/" className="mt-6 text-blue-600 hover:underline">
                Volver al inicio
            </Link>
        </div>
    );
}

export default About;