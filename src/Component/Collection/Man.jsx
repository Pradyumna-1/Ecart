import React, { useEffect, useState } from "react";
import axiosinstance from "../../api/axiosinstance";
import CountUp from "react-countup";
import { NavLink } from "react-router-dom";

const Man = () => {
  let [state, setState] = useState([]);
  let fetchApi = () => {
    let x = axiosinstance.get("/products");
    console.log(x);
    x.then((res) => {
      const selectProduct = res.data.slice(1, 4);
      console.log(selectProduct);
      setState(selectProduct);
    });
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="flex flex-wrap justify-center gap-10 p-6 m-auto bg-slate-100 ">
      {state.map(({ title, price, image, id, description }) => {
        return (
          <div
            key={id}
            className="flex flex-col items-center w-[350px] h-[350px
              ]  box-border border relative overflow-hidden rounded-xl bg-white border-gray-200"
          >
            <img
              className="
            h-[150px] w-auto m-auto object-contain bg-transparent
            
            "
              src={image}
              alt="image"
            />
            <div className="p-[5px] m-1 text-lg text-red-500 ">{title}</div>
            <div prefix="$" className="p-[5px] m-1 text-2xl text-black">
              <CountUp end={price} prefix="$" />
            </div>
            {/* <div>{id}</div> */}
            <div className="p-[5px] m-1 text-sm">
              {description.slice(0, 40)}
            </div>

            <NavLink to={"/address"}>
              <button
                className="border rounded-lg
             bg-[#54e220]  p-1 mb-2 text-black font-[1100]   "
              >
                Buy Now
              </button>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default Man;
