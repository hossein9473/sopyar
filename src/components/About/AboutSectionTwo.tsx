import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.jpg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2.jpg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div dir='rtl' className="mb-9 text-justify">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                چرا همراهی با اس او پی یار نتیجه می‌دهد؟   
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  ما به هر پرونده‌، با دقت و وسواس خاصی نگاه می‌کنیم و همه چیز را شخصی‌سازی می‌کنیم. هر متن، مخصوص خود شماست: با توجه به تجربیات، اهداف، شخصیت و دانشگاه مدنظرتان.
                  هر جمله‌ای که از طرف ما نوشته‌ می‌شود، با هدف بالا بردن شانس شما برای پذیرش است.
                  ما یک تجربه‌ی مشترک هستیم که با هر دانشجو، رشد کرده‌ایم. نتیجه؟ پذیرش‌های موفق، بازخوردهای دلگرم‌کننده و اعتماد روزافزون.
                  اگر شما هم تصمیم دارید آینده‌تان را در دانشگاهی بین‌المللی بسازید، ما آماده‌ایم تا از همین لحظه در کنارتان باشیم.
                </p>
              </div>
              {/* <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Premier support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Next.js
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
                  consectetur adipiscing elit setim.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
