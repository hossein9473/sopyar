import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "چطور دانشگاه و کشور مناسب برای اپلای را انتخاب کنم؟",
    paragraph:
      "یکی از اولین و مهم‌ترین تصمیم‌هایی که هر فرد در مسیر اپلای با آن روبه‌رو می‌شود، انتخاب کشور و دانشگاه مقصد است. این تصمیم نه تنها بر شانس پذیرش، بلکه بر آینده تحصیلی و شغلی شما نیز تأثیر مستقیم دارد.",
    image: "/images/blog/article1.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "چه زمانی برای اپلای اقدام کنم؟ بهترین زمان‌بندی اپلای",
    paragraph:
      "برنامه‌ریزی درست، نیمی از مسیر موفقیت در اپلای است. یکی از پرتکرارترین سؤالات جوانان این است که «کی باید شروع کنم؟",
    image: "/images/blog/article2.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "چطور بورسیه تحصیلی بگیرم؟ از شرایط تا افزایش شانس پذیرش رایگان",
    paragraph:
      "هزینه‌های بالا مانع بزرگی برای بسیاری از دانشجویان ایرانی است، اما گرفتن بورسیه، این مسیر را هموار می‌کند.",
    image: "/images/blog/article3.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
