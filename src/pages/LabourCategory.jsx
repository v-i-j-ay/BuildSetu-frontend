import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function LabourCategory() {
  const { category } = useParams();
  const navigate = useNavigate();

  const [labours, setLabours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${import.meta.env.VITE_API_URL}/api/labours/category/${category}`)
      .then((res) => {
        setLabours(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [category]);

  // PHONE VALIDATION FUNCTION
  const isValidPhone = (phone) => {
    return /^[0-9]{10}$/.test(phone);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <button
        onClick={() => navigate("/labours")}
        className="mb-6 px-6 py-2 bg-gray-800 text-white rounded-lg"
      >
        ⬅ Go Back
      </button>

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        {category} Workers
      </h1>

      {loading && (
        <div className="flex justify-center items-center mt-20">
          <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-indigo-600"></div>
        </div>
      )}

      {!loading && labours.length === 0 && (
        <div className="text-center text-xl text-gray-500 mt-20">
          ❌ No Profiles Found
        </div>
      )}

      {!loading && labours.length > 0 && (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {labours.map((labour) => (
            <div
              key={labour._id}
              className="bg-white border-2 rounded-3xl shadow-md hover:shadow-xl transition p-8"
            >
              <div className="flex items-center gap-4">
                <img
                  src={
                    labour.profile
                      ? labour.profile
                      : "https://tse2.mm.bing.net/th/id/OIP.bJpr9jpclIkXQT-hkkb1KQHaHa?pid=Api&P=0&h=180"
                  }
                  alt={labour.name}
                  className="w-20 h-20 rounded-full border-4 border-indigo-100 object-cover"
                />

                <div>
                  <h3 className="text-xl font-bold">{labour.name}</h3>

                  <p className="text-indigo-600 font-medium">
                    {labour.category}
                  </p>

                  <p className="text-yellow-500 text-sm">
                    ⭐ {labour.rating || "4.5"} Rating
                  </p>
                </div>
              </div>

              <div className="mt-4 text-gray-600 space-y-1">
                <p>📍 {labour.location || "Local Area"}</p>

                <p>📞 {labour.phone}</p>
                 <p>📧 {labour.email}</p>

                <p>⏳ {labour.experience} years experience</p>
              </div>

              <div className="mt-3">
                <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                  🟢 Available
                </span>
              </div>

              <div className="flex gap-3 mt-6">
                {/* CALL BUTTON */}

                <button
                  onClick={() => {
                    if (!isValidPhone(labour.phone)) {
                      alert("Invalid phone number");
                      return;
                    }
                    window.location.href = `tel:${labour.phone}`;
                  }}
                  className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-semibold"
                >
                  Call
                </button>

                {/* WHATSAPP BUTTON */}

                <button
  onClick={() => {
    if (!isValidPhone(labour.phone)) {
      alert("Invalid phone number");
      return;
    }

    const message = `Hello ${labour.name},

I found your profile on BuildSetu and was impressed by your experience in ${labour.category}.

We currently have a requirement for skilled professionals and would like to explore the possibility of working with you.

Could you please share:

• Your availability
• Expected charges
• Previous work experience
• Current work location

We can discuss further details based on your response.

Looking forward to hearing from you.

Thank you.`;

    window.open(
      `https://wa.me/91${labour.phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }}
  className="flex-1 bg-green-500 text-white py-3 rounded-xl font-semibold"
>
  WhatsApp
</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LabourCategory;
