import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Harisiddhi Newa Suli | Food Photos',
  description: 'View photos of our delicious authentic Newari food, elegant dining environment, and best restaurant experience at Harisiddhi Newa Suli.',
  keywords: ['restaurant gallery', 'Newari food photos', 'best food pictures', 'Harisiddhi Newa Suli interior', 'dining atmosphere', 'best restaurant', 'food images', 'top food'],
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Gallery | Harisiddhi Newa Suli",
    description:
      "View photos of our delicious authentic Newari food, elegant dining environment, and best restaurant experience at Harisiddhi Newa Suli.",
    url: "/gallery",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Harisiddhi Newa Suli",
    description:
      "View photos of our delicious authentic Newari food, elegant dining environment, and best restaurant experience at Harisiddhi Newa Suli.",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
