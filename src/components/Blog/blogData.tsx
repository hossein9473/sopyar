import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "چطور دانشگاه و کشور مناسب برای اپلای را انتخاب کنم؟",
    slug: "article1",
    paragraph:
      "جواب این سوال نه تنها بر شانس پذیرش، بلکه بر آینده تحصیلی و شغلی شما نیز تأثیر می‌گذارد.",
    image: "/images/blog/article1.jpg",
    author: {
      name: "تیم مهاجرت تحصیلی",
      image: "/images/blog/author-01.png",
      designation: "متخصص مهاجرت تحصیلی",
    },
    tags: ["انتخاب دانشگاه"],
    publishDate: "1403",
    content: `
      <section>
        <h3 class="text-2xl font-bold mb-4">مقدمه</h3>
        <p class="mb-6">انتخاب دانشگاه و کشور مناسب برای ادامه تحصیل یکی از مهم‌ترین تصمیمات زندگی تحصیلی شماست. این انتخاب بر آینده شغلی، سطح رفاه و حتی شخصیت شما تأثیر می‌گذارد.</p>
        
        <h3 class="text-2xl font-bold mb-4">معیارهای انتخاب کشور</h3>
        <ul class="list-disc pr-6 mb-6 space-y-2">
          <li><strong>هزینه زندگی و تحصیل:</strong> مقایسه شهریه دانشگاه‌ها و هزینه زندگی در کشورهای مختلف</li>
          <li><strong>سیاست‌های ویزا:</strong> بررسی شرایط اخذ ویزای دانشجویی و امکان کار حین تحصیل</li>
          <li><strong>بازار کار پس از تحصیل:</strong> فرصت‌های شغلی و شرایط دریافت اقامت پس از تحصیل</li>
          <li><strong>فرهنگ و زبان:</strong> تطابق فرهنگی و اهمیت یادگیری زبان کشور مقصد</li>
        </ul>
        
        <h3 class="text-2xl font-bold mb-4">راهنمای انتخاب دانشگاه</h3>
        <div class="bg-gray-50 p-6 dark:bg-gray-800 rounded-lg mb-6">
          <h4 class="font-bold mb-2">رتبه‌بندی دانشگاه‌ها:</h4>
          <p>استفاده از سیستم‌های رتبه‌بندی معتبر مانند QS، Times و Shanghai</p>
          
          <h4 class="font-bold mt-4 mb-2">نکات کلیدی:</h4>
          <ul class="list-disc pr-6 space-y-1">
            <li>تطابق رشته و تخصص دانشگاه با اهداف تحصیلی شما</li>
            <li>امکانات تحقیقاتی و آزمایشگاهی دانشگاه</li>
            <li>نسبت استاد به دانشجو و کیفیت تدریس</li>
            <li>شبکه فارغ‌التحصیلان و ارتباط با صنعت</li>
          </ul>
        </div>
        
        <h3 class="text-2xl font-bold mb-4">راهکارهای عملی</h3>
        <ol class="list-decimal pr-6 mb-6 space-y-3">
          <li>تهیه لیست اولیه از 10-15 دانشگاه بر اساس معیارهای شخصی</li>
          <li>بررسی دقیق وبسایت دانشگاه و بخش admissions</li>
          <li>ارتباط با دانشجویان فعلی و فارغ‌التحصیلان از طریق LinkedIn</li>
          <li>مشورت با مشاوران تحصیلی معتبر</li>
        </ol>
        
        <div class="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg">
          <h4 class="font-bold text-blue-800 mb-2 dark:text-stone-100">نکته طلایی:</h4>
          <p>بهترین دانشگاه برای شما لزوماً معروفترین دانشگاه نیست، بلکه دانشگاهی است که بیشترین تناسب را با اهداف، توانایی‌ها و شرایط مالی شما دارد.</p>
        </div>
      </section>
    `,
  },
  {
    id: 2,
    title: "چه زمانی برای اپلای اقدام کنم؟ بهترین زمان‌بندی اپلای",
    slug: "article2",
    paragraph:
      "برنامه‌ریزی درست، نیمی از مسیر موفقیت در اپلای است. یکی از پرتکرارترین سؤالات این است که «کی باید شروع کنم؟»",
    image: "/images/blog/article2.jpg",
    author: {
      name: "تیم مهاجرت تحصیلی",
      image: "/images/blog/author-02.png",
      designation: "متخصص برنامه‌ریزی تحصیلی",
    },
    tags: ["زمانبندی"],
    publishDate: "1403",
    content: `
      <section>
        <h3 class="text-2xl font-bold mb-4">چرا زمان‌بندی مهم است؟</h3>
        <p class="mb-6">اکثر دانشگاه‌های معتبر جهان ددلاین‌های مشخصی برای پذیرش دارند و دیر اقدام کردن می‌تواند شانس شما را برای دریافت پذیرش و بورسیه کاهش دهد.</p>
        
        <h3 class="text-2xl font-bold mb-4">جدول زمان‌بندی پیشنهادی</h3>
        <div class="overflow-x-auto mb-6">
          <table class="min-w-full bg-white border dark:bg-gray-800 border-gray-200">
            <thead>
              <tr class="bg-gray-100 dark:bg-gray-800">
                <th class="py-2 px-4 border-b">فصل پذیرش</th>
                <th class="py-2 px-4 border-b">مهلت اقدام</th>
                <th class="py-2 px-4 border-b">کارهای ضروری</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="py-2 px-4 border-b text-center">پاییز (سپتامبر)</td>
                <td class="py-2 px-4 border-b text-center">دی تا اسفند سال قبل</td>
                <td class="py-2 px-4 border-b text-center">آماده‌سازی مدارک، تماس با اساتید</td>
              </tr>
              <tr>
                <td class="py-2 px-4 border-b text-center">بهار (ژانویه)</td>
                <td class="py-2 px-4 border-b text-center">مرداد تا مهر همان سال</td>
                <td class="py-2 px-4 border-b text-center">تکمیل اپلیکیشن، ارسال مدارک</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 class="text-2xl font-bold mb-4">مراحل اصلی اپلای</h3>
        <div class="space-y-4 mb-6">
          <div class="border-l-4 border-blue-500 pl-4">
            <h4 class="font-bold">12-18 ماه قبل:</h4>
            <p>تعیین هدف، تحقیق درباره دانشگاه‌ها، آماده‌سازی زبان</p>
          </div>
          <div class="border-l-4 border-green-500 pl-4">
            <h4 class="font-bold">6-12 ماه قبل:</h4>
            <p>آماده‌سازی مدارک، تماس با اساتید، نوشتن SOP و CV</p>
          </div>
          <div class="border-l-4 border-purple-500 pl-4">
            <h4 class="font-bold">3-6 ماه قبل:</h4>
            <p>تکمیل اپلیکیشن، ارسال مدارک، پیگیری‌ها</p>
          </div>
        </div>
        
        <h3 class="text-2xl font-bold mb-4">نکات کلیدی</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <div class="bg-white dark:bg-gray-800 p-4 shadow rounded-lg">
            <h4 class="font-bold mb-2">زبان انگلیسی:</h4>
            <p>حداقل 6 ماه قبل از ددلاین‌ها مدرک زبان خود را دریافت کنید.</p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-4 shadow rounded-lg">
            <h4 class="font-bold mb-2">مدارک تحصیلی:</h4>
            <p>ترجمه رسمی مدارک ممکن است زمان‌بر باشد، زودتر اقدام کنید.</p>
          </div>
        </div>
        
        <div class="bg-yellow-50 dark:bg-gray-800 p-6 rounded-lg">
          <h4 class="font-bold text-yellow-800 mb-2">هشدار:</h4>
          <p>ددلاین برخی دانشگاه‌ها برای بورسیه‌های خاص ممکن است زودتر از مهلت عمومی پذیرش باشد. همیشه وبسایت دانشگاه را دقیق بررسی کنید.</p>
        </div>
      </section>
    `,
  },
  {
    id: 3,
    title: "چطور بورسیه تحصیلی بگیرم؟ از شرایط تا افزایش شانس پذیرش رایگان",
    slug: "article3",
    paragraph:
      "هزینه‌های بالا مانع بزرگی برای بسیاری از دانشجویان ایرانی است، اما گرفتن بورسیه، این مسیر را هموار می‌کند.",
    image: "/images/blog/article3.jpg",
    author: {
      name: "تیم مهاجرت تحصیلی",
      image: "/images/blog/author-03.png",
      designation: "متخصص بورسیه تحصیلی",
    },
    tags: ["بورسیه"],
    publishDate: "1403",
    content: `
      <section>
        <h3 class="text-2xl font-bold mb-4">انواع بورسیه‌های تحصیلی</h3>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="border p-4 rounded-lg">
            <h4 class="font-bold mb-2 text-blue-600">بورسیه کامل (Fully Funded)</h4>
            <p>شامل شهریه دانشگاه، هزینه زندگی و گاهی بیمه درمانی</p>
          </div>
          <div class="border p-4 rounded-lg">
            <h4 class="font-bold mb-2 text-green-600">بورسیه جزئی (Partial)</h4>
            <p>معمولاً بخشی از شهریه یا هزینه زندگی را پوشش می‌دهد</p>
          </div>
          <div class="border p-4 rounded-lg">
            <h4 class="font-bold mb-2 text-purple-600">دستیار تحقیق/تدریس (RA/TA)</h4>
            <p>در ازای کار در دانشگاه، شهریه و حقوق دریافت می‌کنید</p>
          </div>
        </div>
        
        <h3 class="text-2xl font-bold mb-4">شرایط عمومی دریافت بورسیه</h3>
        <ul class="list-disc pr-6 mb-6 space-y-2">
          <li>معدل بالا (معمولاً بالای 17 برای مقطع ارشد و دکتری)</li>
          <li>مدرک زبان معتبر (آیلتس حداقل 6.5 یا تافل 90)</li>
          <li>مقالات علمی، پروژه‌های تحقیقاتی یا سابقه کار مرتبط</li>
          <li>توصیه‌نامه‌های قوی از اساتید معتبر</li>
          <li>انگیزه‌نامه (SOP) حرفه‌ای و هدفمند</li>
        </ul>
        
        <h3 class="text-2xl font-bold mb-4">راهکارهای افزایش شانس</h3>
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
          <h4 class="font-bold mb-2">استراتژی‌های کاربردی:</h4>
          <ol class="list-decimal pr-6 space-y-2">
            <li>ارتباط مستقیم با اساتید (Email Outreach)</li>
            <li>سفارشی‌سازی انگیزه‌نامه برای هر دانشگاه</li>
            <li>شرکت در کنفرانس‌های بین‌المللی</li>
            <li>همکاری در پروژه‌های تحقیقاتی بین‌المللی</li>
          </ol>
        </div>
        
        <h3 class="text-2xl font-bold mb-4">منابع یافتن بورسیه</h3>
        <div class="space-y-4">
          <div class="flex items-start">
            <span class="bg-blue-100 dark:bg-gray-800 text-blue-800 p-2 rounded mr-3">1</span>
            <div>
              <h4 class="font-bold">وبسایت دانشگاه‌ها:</h4>
              <p>بخش Scholarships یا Financial Aid</p>
            </div>
          </div>
          <div class="flex items-start">
            <span class="bg-green-100 dark:bg-gray-800 text-green-800 p-2 rounded mr-3">2</span>
            <div>
              <h4 class="font-bold">سازمان‌های بین‌المللی:</h4>
              <p>فولبرایت، DAAD، Chevening و ...</p>
            </div>
          </div>
          <div class="flex items-start">
            <span class="bg-purple-100 dark:bg-gray-800 text-purple-800 p-2 rounded mr-3">3</span>
            <div>
              <h4 class="font-bold">وبسایت‌های تخصصی:</h4>
              <p>Scholars4dev, ScholarshipPortal</p>
            </div>
          </div>
        </div>
        
        <div class="bg-green-50 dark:bg-gray-800 p-6 rounded-lg mt-6">
          <h4 class="font-bold text-green-800 mb-2">تجربه موفق:</h4>
          <p>«با معدل 16.5 و آیلتس 6.5 توانستم بورسیه کامل مقطع دکتری در آلمان بگیرم. کلید موفقیت من ارتباط مستقیم با استاد و تطابق موضوع تحقیق با نیازهای آزمایشگاه او بود.» - علی، دانشجوی دکتری مهندسی برق</p>
        </div>
      </section>
    `,
  },
];
export default blogData;