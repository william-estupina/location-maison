import { useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact depuis le site - ${name}`);
    const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:contact@location-lestiac.fr?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">
          Nom complet
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-warm-gray-light bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta transition-colors"
          placeholder="Votre nom"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-warm-gray-light bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta transition-colors"
          placeholder="votre@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-warm-gray-light bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta transition-colors resize-none"
          placeholder="Votre message..."
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white font-medium px-6 py-3 rounded-lg transition-colors"
      >
        <Send size={16} />
        Envoyer le message
      </button>
    </form>
  );
}
