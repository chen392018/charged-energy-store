import Image from "next/image"

export default function ResearchPage() {
  return (
    <>
      <section className="my-12 sm:my-24 w-full flex items-center justify-between px-16">
        <div className="flex-1">
          <h1 className="text-4xl text-accent-200 mb-2">Research</h1>
          <p className="text-accent-700 border-t pt-4">
            At charge, we beleive that at the core of any good product is good
            research. That is why we place a heavy emphasis on constantly
            researching and developing our products. We want to ensure that our
            products are the best they can be, and that you are getting the
            highest quality ingredients.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/promo-shot.png"
            width={400}
            height={400}
            alt="Charge Promo Shot"
            className="rounded-xl mx-auto glow-sm"
          />
        </div>
      </section>
    </>
  )
}
