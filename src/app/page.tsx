import Footer from "./components/Footer";
import Nav1 from "./components/Header";

import { CiCircleCheck } from "react-icons/ci";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Nav1 />
      <section>
        {/* Hero Section */}
        <div className="relative w-full h-full bg-[url('/background.png')] bg-cover bg-center flex flex-col lg:flex-row">
          <div className="w-full lg:w-[800px]"></div>
          <div className="bg-white m-8 lg:m-[200px] w-full lg:w-[1000px] h-auto lg:h-[400px] p-8 lg:p-0">
            <p className="mt-6 lg:mt-14 text-lg lg:text-3xl text-[rgb(34,36,46,100)]">
              Luxury homeware for people <br /> who love timeless design quality
            </p>
            <p className="text-xs lg:text-base text-[rgb(91,96,118,100)] mt-4 lg:mt-8">
              Shop the new Spring 2022 collection today
            </p>
            <button className="py-2 px-6 bg-gray-50 text-[rgb(91,96,118,100)] text-xs mt-6 lg:mt-36 hover:bg-blue-700">
              View Collection
            </button>
          </div>
        </div>

        {/* Brand Differences Section */}
        <div className="mx-4 lg:mx-10 bg-[repeating-linear-gradient(to_right,_rgba(255,192,203,0.7)_0px,_rgba(255,192,203,0.7)_60px,_transparent_60px,_transparent_80px)] py-8">
          <h1 className="text-blue-900 text-center mb-10 text-2xl lg:text-3xl">
            What makes our brand different
          </h1>
          <div className="flex flex-wrap justify-between gap-6 lg:gap-10 px-4 lg:px-24">
            {[
              {
                icon: "/delivery.png",
                title: "Next day as standard",
                description: "Order before 3pm and get your order the next day as standard",
              },
              {
                icon: <CiCircleCheck className="text-blue-950 text-4xl" />,
                title: "Made by true artisans",
                description: "Handmade crafted goods made with real passion and craftsmanship",
              },
              {
                icon: "/Purchase.png",
                title: "Unbeatable prices",
                description: "For our materials and quality, you won’t find better prices anywhere",
              },
              {
                icon: "/Sprout.png",
                title: "Recycled packaging",
                description: "We use 100% recycled to ensure our footprint is more manageable",
              },
            ].map((feature, index) => (
              <div key={index} className="text-blue-900 bg-gray-200 bg-opacity-20 p-4 w-full lg:w-[22%]">
                <ul>
                  <li className="mb-4 flex justify-center">
                    {typeof feature.icon === "string" ? (
                      <Image src={feature.icon} alt={feature.title} width={40} height={40} />
                    ) : (
                      feature.icon
                    )}
                  </li>
                  <li className="text-center text-lg font-semibold">{feature.title}</li>
                  <li className="mt-2 text-center text-sm">{feature.description}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div className="p-4 lg:p-10">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { image: "/chair.png", name: "The Dandy Chair", price: "£250" },
              { image: "/doublepot.png", name: "Rustic Vase Set", price: "£155" },
              { image: "/singlepot.png", name: "The Silky Vase", price: "£125" },
              { image: "/light.png", name: "The Lucy Lamp", price: "£399" },
            ].map((product, index) => (
              <div key={index} className="text-blue-950 p-4 w-full sm:w-1/2 lg:w-1/4">
                <ul>
                  <li>
                    <Image src={product.image} alt={product.name} width={350} height={100} className="w-full" />
                  </li>
                  <li className="mt-3 text-center font-medium">{product.name}</li>
                  <li className="mt-3 text-center">{product.price}</li>
                </ul>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <button className="py-2 px-6 bg-gray-50 text-blue-950 border border-blue-950 hover:bg-blue-700">
              View Collection
            </button>
          </div>
        </div>

        {/* About Section */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 px-4 lg:px-10 mt-16">
          <div className="bg-purple-950 text-gray-300 p-8 flex-1">
            <h2 className="text-2xl lg:text-3xl mb-4">It started with a small idea</h2>
            <p className="text-sm">
              A global brand with local beginnings, our story began in a small studio in South London in early 2014
            </p>
            <button className="py-2 px-6 bg-gray-500 text-[rgb(24,37,75,100)] text-xs mt-6 hover:bg-blue-700">
              Learn More
            </button>
          </div>
          <div className="flex-1">
            <Image src="/divimage.png" alt="About us" width={700} height={500} />
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="text-center bg-[repeating-linear-gradient(to_right,_rgba(255,192,203,0.7)_0px,_rgba(255,192,203,0.7)_60px,_transparent_60px,_transparent_80px)] py-8 px-4">
          <h2 className="text-2xl lg:text-4xl mb-6">Join the club and get the benefits</h2>
          <p className="text-sm mb-6">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more
          </p>
          <ul className="flex flex-wrap justify-center gap-5">
            <li className="flex gap-2">
              <CiCircleCheck className="text-blue-950 mt-1" />
              Exclusive offers
            </li>
            <li className="flex gap-2">
              <CiCircleCheck className="text-blue-950 mt-1" />
              Free events
            </li>
            <li className="flex gap-2">
              <CiCircleCheck className="text-blue-950 mt-1" />
              Large discounts
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}