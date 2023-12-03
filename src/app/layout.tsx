import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const outfit = Outfit({
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "500"],
    variable: "--font-outfit",
});

export const metadata: Metadata = {
    title: "Movie center",
    description: "Movie list - check all your movies here",
    authors: [
        { name: "Chamu" },
        { name: "Mutezva", url: "https://movie-center-web.vercel.app/" },
    ],
    creator: "Chamu Mutezva",
    icons: [
        {
            rel: "apple-touch-icon",
            type: "image/png",
            sizes: "180x180",
            url: "/apple-touch-icon.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            url: "/favicon-32x32.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            url: "/favicon-16x16.png",
        },
        {
            rel: "mask-icon",
            url: "/safari-pinned-tab.svg",
        },
        {
            rel: "icon",
            type: "image/x-icon",
            url: "/favicon.ico",
        },
    ],
};
// <link rel="icon" type="image/x-icon" href="./favicon.ico">
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={outfit.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
