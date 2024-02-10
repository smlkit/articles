import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Alena's Page",
  description: "Created by Alena",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-indigo-950">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
