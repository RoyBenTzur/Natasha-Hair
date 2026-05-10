import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { Header } from "@/components/Header";

import { Wordmark } from "@/components/Wordmark";
import { Reveal } from "@/components/Reveal";
import heroBg from "@/assets/hero-bg.jpg";
import pillarExt from "@/assets/pillar-extensions.jpg";
import pillarCare from "@/assets/pillar-care.jpg";
import hAsh from "@/assets/hair-ash-blonde.jpg";
import hPlat from "@/assets/hair-platinum.jpg";
import hHoney from "@/assets/hair-honey-ombre.jpg";
import hIce from "@/assets/hair-ice-blonde.jpg";
import hGolden from "@/assets/hair-golden-ombre.jpg";
import hChoc from "@/assets/hair-chocolate.jpg";
import proBg from "@/assets/pro-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NATASHA — Only Natural Hair" },
      {
        name: "description",
        content:
          "NATASHA — luxury 100% natural hair extensions, hand-crafted and imported directly from Eastern Europe. Trusted by hundreds of Israeli salons.",
      },
      { property: "og:title", content: "NATASHA — Only Natural Hair" },
      {
        property: "og:description",
        content:
          "Luxury 100% natural hair extensions, sourced directly from Eastern Europe. Hand-crafted, salon-grade, finished to perfection.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: () => (
    <I18nProvider>
      <Page />
    </I18nProvider>
  ),
});

