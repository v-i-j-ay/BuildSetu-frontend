import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 relative">

      <div className="max-w-4xl mx-auto bg-gray-500 p-8 rounded-2xl shadow-md text-white">
        <h1 className="text-4xl font-bold text-center mb-6">
          🤝 Welcome to BuildSetu
        </h1>

        <p className="text-lg text-center mb-10">
          BuildSetu is your trusted platform for finding reliable service professionals.
          We make it easy to connect with skilled workers who deliver quality services
          you can depend on.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-2">👥 Who We Are</h2>
            <p>
              BuildSetu is a service platform created to help customers find verified
              and experienced professionals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">🛠️ What We Offer</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>✔️ Verified service professionals</li>
              <li>✔️ Quality work</li>
              <li>✔️ 24/7 support</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">🎯 Our Mission</h2>
            <p>To make service booking simple and trustworthy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">👁️ Our Vision</h2>
            <p>To connect customers and professionals with confidence.</p>
          </section>
        </div>
      </div>

      
    </div>
  );
};

export default About;
