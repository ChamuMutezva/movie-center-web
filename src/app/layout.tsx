import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

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
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={outfit.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
