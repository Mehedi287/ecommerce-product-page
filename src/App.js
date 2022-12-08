import "./App.css";
import { useState } from "react";
import { data } from "./data";
import avatar from "./images/image-avatar.png";
import { HiOutlineShoppingCart } from "react-icons/hi";
import logo from "./images/logo.svg";
import plus from "./images/icon-plus.svg";
import minus from "./images/icon-minus.svg";
import menu from "./images/icon-menu.svg";
function Header() {
  return (
    <>
      <div className="container flex justify-between items-center border-b border-slate-400 px-3 lg:py-8 py-5   mx-auto w-full  lg:max-w-7xl ">
        <div className="flex justify-start items-center gap-4 ">
          <img className=" lg:invisible" src={menu} alt="" />
          <img src={logo} alt="" />
          <nav className=" lg:visible  sm:hidden md:hidden  ">
            <ul className="flex justify-start text-slate-500   gap-3 ml-5 text-center">
              <li>Collections</li>
              <li>Man</li>
              <li>Weman</li>
              <li>About</li>
              <li>Contact </li>
            </ul>
          </nav>
        </div>

        <ul className="flex justify-start items-center  gap-4">
          <li className="text-xl">
            <HiOutlineShoppingCart className="text-2xl"></HiOutlineShoppingCart>
          </li>
          <li>
            <img className="w-12" src={avatar} alt="" />
          </li>
        </ul>
      </div>
    </>
  );
}
function App() {
  const [products] = useState(data);
  const [value, setValue] = useState(0);
  const { mainImage } = products[value];
  const [amount, setAmount] = useState(0);
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
        <article className=" mx-auto ">
          <div className="lg:rounded-2xl md:rounded-2xl md:w-full   lg:w-9/12 sm:w-full   mb-8 max-w-2xl">
            <img className="lg:rounded-xl" src={mainImage} alt="" />
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
