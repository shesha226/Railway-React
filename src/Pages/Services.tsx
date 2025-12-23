import { motion } from 'framer-motion';
import Bookings from '../Pages/Booking';

const railwayRoutes = [
  {
    name: 'Colombo – Kandy',
    description:
      'The main route connecting the commercial capital to the hill capital.',
  },
  {
    name: 'Colombo – Galle',
    description: 'Scenic coastal railway route along the southern shoreline.',
  },
  {
    name: 'Colombo – Jaffna',
    description: 'Northern line connecting Colombo with the Northern Province.',
  },
  {
    name: 'Colombo – Badulla',
    description: 'Famous hill country route with breathtaking views.',
  },
  {
    name: 'Colombo – Trincomalee',
    description:
      'Eastern coastal line connecting to the port city of Trincomalee.',
  },
  {
    name: 'Colombo – Batticaloa',
    description:
      'Eastern line passing through Polonnaruwa and rural landscapes.',
  },
  {
    name: 'Colombo – Matara',
    description: 'Southern line extended to the deep south.',
  },
  {
    name: 'Kandy – Badulla',
    description: 'Mountain railway route through tea plantations.',
  },
  {
    name: 'Colombo – Negombo',
    description: 'Short commuter line to the airport city.',
  },
  {
    name: 'Colombo – Avissawella',
    description: 'Kelani Valley line serving daily commuters.',
  },
];

function Services() {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#EBF8FF] to-white py-20 px-6">
      {/* ================= ROUTES SECTION ================= */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Main Railway Routes
        </h1>
        <p className="text-gray-600 text-lg">
          Explore the main railway routes in Sri Lanka.
        </p>
      </motion.div>

      {/* Routes Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-32">
        {railwayRoutes.map((route, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition flex flex-col justify-between hover:scale-105"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{route.name}</h3>
              <p className="text-gray-600">{route.description}</p>
            </div>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold">
              Book Now
            </button>
          </motion.div>
        ))}
      </div>

      {/* ================= BOOKING SECTION ================= */}
      <Bookings />
    </div>
  );
}

export default Services;
