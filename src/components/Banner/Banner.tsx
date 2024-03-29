import hand_icon from "../../assets/hand_icon.png";
import arrow_icon from "../../assets/arrow.png";
import hero_image from "../../assets/hero_image.png";
export const Banner = () => {
  return (
    <div className="banner flex h-[100vh] bg-gradient-to-b from-fuchsia-100 to-white">
      <div className="banner-left flex-1 flex flex-col justify-center gap-5 pl-[130px]">
        <h2 className="text-slate-900 text-[26px] font-bold">
          NEW ARRIVALS ONLY
        </h2>
        <div>
          <div className="hand-icon flex items-center gap-5">
            <p className="text-slate-900 text-6xl font-bold">new</p>
            <img src={hand_icon} alt="hand_icon" className="w-[100px]" />
          </div>
          <p className="text-slate-900 text-6xl font-bold">collections</p>
          <p className="text-slate-900 text-6xl font-bold">for everyone</p>
        </div>
        <div className="banner-latest-btn flex justify-center items-center gap-4 w-[300px] h-[70px] rounded-[75px] bg-red-400 mt-[30px] text-white text-2xl font-semibold">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrow_icon" />
        </div>
      </div>
      <div className="banner-right flex flex-1 items-center justify-center">
        <img src={hero_image} alt="hero_image" />
      </div>
    </div>
  );
};
