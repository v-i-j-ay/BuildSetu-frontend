import { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {

  const [labours, setLabours] = useState([]);
  const [contractors, setContractors] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const labourRes = await axios.get("http://localhost:5000/api/labours/pending");
      const contractorRes = await axios.get("http://localhost:5000/api/contractors/pending");

      setLabours(labourRes.data);
      setContractors(contractorRes.data);
      setLoading(false);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const approveLabour = async (id) => {
    await axios.patch(`http://localhost:5000/api/labours/${id}/approve`);
    setLabours(labours.filter((l) => l._id !== id));
  };

  const rejectLabour = async (id) => {
    await axios.patch(`http://localhost:5000/api/labours/${id}/reject`);
    setLabours(labours.filter((l) => l._id !== id));
  };

  const approveContractor = async (id) => {
    await axios.patch(`http://localhost:5000/api/contractors/${id}/approve`);
    setContractors(contractors.filter((c) => c._id !== id));
  };

  const rejectContractor = async (id) => {
    await axios.patch(`http://localhost:5000/api/contractors/${id}/reject`);
    setContractors(contractors.filter((c) => c._id !== id));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-xl">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-8 text-center">
          Admin Dashboard
        </h1>

        {/* LABOURS */}

        <h2 className="text-xl font-semibold mb-4">
          Pending Labours
        </h2>

        {labours.length === 0 ? (
          <p className="text-gray-500 mb-10">
            No pending labour requests
          </p>
        ) : (

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">

          {labours.map((labour) => (

            <div
              key={labour._id}
              className="bg-white shadow-lg rounded-xl p-6 text-center"
            >

              {/* Profile Picture */}

              <img
                src={labour.profile || "https://i.pravatar.cc/150"}
                alt={labour.name}
                className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
              />

              <h3 className="text-lg font-bold">
                {labour.name}
              </h3>

              <p className="text-gray-600 text-sm">
                📞 {labour.phone}
              </p>

              <p className="text-gray-600 text-sm">
                🛠 {labour.category}
              </p>

              <p className="text-gray-600 text-sm">
                📍 {labour.location}
              </p>

              <p className="text-gray-600 text-sm mb-4">
                ⏳ {labour.experience} yrs
              </p>

              <div className="flex gap-3">

                <button
                  onClick={() => approveLabour(labour._id)}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg"
                >
                  Approve
                </button>

                <button
                  onClick={() => rejectLabour(labour._id)}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
                >
                  Reject
                </button>

              </div>

            </div>

          ))}

        </div>

        )}

        {/* CONTRACTORS */}

        <h2 className="text-xl font-semibold mb-4">
          Pending Contractors
        </h2>

        {contractors.length === 0 ? (
          <p className="text-gray-500">
            No pending contractor requests
          </p>
        ) : (

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {contractors.map((contractor) => (

            <div
              key={contractor._id}
              className="bg-white shadow-lg rounded-xl p-6 text-center"
            >

              <img
                src={contractor.profile || "https://i.pravatar.cc/150"}
                alt={contractor.name}
                className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
              />

              <h3 className="text-lg font-bold">
                {contractor.name}
              </h3>

              <p className="text-gray-600 text-sm">
                📞 {contractor.phone}
              </p>

              <p className="text-gray-600 text-sm">
                🏢 {contractor.company}
              </p>

              <p className="text-gray-600 text-sm mb-4">
                📍 {contractor.location}
              </p>

              <div className="flex gap-3">

                <button
                  onClick={() => approveContractor(contractor._id)}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg"
                >
                  Approve
                </button>

                <button
                  onClick={() => rejectContractor(contractor._id)}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
                >
                  Reject
                </button>

              </div>

            </div>

          ))}

        </div>

        )}

      </div>

    </div>
  );
}

export default AdminDashboard;