import backgroundImage from "./abc.png";
const Banner = () => {
  return (
    <div className="">
      <div
        className="hero min-h-[700px] bg-cover bg-no-repeat bg-center rounded-md"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      >
        <div
          className="hero-overlay"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}
        ></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl text-black font-bold">
              I Grow By Helping People In Need
            </h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Type here"
                className="opacity-100 py-2 bg-transparent border border-neutral-400 px-3 rounded-l-md w-full max-w-xs text-black backdrop-blur-md"
              />
              <button
                className="py-[9px] px-3 bg-[#ff0000] rounded-r-md border"
                style={{ backdropFilter: "none" }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;