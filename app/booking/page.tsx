import TinyCalWidget from "@/components/TinyCalWidget";
import CTASection from "@/components/CTASection";

export default function BookingPage() {
  return (
    <div>
      <section className="bg-surface px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-heading mb-6">Reserve Your Escape</h1>
          <p className="text-muted text-lg mb-10">
            Choose your preferred date and suite. Our concierge will confirm details and ensure every detail is taken care of.
          </p>
          {/* TinyCal embed - replace link with your TinyCal URL */}
          <TinyCalWidget url="https://tinycal.com/sereinstay/booking" />
        </div>
      </section>

      <CTASection
        title="Prefer to speak with a human?"
        subtitle="Call us at +1 (800) 123–4567 or email hello@sereinstay.com — our concierge is always here to assist."
        cta={{ label: "Send Us a Message", href: "/contact" }}
      />
    </div>
  );
}
