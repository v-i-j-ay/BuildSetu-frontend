import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-xl font-bold text-white">BuildSetu</h2>
          <p className="mt-2 text-sm">
            Connecting labours, contractors and suppliers on one platform.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
           <Link to="/" ><li>Home</li></Link>
            <Link to="labours" ><li>Labours</li></Link>
            <Link to="contractors" ><li>Contractors</li></Link>
            <Link to="suppliers" ><li>Suppliers</li></Link>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-2">Contact</h3>
          <p className="text-sm">Email:BuildSetu@gmail.com</p>
          <p className="text-sm">Phone:+91 9542014566</p>
        </div>

      </div>

      <div className="text-center text-sm bg-gray-800 py-3">
        © 2025 BuildSetu. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
