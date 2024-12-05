import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { axiosinstance2 } from "../api/axiosinstance";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
const Address = () => {
  let [state, setState] = useState([]);
  let fetchApi = () => {
    let x = axiosinstance2.get("/address");
    console.log(x);
    x.then((res) => {
      console.log(res.data);
      setState(res.data);
    });
  };
  useEffect(() => {
    fetchApi();
  }, []);

  const deleteData = (id) => {
    let x = axiosinstance2.delete(`/address/${id}`).then(() => {
      fetchApi();
    });
    console.log(x);
  };
  return (
    <div>
      <div className="bg-blue-600  p-5 text-white  text-cente flex">
        {/* <img
          className="h-8 w-auto"
          src="https://logosandtypes.com/wp-content/uploads/2020/11/shopify.svg"
          alt="Your Company"
        /> */}
        <div className="w-[50%] text-3xl">
          <Link to={"/"}>MyCart.com</Link>
        </div>
        <div className="text-2xl">ADDRESS</div>
      </div>
      <div>
        {state.map(({ id, ename, mobile, address, pincode, email }) => {
          return (
            <div key={id} className="border border-red-300 p-10 flex gap-10 ">
              <input type="radio" name="address" />
              <div>
                <h3 className="text-xl">{ename}</h3>
                <span>{email}</span>
                <p>{address}</p>
                <p>{pincode}</p>
                <p>{mobile}</p>
              </div>
              <div className="w-[20%] h-[10%] flex justify-around">
                <button
                  onClick={() => {
                    deleteData(id);
                  }}
                  className="flex justify-around align-center rounded-md w-[45%] text-white p-2 bg-red-500"
                >
                  Delete
                  <span>
                    <MdDelete />
                  </span>
                </button>
                <button className="flex justify-around align-center rounded-md w-[45%] text-white p-2 bg-blue-500">
                  Edit <MdEdit />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Address;
