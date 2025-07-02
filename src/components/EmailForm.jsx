import { useState } from 'react';
import { Link } from 'react-router-dom';

const EmailForm = () => {
  const [subject, setSubject] = useState('Portfolio Inquiry');
  const [body, setBody] = useState(
    `Hi Kelvin,\n\nI saw your portfolio and would like to discuss potential opportunities. Please let me know a convenient time to connect.\n\nBest regards,\n[Your Name]`
  );

  const handleSend = (e) => {
    e.preventDefault();
    const mailto = `mailto:kelvindevl@proton.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Create and click a temporary link
    const link = document.createElement('a');
    link.href = mailto;
    link.target = '_blank';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Kelvin</h1>
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSend} className="space-y-4">
          <div>
            <label htmlFor="subject" className="block text-sm font-medium">Subject:</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-2 rounded border border-gray-300 dark:border-gray-600"
            />
          </div>
          <div>
            <label htmlFor="body" className="block text-sm font-medium">Message:</label>
            <textarea
              id="body"
              name="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows="5"
              className="w-full p-2 rounded border border-gray-300 dark:border-gray-600"
            />
          </div>
          <button
            type="submit"
            className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
          >
            Send Email
          </button>
        </form>
        <Link to="/" className="text-blue-500 hover:text-blue-700 mt-4 inline-block">Back to Home</Link>
      </div>
    </div>
  );
};

export default EmailForm;
