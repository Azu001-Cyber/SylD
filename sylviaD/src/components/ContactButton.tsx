import { MessageCircle } from 'lucide-react';

export default function ContactButton() {
  return (
    <a
      href="mailto:techclime1@gmail.com"
      className="fixed bottom-8 right-8 bg-terracotta hover:bg-terracotta-dark text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 z-40 group font-medium"
      aria-label="Chat with me"
    >
      <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
      <span className="hidden sm:inline">Chat with me</span>
    </a>
  );
}
