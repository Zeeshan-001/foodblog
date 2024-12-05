import MainHeader from "@/components/main-header/mian-header";
import "./globals.css";

export const metadata = {
  title: "Deine Koch-Community",
  description:
    "Entdecke eine Welt voller köstlicher Rezepte und inspirierender Food-Ideen. Teile deine Leidenschaft für gutes Essen mit einer internationalen Community von Food Lovers und lass dich von neuen Aromen verzaubern. Ob vegan, glutenfrei oder einfach nur lecker - bei uns findet jeder sein Lieblingsgericht.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
