import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { PostHogProvider } from "./providers";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
    weight: ["200", "500"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Cole Johnson",
    description: "Cole Johnson, Photographer & Designer & Software Engineer",
    icons: "/favicon.ico",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="h-full">
            <body
                className={`${jetbrainsMono.className} m-0 h-full font-light text-sm `}
            >
                <PostHogProvider>{children}</PostHogProvider>
            </body>
        </html>
    );
}
