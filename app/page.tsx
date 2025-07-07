import Hero from "@/components/Hero";
import StoryFunnel from "@/components/StoryFunnel";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import AnimatedFadeIn from "@/components/AnimatedFadeIn";

export default function Home() {
  return (
    <>
      <Hero
        title="Where calm meets elegance."
        subtitle="Experience a boutique stay crafted for memory, serenity, and beauty. Nestled in nature, designed for rest."
        cta={{ label: "Book Your Escape", onClick: () => window.location.href = "/booking" }}
      />

      <StoryFunnel />

      <Testimonials />

      <CTASection
        title="Ready to escape the noise?"
        subtitle={"Serein Stay is your oasis. Don’t wait to feel renewed."}
        cta={{ label: "Book Now", href: "/booking" }}
      />
    </>
  );
}
