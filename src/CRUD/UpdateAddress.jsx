import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { axiosinstance2 } from "../api/axiosinstance";

const UpdateAddress = () => {
  let [state, setState] = useState({});
  let navigate = useNavigate();
  console.log(navigate);

  let location = useLocation();
  let id = location.state.id;
  //   console.log(location.state.id);
  let { ename, email, mobile, address, pincode } = state;

  let fetchApi = () => {
    let x = axiosinstance2.get(`/address/${id}`);
    x.then((res) => {
      setState(res.data);
    });
  };
  useEffect(() => {
    fetchApi();
  }, []);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(name, value);
    console.log({ ...state, [name]: value });

    setState({ ...state, [name]: value });
  };

  const updateData = () => {
    console.log("1244");

    let x = axiosinstance2.put(`/address/${id}`, state);
    console.log(x);
    console.log(state);

    setState({ ename: "", email: "", mobile: "", address: "", pincode: "" });
    console.log(x);
    navigate("/address");
  };

  return (
    <div className="w-[100vw] h-[100vh]  bg-slate-100 ">
      <div className="w-[95vw] flex items-center justify-center  ">
        <form
          // action=""
          className=" flex flex-col w-[40vw] mt-10 m-auto border border-gray-500  p-6 rounded-lg "
          onSubmit={updateData}
        >
          <input
            type="text"
            name="ename"
            placeholder="Update your name"
            value={ename}
            onChange={(e) => {
              handleChange(e);
            }}
            className="border border-black rounded-md m-2 p-4 text-xl 
            block text-gray-900 placeholder:text-gray-400 
     font-normal        
            "
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              handleChange(e);
            }}
            className="border border-black rounded-md m-2 p-4 text-xl 
            block text-gray-900 placeholder:text-gray-400 font-normal"
            placeholder="Update your email"
          />
          <input
            type="text"
            name="address"
            value={address}
            onChange={(e) => {
              handleChange(e);
            }}
            className="border border-black rounded-md m-2 p-4 text-xl 
            block text-gray-900 placeholder:text-gray-400 font-normal"
            placeholder="Update your address "
          />
          <input
            type="number"
            name="pincode"
            value={pincode}
            onChange={(e) => {
              handleChange(e);
            }}
            className=" border border-black rounded-md m-2 p-4 text-xl 
            block text-gray-900 placeholder:text-gray-400 font-normal"
            placeholder="Update your pincode "
            // border border-black m-2 p-4 text-xl
          />
          <input
            type="number"
            name="mobile"
            value={mobile}
            onChange={(e) => {
              handleChange(e);
            }}
            className="border border-black rounded-md m-2 p-4 text-xl 
            block text-gray-900 placeholder:text-gray-400 font-normal"
            placeholder="Update your mobile"
          />
          <button
            type="button"
            value="update address"
            onClick={updateData}
            className="border border-black-600  p-4 rounded-lg  m-auto bg-green-400 text-xl"
          >
            Update Address
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateAddress;
