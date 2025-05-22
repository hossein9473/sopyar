import blogData from "@/components/Blog/blogData";
import { notFound } from "next/navigation";
import Image from "next/image";

interface BlogDetailsProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogData.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: BlogDetailsProps) {
  const awaitedParams = await params;
  const blog = blogData.find((blog) => blog.slug === awaitedParams.slug);

  if (!blog) {
    return {
      title: "Not Found",
      description: "Blog not found",
    };
  }

  return {
    title: blog.title,
    description: blog.paragraph,
  };
}

export default async function BlogDetailsPage({ params }: BlogDetailsProps) {
  const awaitedParams = await params;
  const blog = blogData.find((blog) => blog.slug === awaitedParams.slug);

  if (!blog) {
    return notFound();
  }

  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div dir="rtl" className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h1 className="mb-8 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight dark:text-white">
                  {blog.title}
                </h1>

                <div className="mb-10 w-full overflow-hidden rounded-lg">
                  <div className="relative aspect-[37/22] w-full">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <p className="text-gray-700 mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  {blog.paragraph}
                </p>

                <div
                  className="prose max-w-none prose-p:text-gray-600 prose-headings:text-gray-900 prose-li:text-gray-600 prose-ul:pr-6 prose-ol:pr-6"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}