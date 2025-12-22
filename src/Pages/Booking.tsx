import { motion } from 'framer-motion';
function Bokkings() {
  return (
    <div>
      <section
        id="booking"
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Book Your Tickets
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Fill the form below to reserve your train tickets quickly and
            easily.
          </p>

          {/* Booking Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone
              </label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Mobile Number"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Select Route
              </label>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Select Class
              </label>
              <select className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option value="">-- Choose a Class --</option>
                <option>First Class</option>
                <option>Second Class</option>
                <option>Third Class</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Number of Passengers
              </label>
              <input
                type="number"
                min={1}
                defaultValue={1}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Number of Children (8-12 years)
              </label>
              <input
                type="number"
                min={0}
                defaultValue={0}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Date of Travel
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-transform transform hover:scale-105"
            >
              Confirm Booking
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
export default Bokkings;
