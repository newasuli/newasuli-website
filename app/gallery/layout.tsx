import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Harisiddhi Newa Suli | Food Photos',
  description: 'View photos of our delicious authentic Newari food, elegant dining environment, and best restaurant experience at Harisiddhi Newa Suli.',
  keywords: ['restaurant gallery', 'Newari food photos', 'best food pictures', 'Harisiddhi Newa Suli interior', 'dining atmosphere', 'best restaurant', 'food images', 'top food'],
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
