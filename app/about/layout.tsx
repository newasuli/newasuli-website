import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Harisiddhi Newa Suli | Best Restaurant',
  description: 'Learn about the history and tradition of Harisiddhi Newa Suli, the best restaurant for authentic Newari food and dining experiences.',
  keywords: ['About Harisiddhi Newa Suli', 'history of Newari food', 'best traditional restaurant', 'authentic food experience', 'best food near me', 'Lalitpur best restaurant', 'authentic Newari food', 'food'],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Harisiddhi Newa Suli",
    description:
      "Learn about the history and tradition of Harisiddhi Newa Suli, the best restaurant for authentic Newari food and dining experiences.",
    url: "/about",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Harisiddhi Newa Suli",
    description:
      "Learn about the history and tradition of Harisiddhi Newa Suli, the best restaurant for authentic Newari food and dining experiences.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
