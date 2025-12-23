import train from '../assets/srilankatrain5-1.jpg';
import jaffna from '../assets/0CEF1F55-572A-477E-ADB4-7419D34BDB7A.jpg';
import batticaloa from '../assets/Trincomalee-Express-Train.jpg';
import anuradhapura from '../assets/colombo-to-anuradhapura-train-timetable.jped..jpg';
import kandy from '../assets/train_station_kandy_sri_lanka-uai-1086x610.jpg';
import ella from '../assets/80.jpg';
import mathara from '../assets/2eksn8hrhr821.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Contact from './Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Passenger {
  name: string;
  from: string;
  description: string;
}

interface Transport {
  name: string;
  description: string;
  image: string;
}

const passengers: Passenger[] = [
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

const transports: Transport[] = [
  {
    name: 'Yal Devi',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    image: jaffna,
  },
  {
    name: 'Udaya Devi',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    image: batticaloa,
  },
  {
    name: 'Udarata Menike',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    image: ella,
  },
  {
    name: 'Rajarata Rajina',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    image: anuradhapura,
  },
  {
    name: 'Senkadagala Menike',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    image: kandy,
  },
  {
    name: 'Ruhunu Kumari',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    image: mathara,
  },
];

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);
  const massage = ['Welcome to Sri Lanka Railways', 'ආයුබෝවන් ශ්‍රී ලංකා'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % massage.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentIndex}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 1 }}
            >
              {massage[currentIndex]}
            </motion.h1>
          </AnimatePresence>

          <motion.p
            className="text-white text-lg md:text-2xl mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Experience the breathtaking beauty of Sri Lanka by train
          </motion.p>

          <div className="flex gap-3">
            <motion.button
              onClick={() => navigate('/services/booking')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Ticket
            </motion.button>

            <motion.button
              onClick={() => navigate('/services')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Choose Your Journey
            </motion.button>
          </div>
        </div>
      </section>

      {/* ================= TRANSPORTS SECTION ================= */}
      <section className="py-20 bg-linear-to-b from-[#EBF8FF] to-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Our Transports
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto ">
          {transports.map((transport, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition hover:scale-105"
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
          Reviews
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
      <div data-aos="fade-up">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
