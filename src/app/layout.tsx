import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import MainFooter from "@/components/Footer";
import HeaderPage from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { FilterProvider } from "@/contexts/FilterContext";

export const metadata: Metadata = {
  title:
    "ThinkPro - Laptop, Phím cơ, Bàn nâng hạ, Ghế công thái học, PS5, Nintendo - Dịch vụ Tận tâm",
  description:
    "Chuỗi cửa hàng chuyên Máy tính xách tay (Laptop), Bàn phím cơ, Bàn ghế Công thái học, Máy chơi game, PS5, Nintendo - Dịch vụ Tận tâm, đội ngũ tư vấn được đào tạo kỹ lưỡng, có chuyên môn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>
          <FilterProvider>
            <TopBar />
            <HeaderPage />
            {children}
            <MainFooter />
          </FilterProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
