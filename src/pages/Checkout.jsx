import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {

  const navigate = useNavigate();

  const [form,setForm] = useState({
    name:"",
    phone:"",
    email:"",
    address:"",
    city:"",
    state:"",
    pincode:""
  });

  const [errors,setErrors] = useState({});

  const handleChange = (e) => {
    setForm({...form,[e.target.name]:e.target.value});
  };

  const validate = () => {

    let newErrors = {};

    if(!form.name) newErrors.name="Name is required";

    if(!form.phone) newErrors.phone="Phone is required";
    else if(!/^[0-9]{10}$/.test(form.phone))
      newErrors.phone="Enter valid 10 digit phone";

    if(!form.email) newErrors.email="Email is required";

    if(!form.address) newErrors.address="Address required";

    if(!form.city) newErrors.city="City required";

    if(!form.state) newErrors.state="State required";

    if(!form.pincode) newErrors.pincode="Pincode required";

    setErrors(newErrors);

    return Object.keys(newErrors).length===0;
  };

  const handleOrder = () => {

    if(!validate()) return;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      customer:form,
      items:cart,
      date:new Date().toLocaleString()
    };

    localStorage.setItem("orders",JSON.stringify([...orders,newOrder]));

    localStorage.removeItem("cart");

    navigate("/success");
  };

  return (

    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">

      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-xl">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Checkout Details
        </h2>

        <div className="space-y-4">

          <div>
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="border p-3 w-full rounded"
            />
            <p className="text-red-500 text-sm">{errors.name}</p>
          </div>

          <div>
            <input
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className="border p-3 w-full rounded"
            />
            <p className="text-red-500 text-sm">{errors.phone}</p>
          </div>

          <div>
            <input
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="border p-3 w-full rounded"
            />
            <p className="text-red-500 text-sm">{errors.email}</p>
          </div>

          <div>
            <textarea
              name="address"
              placeholder="Street Address"
              onChange={handleChange}
              className="border p-3 w-full rounded"
            />
            <p className="text-red-500 text-sm">{errors.address}</p>
          </div>

          <div className="grid grid-cols-2 gap-3">

            <div>
              <input
                name="city"
                placeholder="City"
                onChange={handleChange}
                className="border p-3 w-full rounded"
              />
              <p className="text-red-500 text-sm">{errors.city}</p>
            </div>

            <div>
              <input
                name="state"
                placeholder="State"
                onChange={handleChange}
                className="border p-3 w-full rounded"
              />
              <p className="text-red-500 text-sm">{errors.state}</p>
            </div>

          </div>

          <div>
            <input
              name="pincode"
              placeholder="Pincode"
              onChange={handleChange}
              className="border p-3 w-full rounded"
            />
            <p className="text-red-500 text-sm">{errors.pincode}</p>
          </div>

          <button
            onClick={handleOrder}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded font-semibold"
          >
            Place Order
          </button>

        </div>

      </div>

    </div>

  );
};

export default Checkout;