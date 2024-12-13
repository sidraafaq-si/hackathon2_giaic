import Nav1 from "../components/Header";
import Image from "next/image";

import { IoMdArrowDropdown } from "react-icons/io";
import Footer from "../components/Footer";

export default function Listing() {
  return (
    <div className="bg-[repeating-linear-gradient(to_right,_rgba(255,192,203,0.7)_0px,_rgba(255,192,203,0.7)_60px,_transparent_60px,_transparent_80px)] py-8">
      <Nav1 />
      <div>
        <Image src='/Page Headers.png' alt="headerpic" width={2000} height={200} />
      </div>
      <div className="flex flex-wrap justify-between m-6">
        <ul className="flex gap-8 flex-wrap">
          <li className="flex gap-1">Category<IoMdArrowDropdown /></li>
          <li className="flex gap-1">Product type<IoMdArrowDropdown /></li>
          <li className="flex gap-1">Price<IoMdArrowDropdown /></li>
          <li className="flex gap-1">Brand<IoMdArrowDropdown /></li>
        </ul>
        <ul className="flex gap-3 flex-wrap">
          <li>Sorting by:</li>
          <li className="flex gap-1">Date added<IoMdArrowDropdown /></li>
        </ul>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6">
        <div className="text-blue-950 p-4 flex flex-col items-center">
          <ul>
            <li>
              <Image src="/chair.png" alt="chair" width={350} height={100} />
            </li>
            <li className="mt-3">The Dandy chair</li>
            <li className="mt-3">£250</li>
          </ul>
        </div>
        <div className="text-blue-950 p-4 flex flex-col items-center">
          <ul>
            <li>
              <Image src="/doublepot.png" alt="doublepot" width={350} height={100} />
            </li>
            <li className="mt-3">Rustic Vase Set</li>
            <li className="mt-3">£155</li>
          </ul>
        </div>
        <div className="text-blue-950 p-4 flex flex-col items-center">
          <ul>
            <li>
              <Image src="/singlepot.png" alt="pot" width={350} height={100} />
            </li>
            <li className="mt-3">The Silky Vase</li>
            <li className="mt-3">£125</li>
          </ul>
        </div>
        <div className="text-blue-950 p-4 flex flex-col items-center">
          <ul>
            <li>
              <Image src="/light.png" alt="light" width={350} height={100} />
            </li>
            <li className="mt-3">The Lucy Lamp</li>
            <li className="mt-3">£399</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 mt-4">
        <div className="text-blue-950 p-4 flex flex-col items-center">
          <ul>
            <li>
              <Image src="/listing.png" alt="chair" width={350} height={100} />
            </li>
            <li className="mt-3">The Dandy chair</li>
            <li className="mt-3">£250</li>
          </ul>
        </div>
        <div className="text-blue-950 p-4 flex flex-col items-center">
          <ul>
            <li>
              <Image src="/listing6.png" alt="doublepot" width={350} height={100} />
            </li>
            <li className="mt-3">Rustic Vase Set</li>
            <li className="mt-3">£155</li>
          </ul>
        </div>
        <div className="text-blue-950 p-4 flex flex-col items-center">
          <ul>
            <li>
              <Image src="/listing5.png" alt="pot" width={350} height={100} />
            </li>
            <li className="mt-3">The Silky Vase</li>
            <li className="mt-3">£125</li>
          </ul>
        </div>
        <div className="text-blue-950 p-4 flex flex-col items-center">
          <ul>
            <li>
              <Image src="/listin4.png" alt="light" width={350} height={100} />
            </li>
            <li className="mt-3">The Lucy Lamp</li>
            <li className="mt-3">£399</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 mt-4">
        <div className="text-blue-950 p-4 flex flex-col items-center">
          <ul>
            <li>
              <Image src="/chair.png" alt="chair" width={350} height={100} />
            </li>
            <li className="mt-3">The Dandy chair</li>
            <li className="mt-3">£250</li>
          </ul>
        </div>
        <div className="text-blue-950 p-4 flex flex-col items-center">
          <ul>
            <li>
              <Image src="/doublepot.png" alt="doublepot" width={350} height={100} />
            </li>
            <li className="mt-3">Rustic Vase Set</li>
            <li className="mt-3">£155</li>
          </ul>
        </div>
        <div className="text-blue-950 p-4 flex flex-col items-center">
          <ul>
            <li>
              <Image src="/singlepot.png" alt="pot" width={350} height={100} />
            </li>
            <li className="mt-3">The Silky Vase</li>
            <li className="mt-3">£125</li>
          </ul>
        </div>
        <div className="text-blue-950 p-4 flex flex-col items-center">
          <ul>
            <li>
              <Image src="/light.png" alt="light" width={350} height={100} />
            </li>
            <li className="mt-3">The Lucy Lamp</li>
            <li className="mt-3">£399</li>
          </ul>
        </div>
      </div>

      <button className="ml-[700px] py-2 mb-10 px-6 bg-transparent text-[rgb(24,37,75,100)] text-xs mt-36 hover:bg-blue-700">
        View Collection
      </button>

      <Footer />
    </div>
  );
}