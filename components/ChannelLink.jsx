"use client";

import * as Icons from "@/components/icons";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ChannelLink({ channel }) {
  const Icon = channel.icon ? Icons[channel.icon] : Icons.Hashtag;
  const params = useParams();
  const active = Number(channel.id) === Number(params.cid);

  return (
    <Link
      key={channel.id}
      href={`/servers/1/channels/${channel.id}`}
      className={`${
        active
          ? "text-white bg-gray-550/[0.32]"
          : "text-gray-300 hover:text-gray-100 hover:bg-gray-550/[0.16]"
      } flex items-center px-2 mx-2 py-1 rounded group`}
    >
      <Icon className="w-5 h-5 mr-1.5 text-gray-400" />
      {channel.label}
      <Icons.AddPerson className="w-4 h-4 ml-auto text-gray-200 opacity-0 hover:text-gray-100 group-hover:opacity-100" />
    </Link>
  );
}
