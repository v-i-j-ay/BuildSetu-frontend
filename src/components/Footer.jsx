
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">

      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white">BuildSetu</h2>
          <p className="mt-3 text-sm leading-relaxed">
            BuildSetu connects skilled labour, contractors, and material
            suppliers on one platform to make construction services
            faster, easier, and more reliable.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">

            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/labours" className="hover:text-white transition">
                Labours
              </Link>
            </li>

            <li>
              <Link to="/contractors" className="hover:text-white transition">
                Contractors
              </Link>
            </li>

            <li>
              <Link to="/suppliers" className="hover:text-white transition">
                Materials
              </Link>
            </li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-white mb-3">Contact</h3>
          <p className="text-sm">📧 Email: BuildSetu@gmail.com</p>
          <p className="text-sm mt-1">📞 Phone: +91 9542014566</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-sm bg-gray-800 py-3">
        © {year} BuildSetu. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
