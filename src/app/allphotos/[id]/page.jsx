import { phtosData } from '@/lib/data';
import Image from 'next/image';
import React from 'react';
import { FaDownload, FaHeart } from 'react-icons/fa';

const PhotosDetailsPage = async ({ params }) => {
  const { id } = await params;
  const photos = await phtosData();
  const photo = photos.find(p => p.id == id);

  return (
    <section className="w-full md:w-10/12 mx-auto px-4 py-10 text-white">
      
      <div className="grid md:grid-cols-2 gap-10 items-start">
        
        <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
          <Image
            src={photo.imageUrl}
            alt={photo.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          
          <h1 className="text-3xl md:text-4xl font-bold text-purple-500">
            {photo.title}
          </h1>

          <p className="text-gray-400 text-lg">
            {photo.prompt}
          </p>

          <div className="flex flex-wrap gap-2">
            {photo.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs bg-purple-800 text-white rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-gray-900 p-4 rounded-xl">
              <p className="text-gray-400">Category</p>
              <p className="font-semibold">{photo.category}</p>
            </div>

            <div className="bg-gray-900 p-4 rounded-xl">
              <p className="text-gray-400">Model</p>
              <p className="font-semibold">{photo.model}</p>
            </div>

            <div className="bg-gray-900 p-4 rounded-xl">
              <p className="text-gray-400">Resolution</p>
              <p className="font-semibold">{photo.resolution}</p>
            </div>

            <div className="bg-gray-900 p-4 rounded-xl">
              <p className="text-gray-400">Created</p>
              <p className="font-semibold">
                {new Date(photo.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

           <div className="flex justify-between text-xl text-purple-600">
                    <span className="flex items-center gap-1 text-md">
                      {" "}
                      <FaHeart /> {photo.likes}
                    </span>
                    <span className="flex items-center gap-1 text-lg">
                      <FaDownload/>
                      {photo.downloads}
                    </span>
                  </div>

          <div className="flex gap-4">
            <button className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition">
              Download
            </button>

            <button className="px-6 py-3 border border-purple-600 text-purple-400 rounded-lg hover:bg-purple-600 hover:text-white transition">
              Like
            </button>
          </div>

        </div>

      </div>

    </section>
  );
};

export default PhotosDetailsPage;