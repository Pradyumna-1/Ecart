import axios from "axios";
import React, { useEffect, useState } from "react";
import axiosinstance from "../../api/axiosinstance";
import CountUp from "react-countup";
const Cards = () => {
  let [state, setState] = useState([]);
  let fetchApi = () => {
    let x = axiosinstance.get("/products");
    console.log(x);
    x.then((res) => {
      console.log(res.data);
      setState(res.data);
    });
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-10 p-6 m-auto bg-slate-100 ">
        {state.map(({ title, price, image, description }, id) => {
          return (
            <>
              <div
                className="flex flex-col items-center w-[350px] h-[350px] box-border relative  shadow-xl border border-gray-200 rounded-lg overflow-hidden  "
                key={id}
              >
                <img
                  className="h-[150px] w-auto m-auto object-contain "
                  src={image}
                  alt="images"
                />
                <h1 className="text-lg text-rose-500  p-[5px] m-1">
                  {title}
                </h1>
                <h1 className="text-black-600 text-2xl p-[5px] mt-1">
                  <CountUp end={price} prefix="$" />
                </h1>
                <p className="p-[5px] text-sm text-start">
                  {description.slice(0, 40)}
                </p>
                <button className="mb-2 border border-r rounded-lg bg-[#54e220]  p-1 text-black font-[1100]  ">
                  Buy Now
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
