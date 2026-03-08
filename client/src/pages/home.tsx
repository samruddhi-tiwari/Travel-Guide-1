import React from "react";
import { BrutalButton } from "@/components/ui/brutal-button";
import { BrutalCard } from "@/components/ui/brutal-card";
import { BucketList } from "@/components/bucket-list";
import { CebuBingo } from "@/components/bingo";
import { BookingForm } from "@/components/booking-form";
import { MapPin, Camera, Fish, Sun, Waves, Palmtree } from "lucide-react";

export default function Home() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Top Banner */}
      <div className="bg-foreground text-background py-2 text-center text-sm font-bold tracking-wide uppercase px-4 border-b-4 border-foreground">
        🚧 Demo website concept for Cebu Travel Oslob Tours 🚧
      </div>

      {/* Hero Section */}
      <section className="relative px-4 py-20 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 md:left-20 animate-[bounce_5s_infinite]">
          <Sun className="w-16 h-16 md:w-24 md:h-24 text-secondary fill-secondary" />
        </div>
        <div className="absolute bottom-20 right-10 md:right-20 animate-[bounce_6s_infinite_reverse]">
          <Palmtree className="w-20 h-20 md:w-32 md:h-32 text-primary" />
        </div>

        <div className="inline-block bg-accent px-6 py-2 rounded-full border-4 border-foreground brutal-shadow-sm font-display font-bold text-xl mb-6 -rotate-2">
          Mabuhay! Welcome to Paradise 🌴
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground max-w-4xl leading-tight mb-8 drop-shadow-[3px_3px_0px_#f28c38]">
          Explore Cebu with <span className="text-primary underline decoration-8 decoration-secondary underline-offset-8">Local Experts</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-medium text-muted-foreground max-w-2xl mb-12">
          From swimming with gentle giants to diving into crystal clear falls. Experience the true heart of the Philippines.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <BrutalButton size="lg" onClick={() => scrollTo('booking')} className="text-xl px-12">
            Book a Tour
          </BrutalButton>
          <BrutalButton variant="secondary" size="lg" onClick={() => scrollTo('bucket-list')} className="text-xl px-12">
            View Bucket List
          </BrutalButton>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-primary/10 border-y-4 border-foreground relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold inline-block relative">
              <span className="relative z-10">Tour Highlights</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-accent -z-0 -rotate-1"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Highlight 1 */}
            <BrutalCard className="flex flex-col h-full bg-white group hover:-translate-y-2">
              <div className="h-48 border-b-4 border-foreground bg-primary/20 relative overflow-hidden">
                {/* oslob whale shark swimming underwater ocean blue */}
                <img 
                  src="https://pixabay.com/get/g72589cf49a31268479c158266950370c24df95e16baed3354411581e77559369aced04fa0391e148b8a12fd1fca4962e834b9290da7e05ae96a9875289babeeb_1280.jpg" 
                  alt="Whale Shark"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent p-2 rounded-xl border-2 border-foreground">
                  <Fish className="w-6 h-6 text-foreground" />
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-display font-bold mb-3">Whale Shark Encounter</h3>
                <p className="text-muted-foreground mb-4 flex-1">Swim alongside the gentle giants of the sea in Oslob. A truly unforgettable once-in-a-lifetime experience.</p>
                <div className="flex items-center text-sm font-bold gap-2 bg-accent/30 w-fit px-3 py-1 rounded-lg border-2 border-foreground">
                  <MapPin className="w-4 h-4" /> Oslob, Cebu
                </div>
              </div>
            </BrutalCard>

            {/* Highlight 2 */}
            <BrutalCard className="flex flex-col h-full bg-white group hover:-translate-y-2">
              <div className="h-48 border-b-4 border-foreground bg-secondary/20 relative overflow-hidden">
                {/* kawasan falls blue water tropical jungle */}
                <img 
                  src="https://pixabay.com/get/g3511107419c546696bd86566d58b30cc1ae4c910f6bbe1ef7ad3abd5753ae367898bad1b5528bf81441b860820eea0dc37e6a7f0388952cf96c9eb6459876c71_1280.jpg" 
                  alt="Canyoneering"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary p-2 rounded-xl border-2 border-foreground">
                  <Waves className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-display font-bold mb-3">Kawasan Canyoneering</h3>
                <p className="text-muted-foreground mb-4 flex-1">Jump, slide, and swim your way through the stunning turquoise waters and canyons of Badian.</p>
                <div className="flex items-center text-sm font-bold gap-2 bg-accent/30 w-fit px-3 py-1 rounded-lg border-2 border-foreground">
                  <MapPin className="w-4 h-4" /> Badian, Cebu
                </div>
              </div>
            </BrutalCard>

            {/* Highlight 3 */}
            <BrutalCard className="flex flex-col h-full bg-white group hover:-translate-y-2">
              <div className="h-48 border-b-4 border-foreground bg-accent/20 relative overflow-hidden">
                {/* tropical island white sand beach clear water palm trees */}
                <img 
                  src="https://pixabay.com/get/ga68491373f415e3ef8e46cdc6976190977bdb0afe989c82a88e435b7dc799072d03d7d5ebb02e0cc0e66dcd636479456f985632753f7c8f5135495fc4690ded1_1280.jpg" 
                  alt="Island Hopping"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-secondary p-2 rounded-xl border-2 border-foreground">
                  <Camera className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-display font-bold mb-3">Island Hopping</h3>
                <p className="text-muted-foreground mb-4 flex-1">Sail across pristine waters to visit gorgeous sandbars, vibrant coral reefs, and secluded beaches.</p>
                <div className="flex items-center text-sm font-bold gap-2 bg-accent/30 w-fit px-3 py-1 rounded-lg border-2 border-foreground">
                  <MapPin className="w-4 h-4" /> Moalboal / Mactan
                </div>
              </div>
            </BrutalCard>
          </div>
        </div>
      </section>

      {/* Interactive Sections */}
      <section className="py-20 relative" id="bucket-list">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12 items-start">
          <div className="w-full lg:w-1/2 sticky top-8">
            <BucketList />
          </div>
          <div className="w-full lg:w-1/2">
            <CebuBingo />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12 text-accent">
            Memories Await
          </h2>
          
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {[
              "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&q=80", // philippines street
              "https://images.unsplash.com/photo-1620062035316-83492dc012ec?w=600&q=80", // tropical waterfall
              "https://images.unsplash.com/photo-1544474771-468b8e05cfc4?w=600&q=80", // whale shark
              "https://images.unsplash.com/photo-1582299863261-2a544c4f3460?w=600&q=80", // island beach
              "https://images.unsplash.com/photo-1601662916694-811c7ffbd6d4?w=600&q=80", // filipino food lechon style
              "https://images.unsplash.com/photo-1594957476569-4f7f6f592d3f?w=600&q=80", // sea turtle snorkeling
              "https://images.unsplash.com/photo-1625805866449-36873523f663?w=600&q=80", // magellan's cross style church
              "https://images.unsplash.com/photo-1616858348633-8a3036e52c8f?w=600&q=80", // tropical view sunset
            ].map((src, idx) => (
              <div key={idx} className="break-inside-avoid rounded-xl overflow-hidden border-4 border-background opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all cursor-pointer brutal-shadow">
                <img src={src} alt={`Cebu Memory ${idx+1}`} className="w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-24 bg-accent relative" id="booking">
        {/* Background pattern dots */}
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(var(--foreground) 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <BookingForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 border-t-4 border-foreground pt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-accent mb-4">Cebu Travel Oslob Tours</h2>
          <p className="text-background/70 mb-8 max-w-md mx-auto">
            Your local experts for the ultimate Cebu adventure. Dive, swim, eat, and explore with us.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-sm font-bold">
            <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Oslob, Cebu, Philippines
            </a>
            <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
              @cebutraveloslobtours
            </a>
            <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
              hello@cebuoslobtours.demo
            </a>
          </div>
          
          <div className="mt-12 pt-8 border-t border-background/20 text-background/50 text-sm">
            © {new Date().getFullYear()} Demo Concept for Cebu Travel Oslob Tours. Built with fun.
          </div>
        </div>
      </footer>
    </div>
  );
}
