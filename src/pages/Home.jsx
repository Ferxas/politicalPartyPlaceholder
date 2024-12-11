import { Link } from "react-router-dom";
import { FaVoteYea } from "react-icons/fa";
import { motion } from 'framer-motion'

function Home() {
  const sections = [
    {
      id: 1,
      title: "Bienvenido a LuisParty",
      content: "lorem ipsum dolor sit amet, consectetur adip",
      image: "https://picsum.photos/200",
    },
    {
      id: 2,
      title: "Nuestros objetivos",
      content: "lorem ipsum dolor sit amet, consectetur adip",
      image: "https://picsum.photos/200",
    },
    {
      id: 3,
      title: "Nuestros miembros",
      content: "lorem ipsum dolor sit amet, consectetur adip",
      image: "https://picsum.photos/200",
    },
    {
      id: 4,
      title: "Contacto",
      content: "lorem ipsum dolor sit amet, consectetur adip",
      image: "https://picsum.photos/200",
    }
  ]
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center">
      
      
      <div className="min-h-screen bg-gray-100 m-5">
        {sections.map(section => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="min-h-screen flex flex-col items-center justify-center p-4"
          >
            <img src={section.image} alt={section.title} className="w-64 h-64 rounded-lg object-cover" />
            <h2 className="text-xl font-bold text-blue-800">{section.title}</h2>
            <p className="text-sm text-gray-700">{section.content}</p>
            <Link to={`/section/${section.id}`} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Leer más
            </Link>
          </motion.div>
        ))}
      </div>
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