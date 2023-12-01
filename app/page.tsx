import HeroSection from "@/components/landing/Hero"
import FeatureOne from "@/components/landing/FeatureOne"

export default function Home() {
  return (
    <>
      <section className="relative isolate px-6 lg:px-8">
        <HeroSection />
      </section>
      <section className="overflow-hidden py-12 sm:py-24">
        <FeatureOne />
      </section>
    </>
  )
}
