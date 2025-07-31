import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

const TrendingSlider = ({ items , onchange}: any) => {
  return (
    <Swiper
      modules={[FreeMode, Mousewheel]}
      freeMode={true}
      mousewheel={{ forceToAxis: true }}
      slidesPerView={8}
      spaceBetween={20}
      className="w-full"
    >
      {items.map((item: any, index: number) => (
        <SwiperSlide
          key={index}
          className="!w-[180px] !h-[220px] bg-gray-900 rounded-lg overflow-hidden shadow-md hover:scale-105 transition"
          onClick={() => onchange(item)}
        >
          <img
            src={`/images/${item.CoverImage}`}
            alt={item.Title}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TrendingSlider;
