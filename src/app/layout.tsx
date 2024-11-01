import { Inter, Poppins } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import { SessionProvider } from "@/providers/SessionProvider";
import { Providers } from "@/providers/Providers";

// Font configurations
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

// Metadata configuration
export const metadata: Metadata = {
  title: {
    default: "Motey - Discord Emote System",
    template: "%s | Motey",
  },
  description: "Enhance your Discord experience with custom emotes and seamless integration.",
  keywords: [
    "Discord",
    "Emotes",
    "Custom Emotes",
    "Discord Bot",
    "Server Management",
    "Discord Integration",
  ],
  authors: [
    {
      name: "Your Name",
      url: "https://yourwebsite.com",
    },
  ],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://motey.app",
    siteName: "Motey",
    title: "Motey - Discord Emote System",
    description: "Enhance your Discord experience with custom emotes",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Motey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Motey - Discord Emote System",
    description: "Enhance your Discord experience with custom emotes",
    images: ["/og-image.png"],
    creator: "@yourtwitterhandle",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning 
      className={`${inter.variable} ${poppins.variable}`}
    >
      <body className="min-h-screen bg-background font-sans antialiased">
          <Providers>
            {children}
          </Providers>
      </body>
    </html>
  );
} 