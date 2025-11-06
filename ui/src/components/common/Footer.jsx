const Footer = () => {
  return (
    <footer className="bg-primary text-green-900 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <p className="text-sm">
          © {new Date().getFullYear()} B2B Agricultural Marketplace. All rights reserved.
        </p>

        <div className="flex gap-4 mt-3 sm:mt-0 text-sm">
          <a href="#" className="hover:text-secondary transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-secondary transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
