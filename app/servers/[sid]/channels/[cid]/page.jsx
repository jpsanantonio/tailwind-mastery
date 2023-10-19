"use client";

import { useState } from "react";
import * as Icons from "@/components/icons";
import ChannelLink from "@/components/ChannelLink";
import data from "@/data.json";

export default function Server() {
  let [closedCategories, setClosedCategories] = useState([]);

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

      <div className="flex flex-col flex-1 bg-gray-700">
        <div className="flex items-center h-12 px-3 shadow-sm">general</div>
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
