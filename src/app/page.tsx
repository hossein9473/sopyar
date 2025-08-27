import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import FAQ from "@/components/FAQ";
import CoverImage from "@/components/Common/CoverImage";

export const metadata: Metadata = {
  title: "نگارش حرفه‌ای SOP, CV, LOR",
  description: "ما به دانشجویان کمک می‌کنیم با نوشتن حرفه‌ای انگیزه‌نامه، رزومه و توصیه‌نامه، شانس پذیرش در بهترین دانشگاه‌های بین‌المللی را افزایش دهند.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <CoverImage />
      <Features />
      {/* <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo /> */}
      <Blog />
      <Testimonials />
      {/* <Pricing /> */}
      <Contact />
      <FAQ />
    </>
  );
}
