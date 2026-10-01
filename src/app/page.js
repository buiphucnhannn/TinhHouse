"use client";

import { useState, useEffect } from "react";
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
import { scrollToId } from "../utils/smoothScroll";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("Garden Room");

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
      if (hashId) {
        setTimeout(() => scrollToId(hashId), 150);
      }
    }
  }, []);

  const openBooking = (roomName) => {
    if (typeof roomName === "string") {
      setSelectedRoom(roomName);
    }
    setBookingOpen(true);
  };

  return (
    <>
      <Navbar onBooking={() => openBooking("Garden Room")} />
      <main className="bg-[#FAF7F0] overflow-hidden">
        <Hero onBooking={() => openBooking("Garden Room")} />
        <Intro />
        <Space onBooking={openBooking} />
        <Services />
        <Ritual />
        <Testimonial />
        <FinalCta onBooking={() => openBooking("Garden Room")} />

        {/* Khối BodyMap + Footer kết hợp vừa trọn vẹn 1 màn hình dưới Header khi lướt xuống cuối */}
        <div className="relative w-full flex flex-col justify-between bg-[#0A160D] lg:h-[calc(100dvh-72px)] lg:min-h-[500px] lg:max-h-[880px] overflow-hidden">
          <BodyMap />
          <Footer />
        </div>
      </main>
      <BookingModal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultRoom={selectedRoom}
      />
    </>
  );
}

