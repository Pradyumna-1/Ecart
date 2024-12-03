import axios from "axios";
import React, { useEffect, useState } from "react";

const Cards = () => {
  let [state, setState] = useState([]);
  let fetchApi = () => {
    let x = axios.get("https://dummyjson.com/products");
    console.log(x);
    x.then((res) => {
      console.log(res.data.products);
      setState(res.data.products);
    });
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-10 p-6 m-auto ">
        {state.map(({ title, price, images, description }, id) => {
          return (
            <>
              <div
                className="flex flex-col items-center w-[350px] h-[350px] box-border relative  shadow-xl border border-gray-200 rounded-lg overflow-hidden "
                key={id}
              >
                <img
                  className="h-[150px] w-auto m-auto object-contain "
                  src={images}
                  alt="images"
                />
                <h1 className="text-2xl text-rose-600  p-[5px] m-auto">
                  {title}
                </h1>
                <h1 className="text-black-600 text-4xl p-[5px] m-auto">
                  ${price}
                </h1>
                <p className="p-[15px] text-sm text-start">{description}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
