import React from "react";

// Navbars
export const Brand = ({ children }) => {
  return (
    <a href="#" className="text-2xl font-bold me-16 sm:me-0">
      {children}
    </a>
  );
};
export const NavLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      {children}
    </a>
  );
};
export const MobileNavLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    >
      {children}
    </a>
  );
};
export const NavButton = ({ onClick, children }) => {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Section 1
export const Card = ({ imgSrc, imgAlt, title, content, myClass }) => {
  return (
    <div
      className={`cards w-[90%] flex-col items-center bg-white shadow-md p-10 m-10 hover:bg-btn hover:text-w`}
    >
      <div className="flex items-center mb-4">
        <img
          src={imgSrc}
          alt={imgAlt}
          className={`${myClass} w-[60px] h-[60px] rounded-lg`}
        />
      </div>
      <h1 className="text-[16px] font-bold py-3">{title}</h1>
      <div className="w-[20%] h-[1%] bg-red-500">{""}</div>
      <p className="pt-6 text-sm">{content}</p>
    </div>
  );
};

// Section 2
export const Cards = ({
  imgSrc,
  sale,
  language,
  rating,
  title,
  description,
  lessons,
  duration,
  price,
  discountedPrice,
}) => {
  return (
    <div className="w-full max-w-sm mx-4 my-4 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img
          className="w-full h-48 object-cover object-center"
          src={imgSrc}
          alt={title}
        />
        {sale && (
          <span className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1">
            Sale
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <span className="text-blue-500 text-xs uppercase font-semibold">
            {language}
          </span>
          <div className="ml-auto flex items-center">
            <span className="text-yellow-500 text-xs mr-1">{rating}</span>
            <svg
              className="w-4 h-4 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927C9.285 2.36 9.714 2 10.201 2s.917.36 1.152.927l1.26 3.038 3.356.316c.702.066 1.025.9.587 1.474l-2.547 2.98.848 3.327c.19.745-.34 1.44-1.09 1.44-.319 0-.63-.099-.893-.282L10 13.586l-2.874 1.624c-.262.183-.574.282-.893.282-.751 0-1.281-.696-1.09-1.44l.848-3.327-2.547-2.98c-.438-.574-.115-1.408.587-1.474l3.356-.316 1.26-3.038z"></path>
            </svg>
          </div>
        </div>
        <h2 className="text-gray-800 text-lg font-semibold">{title}</h2>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
        <div className="flex items-center mt-4">
          <span className="text-gray-800 text-xs mr-1">{lessons} Lessons</span>
          <span className="text-gray-800 text-xs mx-1">&bull;</span>
          <span className="text-gray-800 text-xs">{duration}</span>
        </div>
        <div className="flex items-center mt-4">
          <span className="text-gray-600 text-xs line-through mr-1">
            ${price}
          </span>
          <span className="text-green-500 text-lg font-bold">
            ${discountedPrice}
          </span>
        </div>
      </div>
      <div className="p-4 flex items-center justify-center">
        <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-600 transition">
          Learn More
        </button>
      </div>
    </div>
  );
};