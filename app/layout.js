import "./globals.css";

export const metadata = {
  title: "Trabook",
  description:
    "Esta es una web desarrollada como proyecto final para el bootcamp de Peaku. Utilizando para el backend Node.js, Express y PostgresSQL, y para el FrontEnd TailwindCSS, Next.js y NextUI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="principal-font">{children}</body>
    </html>
  );
}
