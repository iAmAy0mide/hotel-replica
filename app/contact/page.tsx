import CTASection from "@/components/CTASection";

export default function ContactPage() {
  return (
    <div className="bg-background text-base">
      {/* Intro */}
      <section className="px-6 pt-24 pb-12 text-center">
        <h1 className="text-4xl font-heading mb-4">We’re Here to Help</h1>
        <p className="text-muted max-w-xl mx-auto text-lg">
          Whether it’s a question, a special request, or just to say hello — we’d love to hear from you.
        </p>
      </section>

      {/* Contact Details + Form */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl font-heading mb-4">Contact Details</h2>
          <p className="mb-3 text-muted">📍 123 Serein Way, Tranquil Hills</p>
          <p className="mb-3 text-muted">📞 +1 (800) 123–4567</p>
          <p className="mb-3 text-muted">📧 hello@sereinstay.com</p>
          <p className="text-muted">🕒 Concierge Hours: 7am – 10pm daily</p>
        </div>

        <div>
          <h2 className="text-2xl font-heading mb-4">Send a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-border rounded-xl px-4 py-3 bg-surface text-base placeholder:text-muted"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-border rounded-xl px-4 py-3 bg-surface text-base placeholder:text-muted"
            />
            <textarea
              placeholder="Your Message"
              className="w-full border border-border rounded-xl px-4 py-3 bg-surface text-base placeholder:text-muted h-32"
            />
            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary-hover transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Prefer a personal conversation?"
        subtitle="Our concierge team is just a call away."
        cta={{ label: "Call Us Now", href: "tel:+18001234567" }}
      />
    </div>
  );
}