function Page() {
  return (
    <div id="top" className="bg-ink text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <TrustStrip />
      <Pillars />
      <Founder />
      <Collection />
      <Pro />
      <Contact />
      <Footer />
      
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const { t } = useI18n();
  const particles = Array.from({ length: 18 });
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 animate-drift">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink" />
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((_, i) => (
          <span
            key={i}
            className="particle absolute block h-1 w-1 rounded-full bg-gold/70"
            style={{
              left: `${(i * 53) % 100}%`,
              animationDuration: `${10 + (i % 8) * 2}s`,
              animationDelay: `${(i % 6) * 1.4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-6 text-center max-w-5xl">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold/90 mb-8">EST. 2015 · Israel</p>
        </Reveal>
        <Reveal delay={150}>
          <h1 className="font-display leading-[0.95] text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
            <span className="block text-cream">{t("hero.line1")}</span>
            <span className="block italic gold-shimmer">{t("hero.line2")}</span>
          </h1>
        </Reveal>
        <Reveal delay={350}>
          <p className="mx-auto mt-10 max-w-2xl text-base md:text-lg text-cream/75 leading-relaxed">
            {t("hero.tag")}
          </p>
        </Reveal>
        <Reveal delay={500}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="#collection"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-ink text-xs uppercase tracking-[0.25em] font-medium hover:bg-gold-soft transition-colors"
            >
              {t("hero.cta1")}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-gold/60 text-gold text-xs uppercase tracking-[0.25em] hover:bg-gold/10 transition-colors"
            >
              {t("hero.cta2")}
            </a>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-10 inset-x-0 flex flex-col items-center gap-2 text-cream/60">
        <span className="text-[10px] uppercase tracking-[0.3em]">{t("hero.scroll")}</span>
        <span className="block h-10 w-px bg-gold/60 animate-scroll-cue" />
      </div>
    </section>
  );
}

/* ---------- Trust ---------- */
function TrustStrip() {
  const { t } = useI18n();
  const items = [t("trust.1"), t("trust.2"), t("trust.3")];
  return (
    <section className="border-y border-border/60 bg-ink/80">
      <div className="mx-auto max-w-7xl px-6 py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[11px] sm:text-xs uppercase tracking-[0.28em] text-cream/75">
        {items.map((s, i) => (
          <div key={i} className="flex items-center gap-10">
            <span>{s}</span>
            {i < items.length - 1 && <span className="text-gold">•</span>}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Pillars ---------- */
function Pillars() {
  const { t } = useI18n();
  const cards = [
    { img: pillarExt, tag: t("pillars.tag1"), title: t("pillars.title1"), desc: t("pillars.desc1") },
    { img: pillarCare, tag: t("pillars.tag2"), title: t("pillars.title2"), desc: t("pillars.desc2") },
  ];
  return (
    <section className="relative py-28 md:py-40 grain">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center mb-16 md:mb-24">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-5">{t("pillars.eyebrow")}</p>
          <h2 className="font-display text-4xl md:text-6xl text-cream">
            <span className="italic">{t("pillars.title")}</span>
          </h2>
          <span className="gold-divider mt-8" />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {cards.map((c, i) => (
            <Reveal key={i} delay={i * 150}>
              <article className="group relative hover-zoom aspect-[4/5] overflow-hidden bg-card">
                <img src={c.img} alt={c.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">{c.tag}</p>
                  <h3 className="font-display text-3xl md:text-4xl text-cream italic mb-4">{c.title}</h3>
                  <p className="text-sm text-cream/75 max-w-md leading-relaxed">{c.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Founder ---------- */
function Founder() {
  const { t } = useI18n();
  return (
    <section id="story" className="bg-linen text-ink py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <Reveal>
          <div className="relative aspect-[4/5] bg-[oklch(0.88_0.02_70)] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-center p-10">
              <div>
                <div className="mx-auto mb-6 h-px w-12 bg-[oklch(0.5_0.06_60)]" />
                <p className="font-display italic text-xl text-[oklch(0.35_0.04_50)]">{t("founder.photo")}</p>
              </div>
            </div>
            <div className="absolute inset-3 border border-[oklch(0.78_0.04_70)]" />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="text-[11px] uppercase tracking-[0.4em] text-[oklch(0.55_0.08_60)] mb-5">
            {t("founder.eyebrow")}
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
            <span className="block">{t("founder.title1")}</span>
            <span className="block italic text-[oklch(0.55_0.08_60)]">{t("founder.title2")}</span>
          </h2>
          <span className="gold-divider mt-8 mb-8 !bg-[oklch(0.55_0.08_60)]" />
          <p className="text-base md:text-lg leading-relaxed text-[oklch(0.3_0.02_50)]">{t("founder.body")}</p>
          <blockquote className="mt-10 border-s-2 border-[oklch(0.55_0.08_60)] ps-6 font-display italic text-2xl md:text-3xl text-[oklch(0.25_0.02_45)]">
            “{t("founder.quote")}”
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Collection ---------- */
function Collection() {
  const { t } = useI18n();
  const items = [
    { img: hAsh, he: "אפר בלונד", en: "Ash Blonde", cm: 60 },
    { img: hPlat, he: "פלטינום", en: "Platinum", cm: 70 },
    { img: hHoney, he: "אומבר דבש", en: "Honey Ombre", cm: 55 },
    { img: hIce, he: "בלונד קרח", en: "Ice Blonde", cm: 70 },
    { img: hGolden, he: "אומבר זהב", en: "Golden Ombre", cm: 65 },
    { img: hChoc, he: "שוקולד", en: "Chocolate", cm: 60 },
  ];
  const { lang } = useI18n();
  return (
    <section id="collection" className="py-28 md:py-40 bg-ink">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center mb-16 md:mb-20">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-5">{t("collection.eyebrow")}</p>
          <h2 className="font-display text-4xl md:text-6xl text-cream italic">{t("collection.title")}</h2>
          <span className="gold-divider mt-8" />
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
          {items.map((it, i) => (
            <Reveal key={i} delay={(i % 3) * 100}>
              <article className="group">
                <div className="hover-zoom relative aspect-[4/5] overflow-hidden bg-card">
                  <img src={it.img} alt={it[lang]} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors" />
                </div>
                <div className="mt-5 flex items-baseline justify-between">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl text-cream">{it[lang]}</h3>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-cream/55 mt-1">
                      {lang === "en" ? it.he : it.en}
                    </p>
                  </div>
                  <span className="text-gold text-sm tracking-widest">{it.cm} cm</span>
                </div>
                <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-cream/50">{t("collection.price")}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Pro ---------- */
function Pro() {
  const { t } = useI18n();
  return (
    <section id="pro" className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 animate-drift">
        <img src={proBg} alt="" className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-ink/75" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-6">{t("pro.eyebrow")}</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[1] text-cream">
            <span className="block">{t("pro.line1")}</span>
            <span className="block italic text-gold">{t("pro.line2")}</span>
          </h2>
          <p className="mt-10 text-base md:text-lg text-cream/80 leading-relaxed">{t("pro.body")}</p>
          <a
            href="#contact"
            className="mt-12 inline-flex items-center justify-center px-10 py-4 bg-gold text-ink text-xs uppercase tracking-[0.28em] hover:bg-gold-soft transition-colors"
          >
            {t("pro.cta")}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const { t } = useI18n();
  return (
    <section id="contact" className="py-32 md:py-48 bg-ink">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-10">{t("contact.eyebrow")}</p>
          <h2 className="text-6xl sm:text-7xl md:text-9xl">
            <Wordmark className="text-cream" />
          </h2>
          <span className="gold-divider mt-10" />
          <div className="mt-12 flex items-center justify-center">
            <a
              href="https://wa.me/972546824269"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 border border-gold/60 text-gold text-xs uppercase tracking-[0.28em] hover:bg-gold/10 transition-colors min-w-[220px]"
            >
              {t("contact.cta")}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border/60 bg-ink py-16">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-10">
        <div>
          <div className="text-2xl">
            <Wordmark />
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-gold/80">{t("footer.tag")}</p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-cream/50 mb-4">{t("footer.nav")}</p>
          <ul className="space-y-2 text-sm text-cream/80">
            <li><a href="#collection" className="hover:text-gold">{t("nav.collection")}</a></li>
            <li><a href="#story" className="hover:text-gold">{t("nav.story")}</a></li>
            <li><a href="#pro" className="hover:text-gold">{t("nav.pro")}</a></li>
            <li><a href="#contact" className="hover:text-gold">{t("nav.contact")}</a></li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-cream/50 mb-4">{t("footer.contact")}</p>
          <p className="text-sm text-cream/80">{t("footer.address")}</p>
          <p className="text-sm text-cream/80 mt-1"><bdi dir="ltr">+972 54 682 4269</bdi></p>
          <div className="mt-4 flex gap-4 text-cream/70">
            <a href="#" aria-label="Instagram" className="hover:text-gold">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-gold">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.5-2 2-2h2V2h-3c-3 0-5 1.8-5 5v3H6v4h3v8h4z"/></svg>
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-gold">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 7.2c-.2-1.4-1.3-2.5-2.7-2.7C16.5 4 12 4 12 4s-4.5 0-6.9.5C3.7 4.7 2.6 5.8 2.4 7.2 2 9.6 2 12 2 12s0 2.4.4 4.8c.2 1.4 1.3 2.5 2.7 2.7C7.5 20 12 20 12 20s4.5 0 6.9-.5c1.4-.2 2.5-1.3 2.7-2.7.4-2.4.4-4.8.4-4.8s0-2.4-.4-4.8zM10 15V9l5 3-5 3z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 mt-12 pt-6 border-t border-border/40 text-[11px] uppercase tracking-[0.3em] text-cream/40 flex flex-col sm:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} NATASHA</span>
        <span>{t("footer.rights")}</span>
      </div>
    </footer>
  );
}
