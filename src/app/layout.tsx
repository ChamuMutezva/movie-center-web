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
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />

                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className={outfit.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
