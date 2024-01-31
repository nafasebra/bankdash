import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import avatar from "@/assets/images/avatar-1.png";
import { FormEvent, useState } from "react";
import { SendIcon } from "@/assets/icons";

function SliderCard() {
  const [tab, setTab] = useState(0);
  const [amount, setAmount] = useState("");

  const changeTab = (index: number) => {
    if (index === -1) return;
    setTab(index);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // some code for send to API
    console.log(amount, tab)
  }

  return (
    <>
      <Swiper slidesPerView={2.5} breakpoints={{
        md: {
          slidesPerView: 3.5
        }
      }}>
        {Array.from({ length: 4 }).map((_, index) => (
          <SwiperSlide
            key={index}
            onClick={() => changeTab(index)}
            className="cursor-pointer pt-7"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-10 h-10 overflow-hidden rounded-full flex items-center justify-center">
                <img src={avatar} className="w-full h-full object-cover" />
              </div>
              <div
                className={`text-center ${index === tab ? "font-bold" : ""}`}
              >
                <p className="text-center leading-0">Randy Press</p>
                <p className="text-primary-400 text-center leading-0">
                  Director
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pb-3">
        <p className="text-sm text-primary-400 flex items-center">Write amount</p>
        <form className="col-span-1 md:col-span-2" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="number"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              className="h-[50px] rounded-full bg-light py-3 px-4 text-primary-400 outline-none focus:bg-white focus-visible:bg-white transition-colors"
              placeholder="252.22"
            />
            <button type="submit" className="bg-primary py-3 px-4 h-[50px] text-white flex items-center gap-2 justify-center absolute right-0 top-0 bottom-0 rounded-full">
              <p>Send</p>
              <div className="w-5 h-5 flex items-center">
                <SendIcon />
              </div>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SliderCard;
