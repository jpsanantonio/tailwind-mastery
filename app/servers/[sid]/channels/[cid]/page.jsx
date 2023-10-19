"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import * as Icons from "@/components/icons";
import ChannelLink from "@/components/ChannelLink";
import { data } from "@/data.js";

export default function Server() {
  let [closedCategories, setClosedCategories] = useState([]);
  let params = useParams();
  let server = data[`${params.sid}`];
  let channel = server.categories
    .map((c) => c.channels)
    .flat()
    .find((channel) => +channel.id === +params.cid);

  function toggleCategory(categoryId) {
    setClosedCategories((closedCategories) =>
      closedCategories.includes(categoryId)
        ? closedCategories.filter((id) => id !== categoryId)
        : [...closedCategories, categoryId]
    );
  }

  return (
    <>
      <div className="flex flex-col bg-gray-800 w-60">
        <button className="flex items-center h-12 px-4 font-semibold text-white shadow-sm font-title text-[15px] hover:bg-gray-550/[0.16] transition">
          <div className="relative w-4 h-4 mr-1">
            <Icons.Verified className="absolute w-4 h-4 text-gray-550" />
            <Icons.Check className="absolute w-4 h-4" />
          </div>
          Tailwind CSS
          <Icons.Chevron className="w-[18px] h-[18px] ml-auto opacity-80" />
        </button>

        <div className="flex-1 overflow-y-scroll font-medium text-gray-300 pt-3 space-y-[21px]">
          {data["1"].categories.map((category) => (
            <div key={category.id}>
              {category.label && (
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="flex items-center px-0.5 text-xs uppercase font-title tracking-wide hover:text-gray-100 w-full"
                >
                  <Icons.Arrow
                    className={`${
                      closedCategories.includes(category.id) ? "-rotate-90" : ""
                    } w-3 h-3 mr-0.5 transition duration-200`}
                  />
                  {category.label}
                </button>
              )}

              <div className="space-y-0.5 mt-[5px]">
                {category.channels
                  .filter((channel) => {
                    let categoryIsOpen = !closedCategories.includes(
                      category.id
                    );

                    return categoryIsOpen || channel.unread;
                  })
                  .map((channel) => (
                    <ChannelLink channel={channel} key={channel.id} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col flex-1 flex-shrink min-w-0 bg-gray-700">
        <div className="flex items-center h-12 px-2 shadow-sm">
          <div className="flex items-center">
            <Icons.Hashtag className="w-6 h-6 mx-2 font-semibold text-gray-400" />
            <span className="mr-2 text-white font-title">{channel.label}</span>
          </div>

          {channel.description && (
            <>
              <div className="w-px h-6 mx-2 bg-white/[.06]"></div>
              <div className="mx-2 text-sm font-medium text-gray-200 truncate">
                {channel.description}
              </div>
            </>
          )}

          <div className="flex items-center ml-auto">
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.HashtagWithSpeechBubble className="w-6 h-6 mx-2" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.Bell className="w-6 h-6 mx-2" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.Pin className="w-6 h-6 mx-2" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.People className="w-6 h-6 mx-2" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.Inbox className="w-6 h-6 mx-2" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.QuestionCircle className="w-6 h-6 mx-2" />
            </button>
          </div>
        </div>
        <div className="flex-1 p-3 space-y-4 overflow-y-scroll">
          {[...Array(40)].map((_, i) => (
            <p key={i}>
              Message {i}. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Vel saepe laudantium sed reprehenderit incidunt! Hic rem
              quos reiciendis, fugit quae ratione beatae veniam laborum
              voluptatem, iusto dolorum, voluptates suscipit quia.
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
