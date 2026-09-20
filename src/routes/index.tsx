import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Clock3, MessageCircle } from "lucide-react";

import dunesMorning from "@/assets/dunes-morning.jpg";
import dunesCamel from "@/assets/dunes-camel.jpg";
import dunesGolden from "@/assets/dunes-golden.jpg";
import desertCamp from "@/assets/desert-camp.jpg";
import { Button } from "@/components/ui/button";
import { tours, whatsappUrl } from "@/lib/tours";

const tourImages = {
  morning: dunesMorning,
  camel: dunesCamel,
  golden: dunesGolden,
  camp: desertCamp,
};

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "DuneAtlas | Dubai Desert Safaris & UAE Tours" },
    { name: "description", content: "Explore 12 curated Dubai desert safaris, cruises and UAE tours. Select your trip and enquire instantly on WhatsApp." },
    { property: "og:title", content: "DuneAtlas | Dubai Desert Safaris & UAE Tours" },
    { property: "og:description", content: "Golden-hour desert journeys and UAE tours, selected online and booked by WhatsApp." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  return (
    <main>
      <section className="relative flex min-h-[680px] h-[82svh] items-center overflow-hidden bg-foreground">
        <img src={dunesGolden} alt="Golden Dubai dunes stretching toward the horizon" width={1024} height={1024} className="absolute inset-0 size-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/55 to-foreground/5" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-10">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex rounded-sm bg-primary px-4 py-2 font-mono text-[10px] uppercase text-primary-foreground">Dubai · United Arab Emirates</p>
            <h1 className="max-w-[13ch] text-balance font-display text-5xl font-semibold leading-[0.96] text-background sm:text-6xl md:text-8xl">
              Travel beyond the <em className="font-display font-medium italic text-secondary">ordinary.</em>
            </h1>
            <p className="mt-6 max-w-[48ch] text-pretty text-base leading-relaxed text-background/85 md:text-lg">
              Curated desert safaris, dhow cruises and UAE tours for the modern explorer—confirmed personally through WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="secondary" size="lg" className="rounded-full px-7"><Link to="/" hash="packages">Explore 12 tours <ArrowRight /></Link></Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-background/45 bg-foreground/20 px-7 text-background shadow-none backdrop-blur-sm hover:bg-background/15 hover:text-background"><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /> Plan on WhatsApp</a></Button>
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="relative z-20 mx-auto -mt-12 max-w-6xl scroll-mt-20 px-5 pb-16 pt-0 md:-mt-20">
        <div className="flex items-end justify-between gap-5">
          <div><p className="font-mono text-[11px] uppercase text-primary">The collection</p><h2 className="mt-2 font-display text-4xl font-semibold">Choose your expedition</h2></div>
          <p className="hidden font-mono text-xs text-muted-foreground md:block">12 routes · prices per person</p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <article key={tour.slug} className="group flex min-h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <img src={tourImages[tour.image]} alt={`${tour.name} experience`} loading="lazy" width={1024} height={1024} className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                <span className="absolute right-4 top-4 rounded-lg bg-card/95 px-3 py-2 font-mono text-xs font-semibold text-card-foreground shadow-sm backdrop-blur-sm">AED {tour.price}</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase text-primary"><Clock3 size={14} /><span>{tour.duration}</span><span>·</span><span>{tour.category}</span></div>
                <h3 className="mt-3 font-display text-2xl font-semibold leading-tight">{tour.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{tour.summary}</p>
                <div className="mt-6 grid grid-cols-2 gap-2">
                  <Button asChild variant="expedition" className="h-11 rounded-lg px-3"><a href={whatsappUrl(tour)} target="_blank" rel="noreferrer"><MessageCircle /> Instant booking</a></Button>
                  <Button asChild variant="outline" className="h-11 rounded-lg px-3"><Link to="/tours/$slug" params={{ slug: tour.slug }}>View details</Link></Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-6xl px-5 py-16 scroll-mt-20">
        <div className="grid overflow-hidden rounded-2xl border border-border bg-card/55 backdrop-blur-sm lg:grid-cols-[1.2fr_1fr]">
          <img src={desertCamp} alt="Lantern-lit private desert camp at sunset" loading="lazy" width={1440} height={912} className="h-full min-h-80 w-full object-cover" />
          <div className="p-7 md:p-10">
            <p className="font-mono text-[11px] uppercase text-primary">Simple by design</p>
            <h2 className="mt-3 font-display text-4xl font-semibold">From a tour page to the dunes.</h2>
            <ol className="mt-8 space-y-6">
              {["Choose the experience that fits your day", "Open WhatsApp with the package preselected", "Confirm your date, guests and pickup"].map((step, index) => (
                <li key={step} className="flex gap-4"><span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary font-mono text-xs text-primary-foreground">0{index + 1}</span><p className="pt-1 text-sm">{step}</p></li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="trust" className="mx-auto max-w-6xl px-5 py-16 scroll-mt-20">
        <div className="grid gap-4 sm:grid-cols-3">
          {[['12', 'distinct UAE experiences'], ['24/7', 'WhatsApp assistance'], ['100%', 'licensed tour partners']].map(([value, label]) => <div key={label} className="rounded-2xl border border-border bg-card/55 p-6"><p className="font-display text-4xl font-semibold">{value}</p><p className="mt-1 text-sm text-muted-foreground">{label}</p></div>)}
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {['Clear inclusions and prices before you enquire.', 'A real person confirms the details with you on WhatsApp.'].map((text) => <div key={text} className="flex items-center gap-3 rounded-2xl border border-border bg-card/55 p-5"><Check className="text-primary" /><p className="font-display text-xl italic">{text}</p></div>)}
        </div>
      </section>
    </main>
  );
}
