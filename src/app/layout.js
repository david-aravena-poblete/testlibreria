import "./globals.css";

export const metadata = {
  title: "Abecedario",
  description: "Tarjetas educativas del abecedario",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}