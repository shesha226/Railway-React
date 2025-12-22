import train from '../assets/srilankatrain5-1.jpg';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="w-full">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen w-full ">
        <img
          src={train}
          alt="Sri Lanka Railways"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 ">
          <div className="max-w-3xl">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold text-white mb-6"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              About Sri Lanka Railways
            </motion.h1>

            <motion.p
              className="text-white/90 text-lg md:text-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              Connecting people, places, and cultures across Sri Lanka
            </motion.p>
          </div>
        </div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-linear-to-b from-[#EBF8FF] to-white/70 backdrop-blur-md">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sri Lanka Railways is the national railway operator of Sri Lanka,
              providing safe, affordable, and scenic transportation for millions
              of passengers every year.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From coastal routes to misty hill-country journeys, our railway
              network offers one of the most beautiful train experiences in the
              world.
            </p>
          </motion.div>

          {/* Image */}
          <motion.img
            src={train}
            alt="Railway Journey"
            className="rounded-2xl shadow-xl"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Years of Service', value: '150+' },
            { label: 'Daily Passengers', value: '1M+' },
            { label: 'Train Routes', value: '100+' },
            { label: 'Stations', value: '400+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl text-center shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-blue-600 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Travel Sri Lanka With Us
        </motion.h2>

        <motion.button
          className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book a Journey
        </motion.button>
      </section>
    </div>
  );
}

export default About;
