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
        <BodyMap />
        
        {/* Khối 2 phần cuối: FinalCta + Footer chiếm trọn vẹn đúng vùng màn hình dưới header ở 100%, có giới hạn max-h khi scale nhỏ */}
        <div className="relative w-full h-[calc(100dvh-68px)] sm:h-[calc(100dvh-76px)] min-h-[480px] sm:min-h-[540px] max-h-[780px] sm:max-h-[840px] lg:max-h-[880px] xl:max-h-[920px] flex flex-col justify-between bg-[#0A160D] overflow-hidden">
          <FinalCta onBooking={() => openBooking("Garden Room")} />
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

