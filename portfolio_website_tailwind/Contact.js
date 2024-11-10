import React from 'react';

function Contact() {
  return (
    <div className="p-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-blue-500">Contact Me</h2>
      <form className="mt-4 space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea className="w-full p-2 border border-gray-300 rounded"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send</button>
      </form>
    </div>
  );
}

export default Contact;
