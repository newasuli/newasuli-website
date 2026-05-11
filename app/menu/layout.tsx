import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu | Harisiddhi Newa Suli | Best Authentic Newari Food',
  description: 'Explore the menu of Harisiddhi Newa Suli. We offer the best authentic Newari food, including signature sets, individual traditional dishes, snacks, and sweet delights.',
  keywords: ['restaurant menu', 'best Newari food menu', 'Harisiddhi Newa Suli food', 'authentic dishes', 'delicious meals', 'Nepalese food menu', 'best restaurant menu'],
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
