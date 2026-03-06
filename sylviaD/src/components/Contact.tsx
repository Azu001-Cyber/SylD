import { useState } from 'react';
import { Mail, Linkedin, Send,  } from 'lucide-react';
import { FaSquareUpwork } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-cream-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-brown mb-4">Let's Connect</h2>
            <p className="text-xl text-brown-light"></p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-brown mb-6">Get in Touch</h3>
              <p className="text-brown-light mb-8 leading-relaxed">
                Have a project in mind or just want to explore possibilities, I would love to hear from you.
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href="mailto:techclime1@gmail.com"
                  className="flex items-center gap-3 text-brown hover:text-terracotta transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>sylviaduruson@gmail.com</span>
                </a>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/sylvia-duruson-5128b31b6?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-cream border-2 border-brown-light border-opacity-30 flex items-center justify-center text-brown hover:border-terracotta hover:text-terracotta transition-all hover:scale-110 shadow-sm"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href="https://www.upwork.com/freelancers/~0114d726578d25903f?companyReference=1524697386281852929&mp_source=share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-cream border-2 border-brown-light border-opacity-30 flex items-center justify-center text-brown hover:border-terracotta hover:text-terracotta transition-all hover:scale-110 shadow-sm"
                >
                  <FaSquareUpwork className="w-5 h-5" />
                </a> 
                
                {/*<a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-cream border-2 border-brown-light border-opacity-30 flex items-center justify-center text-brown hover:border-terracotta hover:text-terracotta transition-all hover:scale-110 shadow-sm"
                >
                  <Twitter className="w-5 h-5" />
                </a> */}
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brown mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-brown-light border-opacity-30 bg-cream focus:border-terracotta focus:ring-2 focus:ring-terracotta focus:ring-opacity-20 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brown mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-brown-light border-opacity-30 bg-cream focus:border-terracotta focus:ring-2 focus:ring-terracotta focus:ring-opacity-20 outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-brown mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-brown-light border-opacity-30 bg-cream focus:border-terracotta focus:ring-2 focus:ring-terracotta focus:ring-opacity-20 outline-none transition-all"
                    placeholder="How can I help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brown mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-brown-light border-opacity-30 bg-cream focus:border-terracotta focus:ring-2 focus:ring-terracotta focus:ring-opacity-20 outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-terracotta hover:bg-terracotta-dark text-white px-6 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
