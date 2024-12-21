import React, { useState, useEffect } from "react";
import axiosinstance from "../../api/axiosinstance";
import CountUp from "react-countup";
import { NavLink } from "react-router-dom";

const Women = () => {
  let [state, setState] = useState([]);

  let fetchApi = () => {
    let x = axiosinstance.get("/products");
    x.then((res) => {
      const selectProduct = res.data.slice(15, 20);
      setState(selectProduct);
    });
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="flex flex-wrap justify-center gap-10 p-6 m-auto bg-slate-100">
      {state.map(({ id, title, description, image, price }) => {
        return (
          <div
            className="flex flex-col items-center w-[350px] h-[350px]  box-border relative shadow-xl  border  border-gray-200 bg-white rounded overflow-hidden"
            key={id}
            
          >
            <img
              className="h-[150px] w-[150px] m-auto object-contain bg-transparent "
              src={image}
              alt="image"
            />
            <h1 className=" p-[5px] m-1 text-lg text-red-500 ">{title.slice(0,20)}</h1>
            <h1 className="text-2xl text-black p-[5px] m-1">
              <CountUp end={price} prefix="$" />
            </h1>
            <p className="p-[5px] m-1 text-sm">{description.slice(0, 40)}</p>
            <NavLink to={"/address"}>
              <button className="  bg-[#54e220]  p-1 border rounded-lg  text-black font-[1100] mb-2 ">
                Buy Now
              </button>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default Women;
