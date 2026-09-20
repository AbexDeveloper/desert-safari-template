import { MessageCircle } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs } from "@/lib/faqs";
import { whatsappUrl } from "@/lib/tours";

export function FaqSection() {
  return (
    <section id="faq" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-mono text-[11px] uppercase text-primary">Good to know</p>
          <h2 className="mt-2 font-display text-4xl font-semibold">Frequently asked questions</h2>
          <p className="mt-4 max-w-[38ch] text-sm leading-relaxed text-muted-foreground">
            Everything guests usually ask before a desert safari, cruise or city tour. Still unsure? Message us and a real
            person will answer.
          </p>
          <Button asChild variant="expedition" className="mt-6">
            <a href={whatsappUrl()} target="_blank" rel="noreferrer">
              <MessageCircle /> Ask on WhatsApp
            </a>
          </Button>
        </div>
        <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card/55 px-5 backdrop-blur-sm">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="text-left font-display text-lg font-semibold">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
