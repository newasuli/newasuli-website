import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu | Harisiddhi Newa Suli | Best Authentic Newari Food',
  description: 'Explore the menu of Harisiddhi Newa Suli. We offer the best authentic Newari food, including signature sets, individual traditional dishes, snacks, and sweet delights.',

  keywords: [
    'restaurant menu', 'best Newari food menu', 'Harisiddhi Newa Suli food', 'authentic dishes', 'delicious meals', 'Nepalese food menu', 'best restaurant menu', 'Samay Baji', 'Choila', 'Bara', 'Chatamari', 'Yomari', 'Sukuti', 'Newari Khaja Set', 'Kachi Laa', 'Twaakka Sitan', 'Aila', 'Thwon', 'traditional Newari cuisine',
    'Harisiddhi Newa Suli Signature Set', 'Newa Suli Grand Set', 'Newa Suli Veg Set', 'Baji', 'Chiura', 'Beaten Rice', 'Mushya', 'Bhatmas', 'Fried Soyabean', 'Badam', 'Salted Peanuts', 'Aalu Wala', 'Seasoned Potato', 'Newa Achaar', 'Pickle', 'Aalu Tama', 'Bamboo Shoot', 'Chwey Laa', 'BBQ Buff Meat', 'Raw Buff Minced Meat', 'Ja Laa', 'Buff Skin', 'Dyaku Laa', 'Well Cooked Buff Meat', 'Malta Meila', 'Buff Chilli', 'Sukuti Sandeko', 'Buff Dry Meat', 'Henya Chwey Laa', 'Duck Meat', 'Nyakhuna', 'Buff Meat Gelatin', 'Khaa Gwoh', 'Baklo Bhudi', 'Buff Stomach', 'Mey', 'Jibro', 'Buff Tongue', 'Nhyepu', 'Gidi', 'Brain', 'Tishya', 'Buff Spinal Cord', 'Syapu Mhicha', 'Buff Bone Marrow', 'Bhutan', 'Buff Intestines', 'Swon', 'Fokso', 'Mutton Lungs', 'Choon Laa', 'Keema', 'Fried Minced Buff', 'Anda Chhoon Laa', 'Fried Egg with Minced Buff', 'Seitan Sukuti', 'Seasoned Seitan', 'Sadeko Chyau', 'Seasoned Mushroom', 'Kheyn', 'Egg', 'Chwo Hee', 'Rakti', 'Steamed WBC', 'Jhuku', 'Newari Sausage', 'Jaa Khana', 'Mutton Khana', 'Veg Khana', 'Plain Daal Bhaat', 'Saada', 'Plain', 'Veggie', 'Anda', 'Mishran', 'Mixed', 'Yamari', 'Ju: Ju: Dhau', 'Paan', 'Ka: Kwaa', 'Newari Soup', 'Kweyn Kwaa', 'Bone Soup', 'Mii Kwaa', 'Methi Soup', 'Paamu Kwaa', 'Lapsi Soup', 'Malta Khaaya Laa', 'Chilly Chicken', 'Khaaya', 'Chicken Chwey Laa', 'Paangra', 'Gizzard', 'Khayi Laa', 'Chicken Gravy', 'Chicken Roast', 'Anda Aalu', 'Egg Potato', 'Green Salad', 'Fruit Salad', 'Chaaku Thwon', 'Khayu Thwon', 'Hyamu Thwon', 'Raksi'
  ],
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: "Menu | Harisiddhi Newa Suli",
    description:
      "Explore the menu of Harisiddhi Newa Suli. We offer the best authentic Newari food, including signature sets, individual traditional dishes, snacks, and sweet delights.",
    url: "/menu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Menu | Harisiddhi Newa Suli",
    description:
      "Explore the menu of Harisiddhi Newa Suli. We offer the best authentic Newari food, including signature sets, individual traditional dishes, snacks, and sweet delights.",
  },
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
