// app/page.tsx
"use client";

import Hero from "../components/Hero";
import About from "../components/About";
import Attractions from "../components/Attractions";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Welcome from "../components/Welcome";
import Facilities from "../components/Facilities";
import RoomsPreview from "@/components/RoomsPreview";
import ContactUs from "@/components/ContactUs";
import HotelStats from "@/components/Stats";


export default function Home() {
  return (
    <main className="snap-y snap-mandatory">
      <section className="snap-start">
        <Hero />
      </section>

      <section className="snap-start">
        <Welcome />
      </section>

      <section className="snap-start">
        <HotelStats />
      </section>

      <section className="snap-start">
        <Attractions />
      </section>

      <section className="snap-start">
        <RoomsPreview />
      </section>

      <section className="snap-start">
        <Facilities />
      </section>

      <section className="snap-start">
        <Reviews />
      </section>

      {/* <section className="snap-start">
        <ContactUs />
      </section> */}

    </main>
  );
}
