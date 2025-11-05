import React from 'react';
import { MailIcon, LinkedinIcon, DocumentIcon } from '../lib/constants.tsx';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 text-center">
      <h2 className="text-4xl font-bold mb-4 text-white">Get In Touch</h2>
      <p className="text-lg text-gray-300 max-w-xl mx-auto mb-10">
        Focused on Mobile App Development. Let’s Connect and Bring Your Project to Life!
      </p>
      <div className="flex justify-center items-center flex-wrap gap-4">
        <a href="https://mail.google.com/mail/?view=cm&to=aswinmohan242@gmail.com" className="flex items-center gap-3 bg-white/10 text-white py-3 px-6 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-300">
          <MailIcon className="w-5 h-5" />
          Email
        </a>
        <a href="https://www.linkedin.com/in/aswin-mohanan-flutter-dev/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white/10 text-white py-3 px-6 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-300">
          <LinkedinIcon className="w-5 h-5" />
          LinkedIn
        </a>
        {/* <a href="/aswin_resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white/10 text-white py-3 px-6 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-300">
          <DocumentIcon className="w-5 h-5" />
          Resume
        </a> */}
      </div>
    </section>
  );
};

export default Contact;