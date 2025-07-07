import AnimatedFadeIn from "@/components/AnimatedFadeIn";
import CTASection from "@/components/CTASection";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-background text-base">
      {/* Header Block */}
      <AnimatedFadeIn>       
        <section className="px-6 pt-24 pb-16 text-center">
          <h1 className="text-4xl font-heading mb-4">About Serein Stay</h1>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            A boutique hideaway crafted for stillness, story, and the subtleties of true hospitality.
          </p>
        </section>
      </AnimatedFadeIn>

      {/* Image + Story */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-16">
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow">
          {/* Replace with a warm photo: hotel owner talking with guests or sunlit lobby */}
          <Image
            src="/images/about-story.webp"
            alt="Our Story"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-heading mb-4">Our Story</h2>
          <p className="text-muted leading-relaxed mb-4">
            Serein Stay began as a quiet dream — a space where the noise of the world dissolves,
            and the elegance of simplicity returns. Set in the hills, every corner of our property is intentionally designed: soft lighting, natural textures, a library of forgotten books.
          </p>
          <p className="text-muted leading-relaxed">
            We host not just travelers — but thinkers, artists, newlyweds, and the beautifully tired.
            Our team is small, our care is personal, and our goal is always the same: help you remember what presence feels like.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-heading mb-10">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            <div>
              <h3 className="text-base font-semibold mb-2">Intentionality</h3>
              <p className="text-muted text-sm">
                Every detail — from linen thread count to your morning tea — is carefully considered to ease your stay.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-2">Stillness</h3>
              <p className="text-muted text-sm">
                We believe in rest without distraction. No loud TVs. Just peace, nature, and clarity.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-2">Kindness</h3>
              <p className="text-muted text-sm">
                Hospitality, to us, means soft voices, open hearts, and honest care — always human, never robotic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="We’re not just a place to stay — we’re a place to return to."
        subtitle="Reserve your first visit. Or just say hello."
        cta={{ label: "Book Now", href: "/booking" }}
      />
    </div>
  );
}
