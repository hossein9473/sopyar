"use client";

import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="چرا اس او پی یار؟"
            paragraph="آماده‌سازی مدارک اپلایت با ماست، یعنی همون قسمت حیاتی مسیر (ورق بزنید)"
            center
          />

          <div dir="rtl">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2.5 },
                1024: { slidesPerView: 3.5 },
              }}
            >
              {featuresData.map((feature) => (
                <SwiperSlide key={feature.id} className="flex h-auto">
                  <div className="flex flex-col w-full !h-full mb-10">
                    <SingleFeature feature={feature} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};


export default Features;
