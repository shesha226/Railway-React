import React from 'react';
import Contact from '../Pages/Contact';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image_1 from '../assets/gallery/tr.jpg';
import image_2 from '../assets/gallery/tr2jpeg.jpeg';
import image_3 from '../assets/gallery/tr4.jpg';
import image_4 from '../assets/gallery/tr5.jpg';
import image_5 from '../assets/gallery/train-sri-lanka.jpg';

interface Update {
  id: number;
  title: string;
  date: string;
  content: string;
}

interface Offer {
  id: number;
  title: string;
  description: string;
}

interface NewsItem {
  id: number;
  title: string;
  snippet: string;
}

interface GalleryItem {
  id: number;
  imgUrl: string;
  caption: string;
}
function Media() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const dailyUpdates: Update[] = [
    {
      id: 1,
      title: 'Train Schedule Change',
      date: '2025-12-23',
      content: 'Express train timings updated from Colombo to Kandy.',
    },
    {
      id: 2,
      title: 'Maintenance Work',
      date: '2025-12-22',
      content: 'Track maintenance on Galle line, expect delays.',
    },
  ];

  const offers: Offer[] = [
    {
      id: 1,
      title: 'Festive Discount',
      description:
        'Get 20% off for all train tickets booked online this month.',
    },
    {
      id: 2,
      title: 'Family Package',
      description: 'Special package for 4 people traveling together.',
    },
  ];

  const news: NewsItem[] = [
    {
      id: 1,
      title: 'New Train Introduced',
      snippet: 'A new luxury express train launched on Colombo-Kandy route.',
    },
    {
      id: 2,
      title: 'Railway App Update',
      snippet: 'Mobile app now allows seat selection and digital tickets.',
    },
  ];

  const gallery: GalleryItem[] = [
    {
      id: 1,
      imgUrl: image_1,
      caption: 'Scenic view of the hill country.',
    },
    {
      id: 2,
      imgUrl: image_2,
      caption: 'Modern express train interior.',
    },
    {
      id: 3,
      imgUrl: image_3,
      caption: 'Sunset view from railway station.',
    },
    {
      id: 3,
      imgUrl: image_4,
      caption: 'Sunset view from railway station.',
    },
    {
      id: 3,
      imgUrl: image_5,
      caption: 'Sunset view from railway station.',
    },
  ];
  return (
    <div className="bg-gray-100 min-h-screen p-6 md:p-12">
      {/* DAILY UPDATES */}
      <section className="mb-12" data-aos="zoom-in">
        <h2 className="text-3xl font-bold mb-6 text-blue-900">Daily Updates</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {dailyUpdates.map(update => (
            <div
              key={update.id}
              className="bg-white rounded-lg p-5 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{update.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{update.date}</p>
              <p className="text-gray-700">{update.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OFFERS */}
      <section className="mb-12" data-aos="zoom-in">
        <h2 className="text-3xl font-bold mb-6 text-green-700">
          Special Offers
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {offers.map(offer => (
            <div
              key={offer.id}
              className="bg-green-50 rounded-lg p-5 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
              <p className="text-gray-700">{offer.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEWS */}
      <section className="mb-12" data-aos="zoom-in">
        <h2 className="text-3xl font-bold mb-6 text-purple-700">News</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {news.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-lg p-5 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.snippet}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="mb-12" data-aos="zoom-in">
        <h2 className="text-3xl font-bold mb-6 text-red-700">Gallery</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {gallery.map(item => (
            <div
              key={item.id}
              className="rounded-lg overflow-hidden shadow hover:shadow-lg transition hover:scale-105"
            >
              <img
                src={item.imgUrl}
                alt={item.caption}
                className="w-full h-48 object-cover"
              />
              <p className="p-3 text-gray-700">{item.caption}</p>
            </div>
          ))}
        </div>
      </section>
      <Contact />
    </div>
  );
}

export default Media;
