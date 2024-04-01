export const Newsletter = () => {
  return (
    <div className="newsletter w-2/3 h-[40vh] flex flex-col items-center justify-center m-auto px-[100px] gap-7 bg-gradient-to-b from-fuchsia-100 to-white">
      <h1 className="text-zinc-800 text-5xl font-semibold">
        Get the latest updates from us
      </h1>
      <p className="text-sm">
        Subscribe to our newsletter and get the latest updates on fashion,
        beauty, and more!
      </p>
      <div className="flex items-center justify-center bg-white w-[730px] h-[70px] rounded-[80px] border-1 border-gray-500">
        <input
          type="email"
          placeholder="Your Email"
          className="w-[500px] ml-8 border-none outline-none text-sm"
        />
        <button>Subscribe</button>
      </div>
    </div>
  );
};
