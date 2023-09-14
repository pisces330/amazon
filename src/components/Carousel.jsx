import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
  const carouselImages = [
    "../images/carousel_1.jpg",
    "../images/carousel_2.jpg",
    "../images/carousel_vid.mp4",
    "../images/carousel_4.jpg",
    "../images/carousel_5.jpg",
  ];
  return (
    <div className="h-[600px] bg-white">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3500,
        }}
        className="h-[50%]"
      >
        {carouselImages.map((src, index) => (
          <SwiperSlide
            key={index}
            className={src.endsWith(".mp4") ? "bg-black" : ""}
          >
            {src.endsWith(".mp4") ? (
              <video muted="muted">
                <source src={src} type="video/mp4" />
              </video>
            ) : (
              <img src={src} alt="" />
            )}
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <img src={"../images/carousel_1.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_2.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide className="bg-black">
          <video controls muted="muted">
            <source src={"../images/carousel_vid.mp4"} type="video/mp4" />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_4.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_5.jpg"} alt="" />
        </SwiperSlide> */}
      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-900" />
    </div>
  );
};

export default Carousel;
