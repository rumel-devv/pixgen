import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaDownload, FaHeart } from "react-icons/fa";

const PhotoCard = ({ photo }) => {
  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/10 transition duration-300 group">
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={photo.imageUrl}
          alt={photo.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      <div className="p-4 space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="text-white font-semibold text-lg truncate">
            {photo.title}
          </h2>
          <span className="text-xs px-2 py-1 bg-white text-purple-700 rounded-md">
            {photo.category}
          </span>
        </div>

        <div className="flex justify-between text-sm text-gray-200">
          <span className="flex items-center gap-1 text-nd">
            {" "}
            <FaHeart /> {photo.likes}
          </span>
          <span className="flex items-center gap-1 text-md">
            <FaDownload />
            {photo.downloads}
          </span>
        </div>

        <Link href={`/photos/${photo.id}`}>
          <button className="w-full mt-2 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-sm font-medium">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PhotoCard;
