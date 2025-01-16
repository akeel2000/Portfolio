import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      'service_0kn08vd', // Replace with your Service ID
      'template_qk4rpqc', // Replace with your Template ID
      form.current,
      '0wzLHauxji2uon1dE' // Replace with your Public Key
    )
    .then(
      (result) => {
        console.log('Success:', result.text);
        alert('Message sent successfully!');
      },
      (error) => {
        console.error('Error:', error);
        alert('Failed to send the message. Please try again.');
      }
    );
  
  
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-white shared-background">
      <h1 className="text-5xl font-bold mb-8">
        Contact <span className="text-cyan-400">Me!</span>
      </h1>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-3xl bg-shared border-2 border-cyan-400 p-8 rounded-lg shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="name" // Match this to the EmailJS template placeholder
              placeholder="Enter your full name"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border-2 border-gray-600 focus:outline-none focus:border-cyan-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input
              type="email"
              name="email" // Match this to the EmailJS template placeholder
              placeholder="Enter your email address"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border-2 border-gray-600 focus:outline-none focus:border-cyan-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Mobile Number</label>
            <input
              type="text"
              name="phone" // Match this to the EmailJS template placeholder
              placeholder="Enter your mobile number"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border-2 border-gray-600 focus:outline-none focus:border-cyan-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email Subject</label>
            <input
              type="text"
              name="subject" // Match this to the EmailJS template placeholder
              placeholder="Enter the subject"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border-2 border-gray-600 focus:outline-none focus:border-cyan-400"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Your Message</label>
          <textarea
            name="message" // Match this to the EmailJS template placeholder
            placeholder="Write your message here"
            className="w-full p-3 h-32 rounded-lg bg-gray-700 text-white border-2 border-gray-600 focus:outline-none focus:border-cyan-400 resize-none"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-cyan-500 rounded-lg text-white font-medium hover:bg-cyan-600 transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;

