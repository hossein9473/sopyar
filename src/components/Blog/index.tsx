"use client";

import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-12 md:py-15 lg:py-20"
    >
      <div className="container">
        <SectionTitle
          title="مقاله‌ها"
          paragraph="در مسیر اپلای سوالات زیادی در ذهن همه‌ی ما وجو دارد که هر چه سریع‌تر جوابشان را پیدا کنیم بیشتر از رقبا جلو می‌افتیم"
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
            {blogData.map((blog) => (
              <SwiperSlide key={blog.id} className="flex h-auto">
                {/* Ensures equal height for all slides */}
                <div className="flex flex-col w-full h-full">
                  <SingleBlog blog={blog} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Blog;
