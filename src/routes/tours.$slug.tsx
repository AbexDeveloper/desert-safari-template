import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, Clock, MapPin, MessageCircle, Users } from "lucide-react";

import desertCamp from "@/assets/desert-camp.jpg";
import dunesCamel from "@/assets/dunes-camel.jpg";
import dunesGolden from "@/assets/dunes-golden.jpg";
import dunesMorning from "@/assets/dunes-morning.jpg";
import { Button } from "@/components/ui/button";
import { getTour, tours, whatsappUrl } from "@/lib/tours";

const images = { morning: dunesMorning, camel: dunesCamel, golden: dunesGolden, camp: desertCamp };

export const Route = createFileRoute("/tours/$slug")({
  loader: ({ params }) => {
    const tour = getTour(params.slug);
    if (!tour) throw notFound();
    return tour;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.name} | DuneAtlas` : "Tour unavailable | DuneAtlas";
    const description = loaderData?.description ?? "This DuneAtlas tour could not be found.";
    return { meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ] };
  },
  component: TourPage,
  notFoundComponent: TourNotFound,
});

function TourPage() {
  const tour = Route.useLoaderData();
  const related = tours.filter((item) => item.slug !== tour.slug).slice(0, 3);
  return (
    <main>
      <section className="mx-auto max-w-6xl px-5 py-10 md:py-14">
        <Link to="/" hash="packages" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft size={16} /> All experiences</Link>
        <div className="mt-7 grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:items-stretch">
          <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-border">
            <img src={images[tour.image]} alt={`${tour.name} in Dubai`} width={1440} height={912} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute bottom-5 left-5 rounded-full border border-border bg-background/80 px-4 py-2 font-mono text-[10px] uppercase backdrop-blur-md">{tour.category}</div>
          </div>
          <aside className="rounded-2xl border border-border bg-card/60 p-7 backdrop-blur-sm md:p-9">
            <p className="font-mono text-[11px] uppercase text-primary">Package detail</p>
            <h1 className="mt-3 font-display text-5xl font-semibold leading-none">{tour.name}</h1>
            <p className="mt-5 text-muted-foreground">{tour.description}</p>
            <div className="mt-6 flex items-baseline gap-2"><span className="font-display text-5xl font-semibold">AED {tour.price}</span><span className="text-sm text-muted-foreground">/ person</span></div>
            <div className="mt-7 grid gap-3 text-sm">
              <div className="flex items-center gap-3 border-b border-border pb-3"><Clock size={17} className="text-primary" /><span className="text-muted-foreground">Duration</span><strong className="ml-auto">{tour.duration}</strong></div>
              <div className="flex items-center gap-3 border-b border-border pb-3"><MapPin size={17} className="text-primary" /><span className="text-muted-foreground">Pickup</span><strong className="ml-auto text-right">{tour.pickup}</strong></div>
              <div className="flex items-center gap-3"><Users size={17} className="text-primary" /><span className="text-muted-foreground">Travel style</span><strong className="ml-auto">{tour.group}</strong></div>
            </div>
            <Button asChild variant="expedition" size="lg" className="mt-8 w-full"><a href={whatsappUrl(tour)} target="_blank" rel="noreferrer"><MessageCircle /> Enquire about this package</a></Button>
          </aside>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 lg:grid-cols-2">
        <div><p className="font-mono text-[11px] uppercase text-primary">Included</p><h2 className="mt-2 font-display text-4xl font-semibold">Everything in your day</h2><ul className="mt-7 grid gap-3">{tour.includes.map((item) => <li key={item} className="flex items-center gap-3 rounded-xl border border-border bg-card/50 p-4"><Check size={17} className="text-primary" />{item}</li>)}</ul></div>
        <div className="rounded-2xl border border-border bg-card/50 p-7"><p className="font-mono text-[11px] uppercase text-primary">Your itinerary</p><ol className="mt-6 space-y-6">{tour.itinerary.map((item) => <li key={`${item.time}-${item.title}`} className="grid grid-cols-[58px_1fr] gap-4"><span className="pt-1 font-mono text-xs text-primary">{item.time}</span><div><h3 className="font-medium">{item.title}</h3><p className="mt-1 text-sm text-muted-foreground">{item.detail}</p></div></li>)}</ol></div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14"><p className="font-mono text-[11px] uppercase text-primary">Keep exploring</p><h2 className="mt-2 font-display text-4xl font-semibold">Other ways to see the UAE</h2><div className="mt-7 grid gap-4 md:grid-cols-3">{related.map((item) => <Link key={item.slug} to="/tours/$slug" params={{ slug: item.slug }} className="rounded-2xl border border-border bg-card/50 p-5 hover:border-primary/50"><div className="flex justify-between font-mono text-xs text-muted-foreground"><span>{item.shortName}</span><strong className="text-foreground">AED {item.price}</strong></div><h3 className="mt-4 font-display text-2xl font-semibold">{item.name}</h3><p className="mt-1 text-sm text-muted-foreground">{item.summary}</p></Link>)}</div></section>
    </main>
  );
}

function TourNotFound() {
  return <main className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-start justify-center px-5"><p className="font-mono text-xs uppercase text-primary">Tour unavailable</p><h1 className="mt-3 font-display text-5xl font-semibold">That expedition is off the map.</h1><Button asChild variant="expedition" className="mt-7"><Link to="/" hash="packages">Browse all tours</Link></Button></main>;
}