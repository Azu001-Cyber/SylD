

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-cream-dark border-t border-brown-light border-opacity-20">
      <div className="container mx-auto px-6">

        <div className="text-brown-light font-medium text-center">
          <p>&copy; <span>{currentYear}</span> Multi-Disciplinary Professional. 
          <span className=""> All rights reserved.</span>
          </p>

          <div className="mt-5">
            <ul className="flex items-center justify-center gap-5 font-semibold">
              <li className="hover:text-terracotta text-terracotta md:text-brown transition duration-300 ease-in-out"><a href="https://www.linkedin.com/in/sylvia-duruson-5128b31b6?">LinkedIn</a></li>
              <li className="hover:text-terracotta text-terracotta md:text-brown transition duration-300 ease-in-out"><a href="https://www.upwork.com/freelancers/~0114d726578d25903f?companyReference=1524697386281852929&mp_source=share">Upwork</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
