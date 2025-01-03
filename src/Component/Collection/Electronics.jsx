import React, { useEffect, useState } from "react";
import axiosinstance from "../../api/axiosinstance";
import { NavLink } from "react-router-dom";
import CountUp from "react-countup";

const Electronics = () => {
  let [state, setState] = useState([]);
  let fetchApi = () => {
    let x = axiosinstance.get("/products");
    x.then((res) => {
      const selectProduct = res.data.slice(9, 14);
      setState(selectProduct);
    });
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-10 p-6 m-auto bg-slate-100 ">
        {state.map(({ title, price, image, id, description }) => {
          return (
            <div
              className="flex flex-col items-center w-[350px] h-[350px] box-border relative  shadow-xl border border-gray-200 bg-white rounded-lg overflow-hidden  "
              key={id}
              data-aos="flip-right"
            >
              <img
                className="h-[150px] w-auto m-auto  object-contain bg-transparent  "
                src={image}
                alt="images"
              />
              <h1 className="text-lg text-rose-500  p-[5px] m-1">
                {title.slice(0, 20)}
              </h1>
              <h1 className="text-black-600 text-2xl p-[5px] mb-1">
                <CountUp end={price} prefix="$" />
              </h1>
              <p className="p-[5px] text-sm text-start">
                {description.slice(0, 40)}
              </p>
              <NavLink to={"/address"}>
                <button className="mb-2 border border-r rounded-lg bg-[#54e220]  p-1 text-black font-[1100]  ">
                  Buy Now
                </button>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Electronics;
