import Image from "next/image";
import React from "react";

export default function EventCard({
  imgSrc,
  eventName,
  eventBlurb,
  eventDesc,
  date,
  time,
  goi,
  tags,
  price,
  isAllowed,
}) {
  return (
    <div className="flex flex-col bg-white w-[250px] rounded shadow-lg hover:scale-105 cursor-pointer transition-transform duration-100 ease-in-out">
      {/* Image Section */}
      <div className="flex-none h-[350px] w-full relative border group overflow-hidden">
        <Image
          src={imgSrc}
          alt="Event Image"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          className="rounded transition-transform transform-gpu duration-300 ease-in-out group-hover:filter group-hover:brightness-[20%]"
        />
        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 text-white text-center p-7 pt-12">
          {eventDesc}
        </div>
      </div>
      {/* Main Content Section */}
      <div className="flex flex-col">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{eventName}</div>
          <div className="flex flex-row justify-between">
            <p className="text-gray-700 text-sm">{date.slice(0,10)}</p>
            <span className="text-sm font-bold text-gray-900 ">{`$${price}`}</span>
          </div>
        </div>
        {/* Tags Section */}
        <div className="px-3 pb-2 flex flex-row flex-wrap">
          {tags &&
            tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-400 rounded-full px-3 py-1 text-[10px] font-semibold text-gray-900 mr-2 mb-2 h-full"
              >
                #{tag.tagName}{" "}
              </span>
            ))}
          <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-[10px] font-semibold text-gray-900 mr-2 mb-2">
            #Hello
          </span>
          <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-[10px] font-semibold text-gray-900 mr-2 mb-2">
            #Hello
          </span>
          <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-[10px] font-semibold text-gray-900 mr-2 mb-2">
            #Hello
          </span>
          <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-[10px] font-semibold text-gray-900 mr-2 mb-2">
            #Hello
          </span>
          <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-[10px] font-semibold text-gray-900 mr-2 mb-2">
            #Hello
          </span>
          <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-[10px] font-semibold text-gray-900 mr-2 mb-2">
            #Hello
          </span>
        </div>
        
        {/* Price Section */}
      </div>
    </div>
  );
}
