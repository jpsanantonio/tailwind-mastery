import * as Icons from "@/components/icons";

export default function ChannelLink({ channel }) {
  let Icon = channel.icon ? Icons[channel.icon] : Icons.Hashtag;

  return (
    <a
      key={channel.id}
      href="#"
      className="flex items-center px-2 mx-2 py-1 text-gray-300 hover:text-gray-100 hover:bg-gray-550/[0.16] rounded group"
    >
      <Icon className="w-5 h-5 mr-1.5 text-gray-400" />
      {channel.label}
      <Icons.AddPerson className="w-4 h-4 ml-auto text-gray-200 opacity-0 hover:text-gray-100 group-hover:opacity-100" />
    </a>
  );
}
