"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Space from "../components/Space";
import Services from "../components/Services";
import Ritual from "../components/Ritual";
import Testimonial from "../components/Testimonial";
import BodyMap from "../components/BodyMap";
import FinalCta from "../components/FinalCta";
import Footer from "../components/Footer";
import BookingModal from "../components/BookingModal";
import Wave from "../components/Wave";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = () => setBookingOpen(true);

  return (
    <>
      <Navbar onBooking={openBooking} />
      <main>
        <Hero onBooking={openBooking} />
        <Intro />
        <Space onBooking={openBooking} />
        <Services />
        <Ritual />
        <BodyMap />
        <Testimonial />
        {/* Sóng trang trí trước CTA cuối */}
        <div className="bg-[#faf7ef]">
          <Wave fill="#022c22" />
        </div>
        <FinalCta onBooking={openBooking} />
      </main>
      <Footer />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
