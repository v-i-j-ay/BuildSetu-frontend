
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">

      <div className="max-w-5xl mx-auto bg-gray-600 text-white p-10 rounded-2xl shadow-lg">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-6">
          🤝 Welcome to BuildSetu
        </h1>

        {/* Introduction */}
        <p className="text-lg text-center mb-10">
          BuildSetu is a digital platform that connects customers with skilled
          service professionals such as electricians, plumbers, carpenters,
          painters, and construction labour. Our goal is to make finding
          reliable workers easy, fast, and trustworthy.
        </p>

        <div className="space-y-8">

          {/* Who We Are */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">👥 Who We Are</h2>
            <p>
              BuildSetu acts as a bridge between customers and service workers.
              Many people struggle to find skilled labour quickly, and workers
              also struggle to find regular job opportunities. Our platform
              solves this problem by connecting both sides in one place.
            </p>
          </section>

          {/* What We Offer */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">🛠️ What We Offer</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>✔️ Verified and skilled service professionals</li>
              <li>✔️ Easy service booking</li>
              <li>✔️ Direct communication with workers via WhatsApp</li>
              <li>✔️ Reliable and quality work</li>
              <li>✔️ Fast and convenient service connection</li>
            </ul>
          </section>

          {/* Materials Quality */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">🏗️ Quality Construction Materials</h2>
            <p>
              BuildSetu also assists customers in providing high-quality
              construction materials required for the work. We ensure that the
              materials supplied meet quality standards so that customers get
              durable and reliable results for their projects.
            </p>
          </section>

          {/* Worker Verification */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">🔒 Worker Verification & Security</h2>
            <p>
              BuildSetu follows a secure verification process to ensure that
              only trusted professionals are listed on the platform. Workers
              must send their registration details through email. After that,
              the admin carefully reviews the information and verifies the
              worker before approving their profile. Only verified workers are
              shown to customers.
            </p>
          </section>

          {/* Why Choose */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">⭐ Why Choose BuildSetu</h2>
            <p>
              BuildSetu saves time and effort for customers by helping them
              quickly find trusted workers. At the same time, it provides job
              opportunities for skilled professionals and helps them reach more
              customers.
            </p>
          </section>

          {/* Mission */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">🎯 Our Mission</h2>
            <p>
              Our mission is to simplify service booking and make it easier for
              people to find reliable workers while also supporting workers by
              giving them better job opportunities.
            </p>
          </section>

          {/* Vision */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">👁️ Our Vision</h2>
            <p>
              Our vision is to become a trusted platform that connects customers
              and service professionals across cities, making home and
              construction services more accessible and organized.
            </p>
          </section>

        </div>
      </div>

    </div>
  );
};

export default About;
