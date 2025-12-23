import React, { useState } from 'react';
function Contact() {
  type InquiryType =
    | 'Ticket Issue'
    | 'Lost & Found'
    | 'Delay / Complaint'
    | 'General Inquiry';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiry: 'Ticket Issue' as InquiryType,
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Your message has been sent successfully!');
    setFormData({
      name: '',
      email: '',
      inquiry: 'Ticket Issue',
      message: '',
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center py-20 px-4">
        <h1 className="text-4xl font-bold mb-3">Contact Railway Support</h1>
        <p className="text-lg opacity-90">
          We are available 24/7 to assist your journey
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-3 px-6 -mt-12">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center shadow">
          <h3 className="text-xl font-semibold text-red-700 mb-2">
            🚨 Emergency
          </h3>
          <p className="text-2xl font-bold text-red-700">1919</p>
        </div>

        <div className="bg-white rounded-xl p-6 text-center shadow">
          <h3 className="text-xl font-semibold mb-2">📞 Customer Care</h3>
          <p className="text-lg font-medium">+94 11 123 4567</p>
        </div>

        <div className="bg-white rounded-xl p-6 text-center shadow">
          <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
          <p className="text-lg font-medium">support@railway.com</p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-16 mb-20">
        <h2 className="text-2xl font-bold text-center mb-6">
          Send Us a Message
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
          />

          <select
            name="inquiry"
            value={formData.inquiry}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
          >
            <option>Ticket Issue</option>
            <option>Lost & Found</option>
            <option>Delay / Complaint</option>
            <option>General Inquiry</option>
          </select>

          <textarea
            name="message"
            rows={5}
            placeholder="Type your message here..."
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none resize-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition"
          >
            Submit Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
