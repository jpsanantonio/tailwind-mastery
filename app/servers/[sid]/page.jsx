import Message from "@/components/Message";

export default function Server({ params }) {
  return (
    <>
      <div className="bg-stone-800 w-60 flex flex-col">
        <div className="px-3 h-12 flex items-center shadow-md">
          Server {params.sid}
        </div>
        <div className="text-stone-300 p-3 overflow-y-scroll flex-1 space-y-2">
          <p className="text-white">general</p>
          {[...Array(40)].map((_, i) => (
            <p>channels {i}</p>
          ))}
        </div>
      </div>
      <div className="bg-stone-700 flex flex-col flex-1">
        <div className="px-3 h-12 flex items-center shadow-md">General</div>
        <div className=" flex-1 space-y overflow-y-scroll">
          {[...Array(40)].map(() => (
            <Message />
          ))}
        </div>
      </div>
    </>
  );
}
