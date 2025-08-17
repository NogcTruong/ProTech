import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import MainFooter from "@/components/Footer";
import HeaderPage from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { FilterProvider } from "@/contexts/FilterContext";
import { ReduxProvider } from "@/store/provider";
import CartPersistence from "@/components/CartPersistence";

export const metadata: Metadata = {
  title: {
    default:
      "Techpro - Laptop, Phím cơ, Bàn nâng hạ, Ghế công thái học, PS5, Nintendo - Dịch vụ Tận tâm",
    template: "%s | techpro",
  },
  description:
    "Chuỗi cửa hàng chuyên Máy tính xách tay (Laptop), Bàn phím cơ, Bàn ghế Công thái học, Máy chơi game, PS5, Nintendo - Dịch vụ Tận tâm, đội ngũ tư vấn được đào tạo kỹ lưỡng, có chuyên môn.",
  authors: [{ name: "techpro" }],
  creator: "techpro",
  publisher: "techpro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://techpro.vn"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
          <ReduxProvider>
            <FilterProvider>
              <CartPersistence />
              <TopBar />
              <HeaderPage />
              {children}
              <MainFooter />
            </FilterProvider>
          </ReduxProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
