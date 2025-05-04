import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_lureg5j', // ✅ Replace with your actual service ID
        'template_424n7jj', // ✅ Replace with your actual template ID
        form.current,
        '2MmByj1HlCtn0TvjN' // ✅ Replace with your actual public key
      )
      .then(
        (result) => {
          console.log('Email sent:', result.text);
          alert('Message sent successfully!');
          form.current?.reset(); // ✅ Optional: resets form after sending
        },
        (error) => {
          console.error('Failed to send:', error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-5">
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Name</label>
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Email</label>
        <input
          name="email"
          type="email"
          placeholder="you@example.com"
          className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Message</label>
        <textarea
          name="message"
          rows={4}
          placeholder="Your Message"
          className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-semibold"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
