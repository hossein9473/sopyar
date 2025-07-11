import Pricing from "@/components/Pricing";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "خدمات",
  description: "در این صفحه‌ می‌توانید قیمت نگارش انگیزه نامه، رزومه و توصیه نامه را مشاهده کنید",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="خدمات"
        description=" تحویل انگیزه‌نامه، رزومه و توصیه‌نامه‌ها به صورت ۱۰ روزه و ۳ روزه (فوری) ارائه می‌گردد."
      />
        <Pricing />
    </>
  );
};

export default AboutPage;
