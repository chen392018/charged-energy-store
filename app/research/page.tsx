import Image from "next/image"
import promoShot from "@/public/promo-shot.png"
import BlogCard from "@/components/research/BlogCard"

export default function ResearchPage() {
  const blogs = [
    {
      title: "Power Up Your Day: The Ultimate Guide to Energy Drinks!",
      body: "Elevate your energy levels and kickstart your day with our comprehensive guide to energy drinks! From revitalizing your senses to tackling that afternoon slump, we've got the lowdown on the best-kept secrets of energy elixirs. Get ready to uncap the potential of your day!",
      readTime: "8 min",
      date: "Jan 20, 2023",
      img: {
        src: promoShot,
        alt: "Charged energy promo shot",
      },
    },
    {
      title: "Sip and Soar: The Energy Boost Chronicles!",
      body: "Fuel your day with boundless energy as we embark on a journey through the exhilarating universe of energy drinks! Discover the secrets to overcoming fatigue, unlocking focus, and experiencing a vitality like never before. Let's dive into the ultimate guide to elevate your energy levels and conquer the day!",
      readTime: "6 min",
      date: "Feb 15, 2023",
      img: {
        src: promoShot,
        alt: "Charged energy promo shot",
      },
    },
    {
      title: "Rise and Thrive: Mastering Mornings with Energy Elixirs",
      body: "Transform your mornings into a symphony of productivity with our expert guide to energy elixirs! From the first sip to conquering the daily grind, we've curated the ultimate elixir lineup to boost your vitality and keep you at peak performance. Get ready to kickstart your day and embrace the dawn of a more energized you!",
      readTime: "7 min",
      date: "Mar 10, 2023",
      img: {
        src: promoShot,
        alt: "Charged energy promo shot",
      },
    },
    {
      title: "Zen Fuel: Unwind with Relaxation-Infused Energy Drinks",
      body: "Experience a new dimension of energy drinks designed to revitalize and relax simultaneously. Our guide explores the fusion of energy and tranquility, introducing you to the world of stress-relief elixirs. Find out how these beverages can elevate your mood, sharpen your focus, and bring a sense of calm to your hectic day.",
      readTime: "5 min",
      date: "Apr 5, 2023",
      img: {
        src: promoShot,
        alt: "Charged energy promo shot",
      },
    },

    {
      title: "Flavor Fiesta: Exploring the Palette of Energy Drink Delights",
      body: "Dive into a vibrant celebration of flavors with our guide to the most delicious energy drinks on the market! From exotic blends to classic favorites, we explore the taste sensations that will tantalize your taste buds. Discover how these energizing elixirs can not only boost your stamina but also treat your palate to an unforgettable experience.",
      readTime: "9 min",
      date: "May 20, 2023",
      img: {
        src: promoShot,
        alt: "Charged energy promo shot",
      },
    },
  ]
  return (
    <main>
      <section className="my-12 sm:my-24 flex flex-col gap-12 items-center justify-center px-8 md:px-16 sm:flex-row">
        <div className="sm:w-1/2">
          <h1 className="text-4xl text-accent-200 mb-2">Research</h1>
          <p className="text-accent-700 border-t pt-4 text-base sm:text-lg">
            At charge, we beleive that at the core of any good product is good
            research. That is why we place a heavy emphasis on constantly
            researching and developing our products. We want to ensure that our
            products are the best they can be, and that you are getting the
            highest quality ingredients.
          </p>
        </div>
        <div>
          <Image
            src={promoShot}
            width={400}
            height={400}
            alt="Charge Promo Shot"
            className="rounded-xl glow-sm"
          />
        </div>
      </section>

      {/* Blog posts */}
      <section className="px-8 py-12 space-y-12 lg:px-16 md:py-24 md:space-y-24">
        <h2 className="text-accent-200 text-center text-3xl md:text-4xl">
          Blogs
        </h2>

        {/* Blogs grid */}
        <div className="w-fit mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center justify-center gap-12">
          {/* blog card */}
          {blogs.map((blog) => (
            <BlogCard key={blog.title} content={blog} />
          ))}
        </div>
      </section>
    </main>
  )
}
