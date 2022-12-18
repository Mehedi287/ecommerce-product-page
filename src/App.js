import "./App.css";
import { useState } from "react";
import { data } from "./data";
import avatar from "./images/image-avatar.png";
import { HiOutlineShoppingCart } from "react-icons/hi";
import logo from "./images/logo.svg";
import plus from "./images/icon-plus.svg";
import minus from "./images/icon-minus.svg";
import menu from "./images/icon-menu.svg";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import Header from "./pages/Header";

function App() {
  const [products] = useState(data);
  const [value, setValue] = useState(0);
  const { mainImage } = products[value];
  const [amount, setAmount] = useState(0);
  const [slideIndex, setSlideIndex] = useState(1);
  const leftSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(products.length);
    }
  };
  const rightSlide = () => {
    if (slideIndex !== products.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === products.length) {
      setSlideIndex(1);
    }
  };
  const handleMinus = () => {
    setAmount(amount - 1);
    if (amount <= 0) {
      setAmount(0);
    }
  };
  console.log(products.length);
  return (
    <>
      <Header></Header>
      <section className="lg:flex  justify-around items-center  max-w-6xl mx-auto  mt-12  sm:w-full  ">
        <article className=" mx-auto  ">
          <div className="">
            {products.map((item, index) => (
              <doiv
                key={item.id}
                className={slideIndex === index + 1 ? "relative" : "hidden"}
              >
                {" "}
                <div className="lg:rounded-2xl md:rounded-2xl md:w-full      lg:w-9/12 sm:w-full   mb-8 max-w-2xl">
                  <img className="lg:rounded-xl" src={item.mainImage} alt="" />
                </div>
                <ul className="lg:hidden">
                  <li className="p-4 cursor-pointer rounded-full bg-slate-100  absolute   left-4 -translate-y-1/2 top-1/2 shadow ">
                    <button onClick={leftSlide}>
                      <FiChevronLeft className="text-xl font-bold text-slate-700"></FiChevronLeft>
                    </button>
                  </li>
                  <li className="p-4 cursor-pointer rounded-full bg-slate-100  absolute  right-4 -translate-y-1/2 top-1/2 shadow ">
                    <button onClick={rightSlide}>
                      <FiChevronRight className="text-xl font-bold text-slate-700"></FiChevronRight>
                    </button>
                  </li>
                </ul>
              </doiv>
            ))}
          </div>
          <ul className=" lg:flex md:flex  justify-start items-center flex-wrap gap-10 visible hidden">
            {products.map((item, index) => (
              <li
                className={`${
                  index === value && " border-2   border-orange-500 opacity-80"
                }  border-2  backdrop: rounded-2xl overflow-hidden cursor-pointer`}
                key={item.id}
                onClick={() => setValue(index)}
              >
                <img className="w-20" src={item.thumbnail} alt="" />
              </li>
            ))}
          </ul>
        </article>
        <article className="  pb-5 px-4 ">
          <h1 className="uppercase text-sm py-3 inline-block text-orange-400 font-bold">
            {" "}
            Sneaker Company
          </h1>
          <h1 className="text-3xl font-bold py-2 lg:w-80">
            Fall Limited Edition Sneakers
          </h1>
          <h1 className="text-gray-500 text-sm py-3 leading-relaxed lg:w-96">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </h1>
          <div className="flex justify-start gap-5 items-center mt-5 lg:block">
            <ul className="flex justify-start items-center gap-4 lg:mt-4">
              <li className="text-2xl font-bold"> $125.00</li>
              <li className="bg-orange-100 inline-block text-orange-500 font-bold px-2 rounded">
                {" "}
                50%
              </li>
            </ul>
            <div className=" ">
              <p className="text-gray-500 text-sm lg:py-1 lg:mb-7  ">$250.00</p>
            </div>
          </div>
          <div className=" lg:flex justify-start items-center gap-4 ">
            <div className="  ">
              <ul className=" flex p-3 bg-slate-100 justify-center items-center gap-10  rounded-lg  ">
                <li onClick={handleMinus} className="cursor-pointer">
                  <img src={minus} alt="" />
                </li>
                <li>
                  <p className="font-bold">{amount}</p>
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => setAmount(amount + 1)}
                >
                  <img src={plus} alt="" />
                </li>
              </ul>
            </div>
            <div className="flex-1 ">
              <ul className=" flex justify-center items-center gap-5 bg-orange-500  rounded-lg text-white p-3 font-bold  cursor-pointer lg:mt-0 mt-5 lg:w-52 w-full">
                <li className="">
                  <HiOutlineShoppingCart></HiOutlineShoppingCart>
                </li>
                <li>
                  <button>Add to cart</button>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default App;
