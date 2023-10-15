export default function Message() {
  return (
    <div className="bg-stone-700 min-h-screen flex items-center justify-center">
      <div className="max-w-large">
        <div className="flex px-4 py-1 hover:bg-stone-800/30">
          <img
            className="rounded-full w-10 h-10 mr-4"
            src="/jpsanantonio.jpeg"
            alt="jpsanantonio"
          />
          <div>
            <p className="flex items-baseline">
              <span className="text-green-700 text-sm mr-2 font-medium">
                jpsanantonio
              </span>
              <span className="text-stone-500 text-xs">10/14/2023</span>
            </p>
            <p className="text-stone-300">
              You should never use something like leading relaxed with a big
              font size, it goes against all typography best practices. Line
              height should decrease as font size gets bigger
            </p>
          </div>
        </div>
        <div className="mt-1 hover:bg-stone-800/30 px-4 py-1">
          <p className="text-stone-300 pl-14">
            You can override it in your config if you want but ultimately we
            chose the defaults they did because they let you get results closest
            to what a professional designer would do more easily
          </p>
        </div>
        <div className="mt-1 hover:bg-stone-800 hover:bg-opacity-30 px-4 py-1">
          <p className="text-stone-300 pl-14">
            Since we changed this in tailwind 2 I’ve almost never used a leading
            class at all
          </p>
        </div>
      </div>
    </div>
  );
}
