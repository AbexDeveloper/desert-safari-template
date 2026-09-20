import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/tours";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="font-display text-2xl font-semibold">
          Dune<span className="text-primary">Atlas</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex" aria-label="Main navigation">
          <Link to="/" hash="packages" className="transition-colors hover:text-foreground">Safaris</Link>
          <Link to="/" hash="how-it-works" className="transition-colors hover:text-foreground">How it works</Link>
          <Link to="/" hash="trust" className="transition-colors hover:text-foreground">Why us</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="expedition" size="sm" className="hidden sm:inline-flex">
            <a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /> Enquire</a>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-border bg-background px-5 py-4 md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-6xl gap-3 text-sm">
            <Link to="/" hash="packages" onClick={() => setOpen(false)}>Safaris</Link>
            <Link to="/" hash="how-it-works" onClick={() => setOpen(false)}>How it works</Link>
            <Link to="/" hash="trust" onClick={() => setOpen(false)}>Why us</Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <Link to="/" className="font-display text-xl font-semibold text-foreground">DuneAtlas</Link>
        <span>Golden-hour expeditions across Dubai and the UAE.</span>
        <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="text-foreground underline-offset-4 hover:underline">WhatsApp +971 55 935 9071</a>
      </div>
    </footer>
  );
}

export function FloatingWhatsapp() {
  return (
    <Button asChild variant="expedition" className="fixed bottom-5 right-5 z-50 shadow-lg">
      <a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp</a>
    </Button>
  );
}