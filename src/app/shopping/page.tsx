import Footer from "../components/Footer";
import Nav1 from "../components/Header";

export default function Shopping() {
  return (
    <div className="ml-4 sm:ml-8 lg:ml-10 mr-4 sm:mr-8 lg:mr-10 relative bg-[repeating-linear-gradient(to_right,_rgba(255,192,203,0.7)_0px,_rgba(255,192,203,0.7)_60px,_transparent_60px,_transparent_80px)] py-8">
      <Nav1 />
      <div>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl m-4 sm:m-6 lg:m-10 text-blue-950">
          Your Shopping Cart
        </h1>
        <ul className="flex flex-wrap gap-4 sm:gap-16 lg:gap-96 text-blue-950 border-b mb-10 border-gray-300 text-sm sm:text-base lg:text-lg">
          <li className="ml-auto sm:ml-48 lg:ml-96 mb-7">Product</li>
          <li>Quantity</li>
          <li>Total</li>
        </ul>
      </div>
      <div>
        <ul className="text-right text-sm sm:text-base lg:text-lg">
          <li className="text-gray-500">Subtotal</li>
          <li className="mt-4 mb-4 text-gray-500">
            Taxes and shipping are calculated at checkout
          </li>
          <li>
            <button className="py-2 px-4 sm:px-6 bg-[rgba(128,0,128,0.5)] text-white text-xs sm:text-sm mt-2 hover:bg-blue-700">
              View Collection
            </button>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}