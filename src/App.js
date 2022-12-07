import "./App.css";
import { useState } from "react";
import { data } from "./data";
import avatar from "./images/image-avatar.png";
import { HiOutlineShoppingCart } from "react-icons/hi";
import logo from "./images/logo.svg";
function Header() {
  return (
    <>
      <div className="  flex justify-between items-center border-b border-slate-400  py-8 max-w-7xl mx-auto">
        <div className="flex justify-start items-center gap-8">
          <img src={logo} alt="" />
          <nav>
            <ul className="flex justify-start align-center gap-3">
              <li>Collections</li>
              <li>Man</li>
              <li>Weman</li>
              <li>About</li>
              <li>Contact </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <ul className="flex justify-start items-center  gap-4">
            <li className="text-xl">
              <HiOutlineShoppingCart></HiOutlineShoppingCart>
            </li>
            <li>
              <img className="w-12" src={avatar} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
function App() {
  const [products] = useState(data);
  return (
    <>
      <Header />
      <section>
        {products.map((item) => {
          <article key={item.id}>
            <img src={item.mainImage} alt="" />
            <ul>
              <img src={item.thumbnail} alt="" />
            </ul>
          </article>;
        })}
      </section>
    </>
  );
}

export default App;
