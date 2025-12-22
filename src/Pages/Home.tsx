import train from '../assets/srilankatrain5-1.jpg';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const passengers = [
  {
    name: 'John Doe',
    from: 'Colombo',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  },
  {
    name: 'Jane Smith',
    from: 'Kandy',
    description: 'Dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  },
  {
    name: 'Michael Lee',
    from: 'Galle',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  },
  {
    name: 'Sara Perera',
    from: 'Matara',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  },
  {
    name: 'David Silva',
    from: 'Nuwara Eliya',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  },
  {
    name: 'Lucy Fernando',
    from: 'Negombo',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  },
];

const transports = [
  {
    name: 'Train 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    image: 'https://via.placeholder.com/400x300',
  },
  {
    name: 'Train 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    image: 'https://via.placeholder.com/400x300',
  },
  {
    name: 'Train 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    image: 'https://via.placeholder.com/400x300',
  },
  {
    name: 'Train 4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    image: 'https://via.placeholder.com/400x300',
  },
  {
    name: 'Train 5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    image: 'https://via.placeholder.com/400x300',
  },
  {
    name: 'Train 6',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    image: 'https://via.placeholder.com/400x300',
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-linear-to-b from-[#EBF8FF] to-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-screen">
        <img
          src={train}
          alt="Sri Lanka Train"
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-[#EBF8FF]/40 to-black/70"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to Sri Lanka Railways
          </motion.h1>

          <motion.p
            className="text-white text-lg md:text-2xl mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Experience the breathtaking beauty of Sri Lanka by train
          </motion.p>

          <motion.button
            onClick={() => navigate('/services/booking')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Ticket
          </motion.button>
        </div>
      </section>

      {/* ================= TRANSPORTS SECTION ================= */}
      <section className="py-20 bg-linear-to-b from-[#EBF8FF] to-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Our Transports
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto">
          {transports.map((transport, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative">
                <img
                  src={transport.image}
                  alt={transport.name}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{transport.name}</h3>
                <p className="text-gray-600 mb-4">{transport.description}</p>
                <button className="text-blue-600 font-semibold hover:underline">
                  Learn more →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PASSENGERS SECTION ================= */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Our Passengers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
          {passengers.map((passenger, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mr-4">
                  {passenger.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{passenger.name}</h3>
                  <p className="text-gray-500">{passenger.from}</p>
                </div>
              </div>

              <p className="text-gray-600">{passenger.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
