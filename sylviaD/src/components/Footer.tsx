

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-cream-dark border-t border-brown-light border-opacity-20">
      <div className="container mx-auto px-6">

        <div className="text-brown-light font-medium text-center">
          <p>&copy; <span>{currentYear}</span> Multi-Disciplinary Professional. 
          <span className=""> All rights reserved.</span>
          </p>

        </div>
      </div>
    </footer>
  );
}
