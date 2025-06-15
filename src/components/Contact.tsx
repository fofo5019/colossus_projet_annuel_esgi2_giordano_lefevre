import React, { useState } from 'react';
import { Mail, Heart } from 'lucide-react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Mail className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900">Contactez-nous</h2>
          </div>
          
          <p className="text-xl text-gray-600 mb-12">
            Une question ? Une idée ? Envie de soutenir le projet ? 
            N'hésitez pas à nous écrire, on répond toujours !
          </p>

          {submitted ? (
            <div className="bg-green-50 rounded-2xl p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-semibold text-green-800">Merci !</h3>
              </div>
              <p className="text-green-700">
                Votre message nous fait chaud au cœur. Nous reviendrons vers vous très vite !
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                    Votre nom
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Comment vous appelez-vous ?"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                    Votre email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                  Votre message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Racontez-nous tout ! Vos idées, vos questions, vos encouragements..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
              >
                Envoyer le message
              </button>
            </form>
          )}

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              Vous pouvez aussi nous écrire directement à{' '}
              <a href="mailto:contact@colossus.fr" className="text-blue-600 hover:underline font-medium">
                contact@colossus.fr
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;