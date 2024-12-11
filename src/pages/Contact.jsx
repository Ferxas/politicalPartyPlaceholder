import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-800">Contáctanos</h1>
      <p className="text-lg text-gray-700 mt-4 max-w-xl text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet libero vel dolor egestas commodo.
      </p>
      <Link to="/" className="mt-6 text-blue-600 hover:underline">
        Volver al inicio
      </Link>
    </div>
  );
}

export default Contact;