'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'برای اپلای تحصیلی چه مدارکی لازم است؟',
    answer:
      'رزومه، انگیزه‌نامه، توصیه‌نامه، ریزنمرات، مدرک زبان (مثل IELTS یا TOEFL)، مدرک تحصیلی قبلی و پاسپورت معتبر.',
  },
  {
    question: 'SOP چیست و چرا مهم است؟',
    answer:
      'SOP یا Statement of Purpose نامه‌ای است که در آن اهداف تحصیلی و شغلی خود را توضیح می‌دهید. این نامه برای بررسی انگیزه و آمادگی شما بسیار مهم است.',
  },
  {
    question: 'چند توصیه‌نامه برای اپلای نیاز دارم؟',
    answer:
      'معمولاً ۲ یا ۳ توصیه‌نامه از اساتید دانشگاه یا کارفرما نیاز است. توصیه‌نامه‌ها باید مرتبط با رشته و توانمندی‌های علمی شما باشند.',
  },
  {
    question: 'آیا می‌توان بدون مدرک زبان اپلای کرد؟',
    answer:
      'برخی دانشگاه‌ها پذیرش مشروط ارائه می‌دهند، اما در بیشتر موارد ارائه مدرک زبان الزامی است.',
  },
  {
    question: 'برای اپلای دکتری چه مدارک اضافه‌تری لازم است؟',
    answer:
      'برای اپلای دکتری معمولاً به پروپوزال تحقیقاتی نیاز دارید که موضوع پژوهش آینده‌تان را مشخص می‌کند.',
  },
  {
    question: 'آیا ترجمه رسمی مدارک الزامی است؟',
    answer:
      'بله، بیشتر دانشگاه‌ها فقط ترجمه رسمی با مهر دادگستری و وزارت امور خارجه را می‌پذیرند.',
  },
  {
    question: 'بهترین زمان برای آماده‌سازی مدارک اپلای کی است؟',
    answer:
      'حداقل ۶ ماه قبل از ددلاین دانشگاه باید شروع کنید تا برای آزمون زبان، نگارش مدارک و جمع‌آوری اسناد زمان کافی داشته باشید.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="overflow-hidden pb-12 md:pb-16 lg:pb-24">
      <div className="container">
        <div>
          <div dir="rtl" className="w-full">
            <div className="mt-3 mb-12 rounded-2xl bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h2 className="text-2xl font-bold mb-18 text-right">سوالات متداول:</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <button
                      className="w-full text-right text-lg font-semibold text-gray-900 dark:text-white flex justify-between items-center"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={activeIndex === index}
                      aria-controls={`faq-answer-${index}`}
                    >
                      {faq.question}
                      <span>{activeIndex === index ? '−' : '+'}</span>
                    </button>
                    {activeIndex === index && (
                      <div
                        id={`faq-answer-${index}`}
                        className="mt-2 text-sm text-gray-700 dark:text-gray-300"
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
