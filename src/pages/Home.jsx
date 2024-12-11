import { Link } from "react-router-dom";
import { FaVoteYea } from "react-icons/fa";

function Home() {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-800">Bienvenido a [nombre del partido]</h1>
      <p className="text-lg text-gray-700 mt-4 max-w-xl text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.
      </p>
      <div className="mt-6">
        <Link to="/about" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Leer más
        </Link>
      </div>
      <div className="mt-4 flex space-x-4">
        <FaVoteYea size={32} className="text-blue-600" />
        <FaVoteYea size={32} className="text-blue-600" />
      </div>
    </div>
  );
}

export default Home;