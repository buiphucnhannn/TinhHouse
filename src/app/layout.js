import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["vietnamese", "latin"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["vietnamese", "latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Tịnh House | Nghỉ ngơi và sống chậm giữa thiên nhiên",
  description:
    "Tịnh House mang đến một không gian lưu trú mộc mạc, gần gũi với thiên nhiên — nơi bạn có thể tạm rời nhịp sống vội vã, tận hưởng những phút giây thật bình yên.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="vi"
      className={`h-full scroll-smooth ${playfair.variable} ${plusJakarta.variable}`}
    >
      <body className="min-h-full bg-[#FAF7F0] text-[#22201D] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}


