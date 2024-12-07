import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosinstance2 } from "../api/axiosinstance";

const AddNewAddress = () => {
  const [state, setState] = useState({});
  const navigate = useNavigate();

  let { ename, email, mobile, address, pincode } = state;

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(name, value);
    console.log({ ...state, [name]: value });

    setState({ ...state, [name]: value });
  };

  const fetchApi = () => {
    axiosinstance2.post("/address/", state).then((res) => {
      console.log(res.data);

      navigate("/address");
    });
  };

  const addData = () => {
    fetchApi();
  };

  return (
    <div className="w-[100vw] h-[100vh]  bg-slate-100 ">
      <div className="w-[95vw] flex items-center justify-center  ">
        <form
          // action=""
          className=" flex flex-col w-[40vw] mt-10 m-auto border border-gray-500  p-6 rounded-lg "
          onSubmit={addData}
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
            onClick={addData}
            className="border border-black-600  p-4 rounded-lg  m-auto bg-green-600 text-xl text-white"
          >
            Add New Address
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewAddress;
