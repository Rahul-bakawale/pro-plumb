import type { Metadata } from "next";
import { Poppins } from 'next/font/google';



const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});



export const metadata: Metadata = {
  title: "Beaconsfield Plumbing | Trusted Plumbing Services",
  description: "Expert plumbing services in Beaconsfield. Emergency repairs, installations, and maintenance available 24/7.",
  keywords: "plumbing, emergency plumber, Beaconsfield, pipe repair, bathroom installation",
  openGraph: {
    title: "Beaconsfield Plumbing",
    description: "Reliable plumbing services in Beaconsfield",
    url: "https://www.beaconsfieldplumbing.com",
    siteName: "Beaconsfield Plumbing",
    images: [
      {
        url: "/logo.png",
        width: 200,
        height: 200,
        alt: "Beaconsfield Plumbing Logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
 
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>

      <body
      > 
        {children}
      </body>
    </html>
  );
}
