import Hero from "@/components/Hero";
import ImageCard from "@/components/ImageCard";
import CTASection from "@/components/CTASection";

const rooms = [
  {
    title: "Garden View Suite",
    description: "Wake to morning light and birdsong in our peaceful garden suite.",
    image: "/images/room1.jpg", // Placeholder image: calm garden balcony
    href: "/booking",
  },
  {
    title: "Skyline Loft",
    description: "Elegant open-plan suite with panoramic hilltop views.",
    image: "/images/room33.webp", // Placeholder: modern room with large windows
    href: "/booking",
  },
  {
    title: "Heritage Room",
    description: "A touch of timeless charm, curated for deep rest.",
    image: "/images/room3.webp", // Placeholder: classic decor, moody lighting
    href: "/booking",
  },
];

export default function RoomsPage() {
  return (
    <>
      <Hero
        title="Boutique Rooms Designed to Restore"
        subtitle="Each space is crafted for presence, stillness, and aesthetic delight."
      />

      <section className="max-w-7xl mx-auto px-6 py-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room, i) => (
          <ImageCard key={i} {...room} />
        ))}
      </section>

      <CTASection
        title="One night can change everything."
        subtitle="Start your escape today — reserve your preferred suite now."
        cta={{ label: "Book a Room", href: "/booking" }}
      />
    </>
  );
}
