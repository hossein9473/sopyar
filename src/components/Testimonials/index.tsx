"use client";

import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "پریسا از شیراز - ۲۰۲۵",
    designation: "Founder @TailGrids",
    content:
      "من همیشه فکر می‌کردم فقط معدل یا نمره زبان مهمه برای پذیرش اما خیلی خوش‌شانس بودم که فهمیدم چقدر نوشتن یه انگیزه‌نامه قوی می‌تونه مسیر اپلای رو تغییر بده و از اونجایی که تعدادی از بچه‌های دانشگاهمون با اس او پی یار کار کرده بودند من هم کاملا اتفاقی توصیه‌نامه‌ی استادم و انگیزه‌نامم رو به این تیم سپردم و الان نمی‌تونم بگم که چقدر از این بابت خوش‌حالم. خیلی صبور بودن و انقدر خوب شخصیت و اهداف منو توی متن نشون دادن که تونستم از دانشگاه فرایبورگ آلمان با بورسیه پذیرش بگیرم. چیزی که برام یه رویا بود",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "احسان از تهران - ۲۰۲۵",
    designation: "Founder @UIdeck",
    content:
      "من قبلاً زیاد انگیزه‌نامه نوشتم ولی مدت‌ها بود که نتیجه نمی‌گرفتم، حتی به سختی جواب ایمیل‌هام رو می‌دادن و واقعن داشتم بیخیال اپلای می‌شدم که الان وقتی بهش فکر می‌کنم اصلا باورم نمی‌شه. من از طریق سایت با تیم اس‌او‌پی یار آشنا شدم و اولش اینطوری بودم که به امتحان کردن میارزه اما اس او پی یار فقط یه متن تحویلم نداد، جزئی‌ترین اطلاعات رو برای نوشتن یه انگیزه‌نامه و رزومه‌ی خوب ازم گرفتن و دقیقا همون چیزی رو تحویلم دادن که خودم می‌خواستم اما اگر قرار بود خودم بنویسمش ممکن بود هفته‌ها وقتم رو بگیره.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "سارا از شهرکرد - ۲۰۲۵",
    designation: "Founder @Lineicons",
    content:
      "من جزو افرادی بودم که فکر می‌کردم مهارت‌هایی که داریم همه چیزه و اگر به اندازه کافی خوب باشم دانشگاه‌ها من رو روی هوا می‌برن، ۲ سال با همین تفکر پیش رفتم که از سخت‌ترین سال‌های زندگیم شد، در نهایت از طریق یکی از دوستان با تیم اس او پی یار آشنا شدم و مدارکم رو به بهترین نحو نوشتن و اون موقع بود که فهمیدم باید بلد باشی خودت رو پرزنت کنی و هر مدرکی قلق خودش رو برای این کار داره. تیم اس او پی یار همه‌ چی رو دقیق و منظم جلو برد، برام یه رزومه کامل درست کردن و الان دارم توی تورین درس می‌خونم.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },



  {
    id: 4,
    name: "روژین از گرگان - ۲۰۲۵",
    designation: "Founder @Lineicons",
    content:
      "من همیشه از نوشتن انگیزه‌نامه می‌ترسیدم چون هیچ‌وقت نمی‌دونستم باید از کجا شروع کنم و چی بنویسم که قانع‌کننده باشه. یکی از دوستانم تیم اس‌او‌پی یار رو بهم معرفی کرد و راستش اولش شک داشتم، ولی وقتی اولین پیش‌نویس متن رو دیدم واقعاً شوکه شدم! انقدر حرفه‌ای بود که حتی اساتیدم هم از خوندنش تعریف کردن. به کمکشون از دانشگاه وین پذیرش گرفتم و الان که به عقب نگاه می‌کنم، مطمئنم بدون کمکشون این مسیر اینقدر سریع و راحت پیش نمی‌رفت.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
  {
    id: 5,
    name: "فرناز از تهران - ۲۰۲۵",
    designation: "Founder @Lineicons",
    content:
      "من بعد از چند بار رد شدن توی اپلای، دیگه انگیزه‌ای برام نمونده بود. هر بار فکر می‌کردم شاید نمره زبان یا سابقه کاری‌ام مشکل داره ولی وقتی با تیم اس‌او‌پی یار صحبت کردم، تازه فهمیدم که چقدر ارائه درست مدارک مهمه. اونا فقط برای من یه انگیزه‌نامه ننوشتن، بلکه کمک کردن همه‌ی مدارکم رو به شکل درست و حرفه‌ای بازنویسی کنم. نتیجه؟ پذیرش از دانشگاه آمستردام با فاند کامل. هنوز هم باورم نمی‌شه.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
  {
    id: 6,
    name: "محمدحسین از شیراز - ۲۰۲۵",
    designation: "Founder @Lineicons",
    content:
      "همیشه فکر می‌کردم می‌تونم مدارکم رو خودم بهتر از هر کسی بنویسم، اما بعد از کلی وقت گذاشتن و بی‌نتیجه بودن، به توصیه‌ی یکی از همکارام با تیم اس‌او‌پی یار تماس گرفتم. چیزی که ازشون گرفتم فقط یه متن نبود، یه مسیر کامل بود. همه‌چی دقیق، تمیز و حرفه‌ای بود. از اصلاح رزومه تا نوشتن توصیه‌نامه‌ها. نتیجه‌ش این شد که تونستم از پلی‌تکنیک میلان پذیرش بگیرم و الان دارم همونجایی درس می‌خونم که همیشه آرزوشو داشتم.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="نظر شما، افتخار ماست"
          paragraph="اعتماد صدها دانشجو، بزرگ‌ترین سرمایه ماست. ما قدردان این اعتماد هستیم"
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
            {testimonialData.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="flex h-auto">
                <div className="flex flex-col w-full !h-full">
                  <SingleTestimonial testimonial={testimonial} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Background SVGs */}
      <div className="absolute right-0 top-5 z-[-1]">
        <svg
          width="238"
          height="531"
          viewBox="0 0 238 531"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="422.819"
            y="-70.8145"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 422.819 -70.8145)"
            fill="url(#paint0_linear_83:2)"
          />
          <rect
            opacity="0.3"
            x="426.568"
            y="144.886"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 426.568 144.886)"
            fill="url(#paint1_linear_83:2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_83:2"
              x1="517.152"
              y1="-251.373"
              x2="517.152"
              y2="459.865"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_83:2"
              x1="455.327"
              y1="-35.673"
              x2="455.327"
              y2="675.565"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-5 left-0 z-[-1]">
        <svg
          width="279"
          height="106"
          viewBox="0 0 279 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              d="M-57 12L50.0728 74.8548C55.5501 79.0219 70.8513 85.7589 88.2373 79.3692C109.97 71.3821 116.861 60.9642 156.615 63.7423C178.778 65.291 195.31 69.2985 205.911 62.3533C216.513 55.408 224.994 47.7682 243.016 49.1572C255.835 50.1453 265.278 50.8936 278 45.3373"
              stroke="url(#paint0_linear_72:302)"
            />
            <path
              d="M-57 1L50.0728 63.8548C55.5501 68.0219 70.8513 74.7589 88.2373 68.3692C109.97 60.3821 116.861 49.9642 156.615 52.7423C178.778 54.291 195.31 58.2985 205.911 51.3533C216.513 44.408 224.994 36.7682 243.016 38.1572C255.835 39.1453 265.278 39.8936 278 34.3373"
              stroke="url(#paint1_linear_72:302)"
            />
            <path
              d="M-57 23L50.0728 85.8548C55.5501 90.0219 70.8513 96.7589 88.2373 90.3692C109.97 82.3821 116.861 71.9642 156.615 74.7423C178.778 76.291 195.31 80.2985 205.911 73.3533C216.513 66.408 224.994 58.7682 243.016 60.1572C255.835 61.1453 265.278 61.8936 278 56.3373"
              stroke="url(#paint2_linear_72:302)"
            />
            <path
              d="M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373"
              stroke="url(#paint3_linear_72:302)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_72:302"
              x1="256.267"
              y1="53.6717"
              x2="-40.8688"
              y2="8.15715"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_72:302"
              x1="256.267"
              y1="42.6717"
              x2="-40.8688"
              y2="-2.84285"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_72:302"
              x1="256.267"
              y1="64.6717"
              x2="-40.8688"
              y2="19.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_72:302"
              x1="256.267"
              y1="76.6717"
              x2="-40.8688"
              y2="31.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;
