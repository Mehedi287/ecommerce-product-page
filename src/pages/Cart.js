import React from "react";
import delet from "../images/icon-delete.svg";
const Cart = ({ mainImage }) => {
  return (
    <div className="relative">
      {" "}
      <div className="absolute  right-16 -top-4 border border-1 py-4   rounded-lg shadow-xl w-72 bg-slate-50 z-0">
        <h1 className="font-bold   py-4 ml-4"> Cart</h1>
        <hr className="text-slate-500 h-1" />
        <ul className="px-4 mt-2 flex justify-between gap-2 items-center">
          <li>
            <img className="w-16 rounded " src={mainImage} alt="" />
          </li>
          <li className="flex items-center px-1 ">
            <li>
              <h1 className="text-slate-400 text-sm ">
                Fall Limited Edition Snekers $125.00 X 3{" "}
                <span className="font-bold text-black">$375.00</span>
              </h1>
            </li>
            <li className=" ">
              <img className="w-4 cursor-pointer" src={delet} alt="" />
            </li>
          </li>
        </ul>
        <div className="px-4">
          <ul className="   mx-auto text-center  first-line:  bg-orange-500  rounded-lg text-white p-3 font-bold  cursor-pointer   mt-5   w-full">
            <button>Add to cart</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
