import { Nav } from "@/features/nav/Nav";
import { Hero } from "@/features/hero/Hero";
import { About } from "@/features/about/About";
import { WorkGrid } from "@/features/work/WorkGrid";
import { Timeline } from "@/features/experience/Timeline";
import { Contact } from "@/features/contact/Contact";
import { profile } from "@/lib/profile";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <WorkGrid />
        <Timeline />
        <Contact />
      </main>
      <footer className="px-6 md:px-12 max-w-6xl mx-auto w-full py-8 mt-12 border-t border-(--rule)">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-mono text-[11px] tracking-widest uppercase text-(--muted)">
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span className="font-mono text-[11px] tracking-widest uppercase text-(--muted)">
            {profile.location}
          </span>
        </div>
      </footer>
    </>
  );
}
