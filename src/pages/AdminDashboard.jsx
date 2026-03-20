import { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [labours, setLabours] = useState([]);
  const [contractors, setContractors] = useState([]);
  const [loading, setLoading] = useState(true);

  const [processingLabour, setProcessingLabour] = useState(null);
  const [processingContractor, setProcessingContractor] = useState(null);

  const API = import.meta.env.VITE_API_URL;

  const fetchData = async () => {
    try {
      const labourRes = await axios.get(`${API}/api/labours/pending`);
      const contractorRes = await axios.get(`${API}/api/contractors/pending`);

      setLabours(labourRes.data);
      setContractors(contractorRes.data);
      setLoading(false);
    } catch (error) {
      console.log("FETCH ERROR:", error);
      alert("Failed to load dashboard");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ===== LABOUR ACTIONS =====

  const approveLabour = async (id) => {
    try {
      setProcessingLabour({ id, action: "approve" });

      const res = await axios.patch(`${API}/api/labours/${id}/approve`);
      console.log("APPROVE SUCCESS:", res.data);

      setLabours((prev) => prev.filter((l) => l._id !== id));
    } catch (error) {
      console.log("APPROVE ERROR:", error);
      alert("Approve failed");
    } finally {
      setProcessingLabour(null);
    }
  };

  const rejectLabour = async (id) => {
    try {
      setProcessingLabour({ id, action: "reject" });

      const res = await axios.patch(`${API}/api/labours/${id}/reject`);
      console.log("REJECT SUCCESS:", res.data);

      setLabours((prev) => prev.filter((l) => l._id !== id));
    } catch (error) {
      console.log("REJECT ERROR:", error);
      alert("Reject failed");
    } finally {
      setProcessingLabour(null);
    }
  };

  // ===== CONTRACTOR ACTIONS =====

  const approveContractor = async (id) => {
    try {
      setProcessingContractor({ id, action: "approve" });

      const res = await axios.patch(`${API}/api/contractors/${id}/approve`);
      console.log("APPROVE CONTRACTOR:", res.data);

      setContractors((prev) => prev.filter((c) => c._id !== id));
    } catch (error) {
      console.log("APPROVE CONTRACTOR ERROR:", error);
      alert("Approve failed");
    } finally {
      setProcessingContractor(null);
    }
  };

  const rejectContractor = async (id) => {
    try {
      setProcessingContractor({ id, action: "reject" });

      const res = await axios.patch(`${API}/api/contractors/${id}/reject`);
      console.log("REJECT CONTRACTOR:", res.data);

      setContractors((prev) => prev.filter((c) => c._id !== id));
    } catch (error) {
      console.log("REJECT CONTRACTOR ERROR:", error);
      alert("Reject failed");
    } finally {
      setProcessingContractor(null);
    }
  };

  // ===== LOADING =====

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
              <div key={labour._id} className="bg-white shadow-lg rounded-xl p-6 text-center border-2">

                <img
                  src={labour.profile || "https://tse2.mm.bing.net/th/id/OIP.bJpr9jpclIkXQT-hkkb1KQHaHa?pid=Api&P=0&h=180"}
                  alt={labour.name}
                  className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
                />

                <h3 className="text-lg font-bold">{labour.name}</h3>

                <p className="text-gray-600 text-sm">📞 {labour.phone}</p>
                <p className="text-gray-600 text-sm">🛠 {labour.category}</p>
                <p className="text-gray-600 text-sm">📍 {labour.location}</p>
                <p className="text-gray-600 text-sm mb-4">
                  ⏳ {labour.experience} years experience
                </p>

                <div className="flex gap-3">
                  <button
                    disabled={processingLabour?.id === labour._id}
                    onClick={() => approveLabour(labour._id)}
                    className="flex-1 bg-green-500 text-white py-2 rounded-lg"
                  >
                    {processingLabour?.id === labour._id && processingLabour?.action === "approve"
                      ? "Processing..."
                      : "Approve"}
                  </button>

                  <button
                    disabled={processingLabour?.id === labour._id}
                    onClick={() => rejectLabour(labour._id)}
                    className="flex-1 bg-red-500 text-white py-2 rounded-lg"
                  >
                    {processingLabour?.id === labour._id && processingLabour?.action === "reject"
                      ? "Processing..."
                      : "Reject"}
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
              <div key={contractor._id} className="bg-white shadow-lg rounded-xl p-6 text-center border-2">

                <img
                  src={contractor.profile || "https://tse2.mm.bing.net/th/id/OIP.bJpr9jpclIkXQT-hkkb1KQHaHa?pid=Api&P=0&h=180"}
                  alt={contractor.name}
                  className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
                />

                <h3 className="text-lg font-bold">{contractor.name}</h3>

                <p className="text-gray-600 text-sm">📞 {contractor.phone}</p>
                <p className="text-gray-600 text-sm">🏢 {contractor.category}</p>
                <p className="text-gray-600 text-sm">📍 {contractor.location}</p>
                <p className="text-gray-600 text-sm mb-4">
                  ⏳ {contractor.experience} years experience
                </p>

                <div className="flex gap-3">
                  <button
                    disabled={processingContractor?.id === contractor._id}
                    onClick={() => approveContractor(contractor._id)}
                    className="flex-1 bg-green-500 text-white py-2 rounded-lg"
                  >
                    {processingContractor?.id === contractor._id && processingContractor?.action === "approve"
                      ? "Processing..."
                      : "Approve"}
                  </button>

                  <button
                    disabled={processingContractor?.id === contractor._id}
                    onClick={() => rejectContractor(contractor._id)}
                    className="flex-1 bg-red-500 text-white py-2 rounded-lg"
                  >
                    {processingContractor?.id === contractor._id && processingContractor?.action === "reject"
                      ? "Processing..."
                      : "Reject"}
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