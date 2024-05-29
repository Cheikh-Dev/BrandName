import React from 'react'
import { Cards } from "../utils/Utils"

export default function Section2() {
  return (
    <>
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Practice Advice
            </h2>
            <p className="mt-1 text-4xl leading-8 font-extrabold text-gray-900 sm:text-5xl sm:leading-10">
              Make online education accessible
            </p>
            <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
            <Cards
              imgSrc={"card1"}
              sale={true}
              language="English"
              rating="4.9"
              title="Graphic Design"
              description="We focus on ergonomics and meeting you..."
              lessons="15"
              duration="22hrs 30min"
              price="16.48"
              discountedPrice="6.48"
            />
            <Cards
              imgSrc={"card2"}
              sale={true}
              language="English"
              rating="4.9"
              title="Graphic Design"
              description="We focus on ergonomics and meeting you..."
              lessons="15"
              duration="22hrs 30min"
              price="16.48"
              discountedPrice="6.48"
            />
            <Cards
              imgSrc={"card3"}
              sale={true}
              language="English"
              rating="4.9"
              title="Graphic Design"
              description="We focus on ergonomics and meeting you..."
              lessons="15"
              duration="22hrs 30min"
              price="16.48"
              discountedPrice="6.48"
            />
            <Cards
              imgSrc={"card4"}
              sale={true}
              language="English"
              rating="4.9"
              title="Graphic Design"
              description="We focus on ergonomics and meeting you..."
              lessons="15"
              duration="22hrs 30min"
              price="16.48"
              discountedPrice="6.48"
            />
          </div>
        </div>
      </div>
    </>
  );
}
