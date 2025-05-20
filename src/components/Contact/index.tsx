import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div dir="rtl" className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                ثبت درخواست از طریق تلگرام
              </h2>
              <p className="mb-8 text-base font-medium text-body-color dark:text-body-color-dark leading-relaxed">
                برای ثبت درخواست کافی‌ست از طریق دکمه‌ی زیر وارد تلگرام شوید و یک پیام شامل موارد زیر برای ما ارسال کنید. پیام شما حداکثر پس از یک روز کاری پاسخ داده خواهد شد:
                <br />
                <br />✓ نام و نام خانوادگی
                <br />✓ آخرین مقطع و رشته‌ی تحصیلی
                <br />✓ شرح خلاصه‌ای از درخواست، برای مثال شامل تعداد انگیزه‌نامه‌ها و رزومه‌ها
              </p>
              <a
                href="https://t.me/SOP_Yar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-3 text-white text-base font-semibold shadow-lg transition duration-300 hover:from-blue-600 hover:to-blue-800 hover:shadow-xl"
              >
                <svg
                  className="h-5 w-5 fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.857 13.533l-.396 4.354c.567 0 .812-.244 1.11-.538l2.664-2.511 5.525 4.034c1.014.558 1.735.264 1.99-.939L24 3.75c.32-1.297-.466-1.802-1.433-1.488L1.116 9.375c-1.278.464-1.26 1.12-.217 1.412l5.575 1.74 12.95-8.157c.61-.386 1.168-.177.711.209L9.857 13.533z" />
                </svg>
                ارسال پیام در تلگرام
              </a>
              <p className="mb-8 text-base font-medium text-body-color dark:text-body-color-dark leading-relaxed">
                <br />
                پس از ثبت درخواست، اطلاعات تکمیلی از شما دریافت می‌شود و فرآیند آغاز می‌گردد.
              </p>
            </div>
          </div>
          {/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
