import React from 'react';
import Link from 'next/link';

const Banner = () => {
  return (
    <section className="w-full bg-linear-to-tr from-gray-950 via-purple-950 to-gray-950 py-24">
      <div className="w-full md:w-10/12 mx-auto px-4 text-center">
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Generate Stunning <span className="text-purple-500">AI Photos</span> Instantly
        </h1>

        <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
          Create high-quality, realistic images in seconds. Perfect for creators, designers, and developers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link href="/allphotos">
            <button className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition font-semibold">
              Explore Photos
            </button>
          </Link>

          <Link href="/pricing">
            <button className="px-6 py-3 border border-purple-600 text-purple-400 rounded-xl hover:bg-purple-600 hover:text-white transition font-semibold">
              View Pricing
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Banner;