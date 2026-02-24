export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-cream-dark border-t border-brown-light border-opacity-20">
      <div className="container mx-auto px-6">
        <div className="text-center text-brown-light">
          <p>&copy; <span>{currentYear}</span> Multi-Disciplinary Professional. Crafted with care.</p>
        </div>
      </div>
    </footer>
  );
}
