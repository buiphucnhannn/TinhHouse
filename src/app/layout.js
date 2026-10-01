import "./globals.css";

export const metadata = {
  title: "TinhHouse Vũng Tàu — Homestay tĩnh lặng sát biển",
  description:
    "TinhHouse: homestay gỗ, vườn lá, trà chiều, cách biển 5 phút đi bộ. Đặt phòng trực tiếp giá tốt nhất.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className="h-full scroll-smooth">
      <body className="min-h-full bg-[#faf7ef] font-sans text-emerald-950 antialiased">
        {children}
      </body>
    </html>
  );
}
