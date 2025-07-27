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
      image: "",
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
      "برنامه‌ریزی درست، نیمی از مسیر موفقیت در اپلای است. یکی از پرتکرارترین سؤالات این است «کی باید شروع کنم؟»",
    image: "/images/blog/article2.jpg",
    author: {
      name: "تیم مهاجرت تحصیلی",
      image: "",
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
                <td class="py-2 px-4 border-b text-center">مهر تا فروردین</td>
                <td class="py-2 px-4 border-b text-center">آماده‌سازی مدارک، تماس با اساتید، تکمیل اپلیکیشن و ارسال مدارک</td>
              </tr>
              <tr>
                <td class="py-2 px-4 border-b text-center">بهار (ژانویه)</td>
                <td class="py-2 px-4 border-b text-center">اردیبهشت تا مهر</td>
                <td class="py-2 px-4 border-b text-center">آماده‌سازی مدارک، تماس با اساتید، تکمیل اپلیکیشن و ارسال مدارک</td>
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
      image: "",
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
  {
    id: 4,
    title: "مدارک مورد نیاز برای اپلای تحصیلی (کارشناسی، ارشد، دکتری)",
    slug: "article4",
    paragraph:
      "در این مقاله بررسی می‌کنیم برای اپلای در مقاطع مختلف به چه مدارکی نیاز دارید و چه نکاتی را باید رعایت کنید.",
    image: "/images/blog/article4.jpg",
    author: {
      name: "تیم مهاجرت تحصیلی",
      image: "",
      designation: "متخصص مدارک اپلای",
    },
    tags: ["مدارک اپلای"],
    publishDate: "1403",
    content: `
      <section>
        <h3 class="text-2xl font-bold mb-4">مقدمه</h3>
        <p class="mb-6">اگر قصد دارید برای ادامه تحصیل در دانشگاه‌های بین‌المللی اقدام کنید، یکی از مهم‌ترین مراحل، آماده‌سازی مدارک اپلای تحصیلی است. داشتن مدارک کامل، دقیق و حرفه‌ای نه‌تنها شانس پذیرش شما را افزایش می‌دهد، بلکه روند اپلای را نیز سریع‌تر و بدون دردسر پیش می‌برد.</p>
  
        <h3 class="text-2xl font-bold mb-4">📌 مدارک اصلی برای اپلای تحصیلی</h3>
        <ul class="list-disc pr-6 mb-6 space-y-2">
          <li><strong>رزومه تحصیلی (Academic CV):</strong> خلاصه‌ای از سوابق تحصیلی، پژوهشی، مهارت‌ها و افتخارات</li>
          <li><strong>انگیزه‌نامه (SOP):</strong> نامه‌ای برای بیان دلایل اپلای، اهداف آینده و تناسب با دانشگاه</li>
          <li><strong>توصیه‌نامه (LOR):</strong> تأییدیه‌هایی از اساتید یا مدیران که شایستگی شما را نشان می‌دهند</li>
          <li><strong>ریزنمرات:</strong> ترجمه رسمی کارنامه دروس گذرانده‌شده</li>
          <li><strong>مدرک زبان:</strong> مانند IELTS، TOEFL یا Duolingo با نمره مورد پذیرش دانشگاه</li>
          <li><strong>مدرک تحصیلی مقطع قبلی:</strong> مدرک رسمی فارغ‌التحصیلی</li>
          <li><strong>پاسپورت معتبر:</strong> با اعتبار چند ماهه</li>
        </ul>
  
        <h3 class="text-2xl font-bold mb-4">📌 مدارک تکمیلی بسته به کشور یا دانشگاه</h3>
        <ul class="list-disc pr-6 mb-6 space-y-2">
          <li><strong>نمونه کار (Portfolio):</strong> برای رشته‌های هنری یا طراحی</li>
          <li><strong>پروپوزال تحقیقاتی:</strong> مخصوص مقطع دکتری یا پژوهش‌محور</li>
          <li><strong>فرم‌های اختصاصی یا Application Fee:</strong> بر اساس سیاست هر دانشگاه</li>
          <li><strong>ترجمه رسمی با مهر دادگستری و وزارت امور خارجه:</strong> برای برخی کشورها ضروری است</li>
        </ul>
  
        <h3 class="text-2xl font-bold mb-4">❗ نکات مهم قبل از اپلای</h3>
        <div class="bg-yellow-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
          <ul class="list-disc pr-6 space-y-2">
            <li>بررسی الزامات هر دانشگاه یا کشور به‌طور دقیق در وبسایت رسمی</li>
            <li>آشنایی با مراحل اداری خاص برای کشورهایی مثل آلمان، فرانسه، ایتالیا</li>
            <li>توجه ویژه به ددلاین‌ها و برنامه‌ریزی زودهنگام</li>
          </ul>
        </div>

      </section>
    `,
  },
  {
    id: 5,
    title: "چطور استاد مناسب پیدا کنیم؟",
    slug: "article5",
    paragraph:
      "برای نوشتن یک انگیزه‌نامه حرفه‌ای، باید دقیقاً بدانید قرار است برای چه استاد یا پوزیشنی اپلای کنید. این مقاله ۵ روش عملی برای پیدا کردن استاد مناسب را معرفی می‌کند.",
    image: "/images/blog/article5.jpg",
    author: {
      name: "تیم مهاجرت تحصیلی",
      image: "",
      designation: "متخصص نگارش SOP",
    },
    tags: ["انگیزه‌نامه", "SOP", "پیدا کردن استاد"],
    publishDate: "1403",
    content: `
      <section>
        <h3 class="text-2xl font-bold mb-4">مقدمه</h3>
        <p class="mb-6">اگر می‌خواهی برای نوشتن یک SOP حرفه‌ای از ما کمک بگیری، اول باید بدونیم دقیقاً برای کدوم استاد یا پوزیشن داری اپلای می‌کنی. چرا؟ چون یک انگیزه‌نامه حرفه‌ای و تأثیرگذار باید دقیقاً متناسب با اون موقعیت و استاد نوشته بشه—not generic!</p>
  
        <h3 class="text-2xl font-bold mb-4">۵ روش کاربردی برای پیدا کردن استاد مناسب</h3>
        <ol class="list-decimal pr-6 space-y-4 mb-6">
          <li>
            <strong>سایت رسمی دانشگاه‌ها:</strong> وارد وبسایت دانشگاه هدف شو، به بخش <em>Department</em> یا <em>Faculty</em> برو. زمینه‌های تحقیقاتی، رزومه و پروژه‌های هر استاد مشخصه. این یکی از بهترین و مستقیم‌ترین منابعه.
          </li>
          <li>
            <strong>Google Scholar و Scopus:</strong> موضوعات مورد علاقه‌ات رو به‌صورت کلیدواژه جستجو کن. به‌راحتی می‌تونی به مقالات و اساتیدی که تو حوزه مدنظرت فعال هستن دسترسی پیدا کنی.
          </li>
          <li>
            <strong>پلتفرم‌های علمی مثل ResearchGate و Academia:</strong> اساتید، مقالاتشون و پروژه‌هاشون رو در این سایت‌ها منتشر می‌کنن. حتی خیلی وقت‌ها می‌تونی مستقیم بهشون پیام بدی یا ازشون مشاوره بگیری.
          </li>
          <li>
            <strong>شبکه‌سازی در LinkedIn:</strong> اساتید و دانشجوهای دانشگاه‌های مختلف رو پیدا کن، دنبال کن و باهاشون تعامل کن. خیلی وقت‌ها ارتباط از این طریق شکل می‌گیره.
          </li>
          <li>
            <strong>کنفرانس‌ها و وبینارهای علمی:</strong> شرکت در رویدادهای داخلی و خارجی، فرصت طلایی برای ارتباط مستقیم با اساتید فراهم می‌کنه. این ارتباط‌ها می‌تونن مسیر پذیرشت رو هموار کنن.
          </li>
        </ol>
  
        <h3 class="text-2xl font-bold mb-4">نکته کلیدی:</h3>
        <div class="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
          <p><strong>یک SOP عمومی و کلی، تأثیرگذاری کمتری داره.</strong> اما وقتی دقیقاً برای یک استاد، پروژه یا پوزیشن خاص نوشته بشه، احتمال دریافت پذیرش و حتی فاند به‌مراتب بیشتره.</p>
        </div>
      </section>
    `,
  },
  {
    id: 6,
    title: "تفاوت SOP و Cover Letter چیست؟",
    slug: "article4",
    paragraph:
      "در مسیر اپلای، دو سند مهم یعنی SOP و Cover Letter ممکن است مشابه به نظر برسند، اما اهداف، ساختار و سبک نگارش متفاوتی دارند.",
    image: "/images/blog/article6.jpg",
    author: {
      name: "تیم مهاجرت تحصیلی",
      image: "",
      designation: "راهنمای نوشتن SOP و Cover Letter",
    },
    tags: ["مدارک اپلای"],
    publishDate: "1403",
    content: `
      <section>
        <h3 class="text-2xl font-bold mb-4">مقدمه</h3>
        <p class="mb-6">در مسیر اپلای برای دانشگاه‌ها یا موقعیت‌های پژوهشی، دو مدرک مهم بارها به گوش‌تان می‌خورد: SOP (Statement of Purpose) و Cover Letter. اما این دو چه تفاوتی با هم دارند و هرکدام دقیقاً چه هدفی را دنبال می‌کنند؟</p>
  
        <p class="mb-6">در نگاه اول ممکن است شبیه به نظر برسند، چون هر دو درباره‌ی شما و انگیزه‌تان برای اپلای هستند. ولی در واقع تفاوت‌های جدی دارند که اگر آن‌ها را رعایت نکنید، ممکن است تاثیر منفی روی اپلیکیشن شما بگذارد.</p>
  
        <h3 class="text-2xl font-bold mb-4">📌 تعریف SOP (Statement of Purpose)</h3>
        <p class="mb-6">SOP یک متن ساختاریافته است که برای اپلای به دانشگاه‌ها، مخصوصاً برای مقاطع تحصیلات تکمیلی (ارشد یا دکتری) نوشته می‌شود. در این متن، شما باید درباره‌ی:</p>
        <ul class="list-disc pr-6 mb-6 space-y-2">
          <li>مسیر تحصیلی و شغلی‌تان</li>
          <li>علاقه‌مندی‌های پژوهشی</li>
          <li>دلایل انتخاب آن دانشگاه یا استاد</li>
          <li>هدف‌های بلندمدت حرفه‌ای و آکادمیک</li>
        </ul>
        <p class="mb-6">✅ این سند بیشتر شبیه یک داستان تحلیلی درباره‌ی گذشته، حال و آینده شماست.</p>
  
        <h3 class="text-2xl font-bold mb-4">📌 تعریف Cover Letter</h3>
        <p class="mb-6">Cover Letter یا نامه‌ی پوششی بیشتر برای اپلای کاری یا موقعیت‌های پژوهشی خاص (مثل RA یا TA یا فرصت‌های صنعتی) استفاده می‌شود.</p>
        <ul class="list-disc pr-6 mb-6 space-y-2">
          <li>خودتان را معرفی می‌کنید</li>
          <li>درباره‌ی مهارت‌ها و تجربیات مرتبط توضیح می‌دهید</li>
          <li>به شرکت یا دانشگاه می‌گویید چرا شما فرد مناسبی برای آن پوزیشن هستید</li>
          <li>و در نهایت دعوت به تماس می‌کنید</li>
        </ul>
        <p class="mb-6">✅ لحن آن رسمی‌تر و مستقیم‌تر از SOP است.</p>
  
        <h3 class="text-2xl font-bold mb-4">🔍 تفاوت‌های کلیدی SOP و Cover Letter</h3>
        <div class="overflow-x-auto mb-6">
          <table class="min-w-full bg-white border dark:bg-gray-800 border-gray-200 text-sm text-right">
            <thead>
              <tr class="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
                <th class="py-2 px-4 border-b">مورد</th>
                <th class="py-2 px-4 border-b">Statement of Purpose (SOP)</th>
                <th class="py-2 px-4 border-b">Cover Letter</th>
              </tr>
            </thead>
            <tbody class="text-gray-700 dark:text-gray-200">
              <tr>
                <td class="py-2 px-4 border-b">مخاطب</td>
                <td class="py-2 px-4 border-b">کمیته پذیرش دانشگاه</td>
                <td class="py-2 px-4 border-b">کارفرما / استاد برای موقعیت مشخص</td>
              </tr>
              <tr>
                <td class="py-2 px-4 border-b">تمرکز</td>
                <td class="py-2 px-4 border-b">داستان تحصیلی و تحقیقاتی + هدف‌های آینده</td>
                <td class="py-2 px-4 border-b">مهارت‌ها و تناسب مستقیم با پوزیشن</td>
              </tr>
              <tr>
                <td class="py-2 px-4 border-b">طول معمول</td>
                <td class="py-2 px-4 border-b">۷۰۰ تا ۱۲۰۰ کلمه</td>
                <td class="py-2 px-4 border-b">۳۰۰ تا ۴۰۰ کلمه</td>
              </tr>
              <tr>
                <td class="py-2 px-4 border-b">سبک نگارش</td>
                <td class="py-2 px-4 border-b">نیمه‌داستانی، تحلیلی</td>
                <td class="py-2 px-4 border-b">رسمی، حرفه‌ای و مستقیم</td>
              </tr>
              <tr>
                <td class="py-2 px-4 border-b">هدف نهایی</td>
                <td class="py-2 px-4 border-b">متقاعد کردن دانشگاه برای پذیرش تحصیلی</td>
                <td class="py-2 px-4 border-b">متقاعد کردن برای دعوت به مصاحبه یا همکاری</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <h3 class="text-2xl font-bold mb-4">✨ نتیجه‌گیری</h3>
        <p class="mb-6">اگرچه SOP و Cover Letter هر دو ابزارهایی برای معرفی شما هستند، اما هدف، سبک و مخاطب آن‌ها متفاوت است. بنابراین، استفاده نادرست از آن‌ها می‌تواند پیام نادرستی منتقل کند.</p>
        <p class="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg">اگر برای نوشتن هر کدام از این مدارک نیاز به راهنمایی یا حتی نگارش اختصاصی داری، با ما تماس بگیر تا بر اساس موقعیتت بهترین متن رو برات آماده کنیم.</p>
      </section>
    `,
  }
];
export default blogData;