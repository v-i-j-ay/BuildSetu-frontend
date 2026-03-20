import bs from "../photos/bs.jpeg";
import appa from "../photos/appa.jpeg"
import hr from "../photos/hr.jpg"
import iw from "../photos/iw.jpg"
import pp from "../photos/pp.jpg"
import ver from "../photos/ver.png"
import qu from "../photos/qu.png"
import cs from "../photos/cs.jpg"
import { Link } from "react-router-dom";



const Home = () => {

  const projects = [
  { title: "Apartment Construction", img: appa },
  { title: "House Renovation", img: hr },
  { title: "Interior Work", img: iw },
  { title: "Painting Project", img: pp},
];




  return (
    <div className="w-full">

     
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            BuildSetu
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
           One platform connecting you with skilled workers, verified contractors, and reliable construction materials for construction, repair, cleaning, and other essential services — all in one place.

          </p>

          <div className="mt-6 flex gap-4">
            <Link to="/labours"><button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Hire Labour
            </button></Link>
            <Link to="contractors" ><button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
              Find Contractor
            </button></Link> 
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={bs}
            alt="Construction"
            className="rounded-xl shadow-2xl  max-h-96 object-cover"
          />
        </div>

      </section>
<div className="max-w-6xl mx-auto py-12 px-4">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* Verified Services */}
    <div className="bg-linear-to-br from-green-100 to-green-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
      <img
        src={ver}
        alt="Verified Services"
        className="h-24 mx-auto mb-4"
      />
      <p className="text-center text-lg font-semibold text-green-800">
        Verified Services
      </p>
    </div>

    {/* Quality Materials */}
    <div className="bg-linear-to-br from-yellow-100 to-yellow-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
      <img
        src={qu}
        alt="Quality Materials"
        className="h-24 mx-auto mb-4"
      />
      <p className="text-center text-lg font-semibold text-yellow-800">
        Quality Materials
      </p>
    </div>

    {/* Customer Support */}
    <div className="bg-linear-to-br from-blue-100 to-blue-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
      <img
        src={cs}
        alt="Customer Support"
        className="h-24 mx-auto mb-4"
      />
      <p className="text-center text-lg font-semibold text-blue-800">
        Customer Support
      </p>
    </div>

  </div>
</div>


      {/* CATEGORIES */}
<section className="bg-gray-600 py-12 m-5 rounded-2xl">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center text-gray-900">
      Our Services
    </h2>
    <p className="text-center text-gray-200 mt-2">
      Choose what you are looking for
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
      
<div className="bg-blue-300 p-6 rounded-xl shadow hover:shadow-lg transition relative">
  <h3 className="text-xl font-semibold">Labours</h3>
  <p className="text-gray-600 mt-2">
    Masons, Electricians, Plumbers, Painters & more
  </p>
  {/* Right corner small action */}
  <Link to="/labours"><button className="absolute bottom-4 right-4 text-sm font-semibold text-blue-700 hover:text-blue-900 transition">
    Explore →
  </button></Link>
</div>


<div className="bg-green-300 p-6 rounded-xl shadow hover:shadow-lg transition relative">
  <h3 className="text-xl font-semibold">Contractors</h3>
  <p className="text-gray-600 mt-2">
    Manage full construction or specific works
  </p>
  <Link to="/contractors" ><button className="absolute bottom-4 right-4 text-sm font-semibold text-green-700 hover:text-green-900 transition">
    Explore →
  </button></Link>
</div>


<div className="bg-violet-300 p-6 rounded-xl shadow hover:shadow-lg transition relative">
  <h3 className="text-xl font-semibold">Materials</h3>
  <p className="text-gray-600 mt-2">
    Cement, electrical, plumbing & building materials
  </p>
  <Link to="/suppliers"><button className="absolute bottom-4 right-4 text-sm font-semibold text-violet-700 hover:text-violet-900 transition">
    Explore →
  </button></Link>
</div>

    </div>
  </div>
</section>
<div className="max-w-7xl mx-auto px-4 py-12">
  {/* Heading */}
  <div className="mb-8">
    <h2 className="text-3xl font-bold text-gray-800">
      Latest Projects
    </h2>
    <p className="text-gray-500 mt-2">
      Recently completed projects by verified contractors
    </p>
  </div>

  {/* Cards grid will come here */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
  {projects.map((project, index) => (
    <div
      key={index}
      className="
        bg-white rounded-xl shadow-md overflow-hidden
        transform transition duration-300
        hover:rotate-1 hover:scale-105 hover:shadow-xl
      "
    >
      <img
        src={project.img}
        alt={project.title}
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500">
          Completed by verified contractors
        </p>
      </div>
    </div>
  ))}
</div>

</div>

    

{/* WHY CHOOSE US */}
      <section className="py-12 bg-pink-300 m-2 rounded-2xl">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-6">Why Choose BuildSetu?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <WhyCard text="Verified Professionals" />
            <WhyCard text="Easy Booking Process" />
           <WhyCard text="All Services in One Place" />
          </div>
        </div>
      </section>

<section className="py-16 text-center">
  <h2 className="text-3xl font-bold text-gray-800">
    Are you a Labour Or Contractor?
  </h2>
  <p className="text-gray-600 mt-2">
    Register with BuildSetu and start getting work today
  </p>

  <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
    <Link to="/login">Register Now</Link>
  </button>
</section>
  
  {/* SUPPLIER OFFERS MARQUEE */}
<section className="bg-gray-800 py-6 rounded-md">
  <div className="overflow-x-auto">
    <div className="flex gap-4 px-4 w-max">
      
      <div className="bg-white shadow-md rounded-xl px-6 py-4 min-w-50 hover:scale-105 transition">
        🔥 Cement 10% OFF
      </div>

      <div className="bg-white shadow-md rounded-xl px-6 py-4 min-w-55 hover:scale-105 transition">
        ⚡ Electrical Items Discount
      </div>

      <div className="bg-white shadow-md rounded-xl px-6 py-4 min-w-50 hover:scale-105 transition">
        🧱 Tiles Special Offer
      </div>

      <div className="bg-white shadow-md rounded-xl px-6 py-4 min-w-55 hover:scale-105 transition">
        🧹 Cleaning Supplies Deal
      </div>

      <div className="bg-white shadow-md rounded-xl px-6 py-4 min-w-50 hover:scale-105 transition">
        🚰 Plumbing Materials Sale
      </div>

      <div className="bg-white shadow-md rounded-xl px-6 py-4 min-w-50 hover:scale-105 transition">
        🪵 Wood & Plywood Offer
      </div>

    </div>
  </div>
</section>
    </div>
    
    
  );
};


const WhyCard = ({ text }) => (
  <div className="bg-gray-100 p-6 rounded-xl">
    <p className="font-medium text-gray-900">{text}</p>
  </div>
);

export default Home;
