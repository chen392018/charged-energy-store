export default function FeatureSection({
  handle,
  reversed,
}: {
  handle: string
  reversed: boolean
}) {
  return (
    <div
      className={`p-4 w-full md:flex ${
        reversed && "md:flex-row-reverse"
      } my-[16rem]`}
    >
      <div className="flex w-full border border-accent-900 flex-1 bg-primary-600 py-24 md:py-32 items-center justify-center">
        <h1 className="prose w-fit mx-auto text-[2rem] md:text-[3rem] lg:text-[4rem] uppercase font-normal m-0 px-1 text-accent-300 border border-accent-300 leading-none">
          Coming Soon
        </h1>
      </div>

      <div className="w-full flex items-center justify-evenly flex-1">
        <div className="prose py-16 md:py-24 px-12">
          <h2 className="uppercase font-normal tracking-tight text-lg text-primary-700 opacity-25">
            Charge Energy
          </h2>
          <h2 className="text-4xl text-primary-500">
            {productData[handle].title}
          </h2>
          <p className="text-primary-500 opacity-75">
            {productData[handle].description}
          </p>
          <a
            className="prose rounded py-2 px-4 bg-primary-500 hover:bg-primary-300 cursor-pointer"
            href={`/products`}
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  )
}

const productData: {
  [key: string]: {
    title: string
    description: string
    image: string
    link: string
  }
} = {
  dawn: {
    title: "Dawn",
    description:
      "An energy drink formulated to kick-start your day with a burst of energy. It contains a blend of caffeine, witamings and other ingredients to boost alertness and improve focus.",
    image: "/dawn.png",
    link: "/products/dawn",
  },
  noon: {
    title: "Noon",
    description:
      "Noon, an afternoon energy drink designed to combat the midday slump, offering a revitilising mix of ingredients like caffeiene and B-vitamins to restore energy and concentration.",
    image: "/noon.png",
    link: "/products/noon",
  },
  dusk: {
    title: "Dusk",
    description:
      "Dusk, an evening energy drink, is tailored to provide a gentle energy lift without disrupting sleep patterns, often containing lower caffiene levels and calming ingredients.",
    image: "/dusk.png",
    link: "/products/dusk",
  },
}
