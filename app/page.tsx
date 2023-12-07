import HeroSection from "@/components/landing/Hero"
import Initiatives from "@/components/landing/Initiatives"
import FeatureOne from "@/components/landing/FeatureOne"
import FeatureSectionBackground from "@/components/landing/Background"

export default async function Home() {
  return (
    <>
      <section className="relative isolate px-6 lg:px-8 min-h-screen w-full hero-image">
        <HeroSection />
      </section>
      <section className="py-12 sm:py-24">
        <Initiatives />
      </section>
      <FeatureSectionBackground>
        <div className="prose text-center mx-auto mb-12">
          <h1 className=" w-fit mx-auto text-4xl font-bold tracking-wider uppercase">
            Our Products
          </h1>
          <p>
            Charge Energy provides a range of energy drinks designed to provide
            a boost of energy throughout the day.
          </p>
        </div>
        <FeatureOne handle="dawn" reversed={false} />
        <FeatureOne handle="noon" reversed={true} />
        <FeatureOne handle="dusk" reversed={false} />
      </FeatureSectionBackground>
    </>
  )
}
