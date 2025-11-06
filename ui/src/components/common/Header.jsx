import { Sprout } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <div className="bg-gray-100 rounded-full p-2">
            <Sprout className="text-primary" size={28} />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold">
            B2B Agricultural Marketplace
          </h1>
        </div>

  
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="/" className="hover:text-secondary transition-colors">
            Home
          </a>
          <a href="/add-requirement" className="hover:text-secondary transition-colors">
            Add Requirement
          </a>
          <a href="#" className="hover:text-secondary transition-colors">
            About
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
