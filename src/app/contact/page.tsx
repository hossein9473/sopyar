import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ثبت درخواست انگیزه نامه ، رزومه و توصیه‌نامه",
  description: "ثبت سفارش انگیزه نامه ، رزومه و توصیه‌نامه",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="ثبت درخواست"
        description="برای ثبت درخواست انگیزه نامه ، رزومه و توصیه‌نامه داستان مسیر خود را برای ما بنویسید."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
