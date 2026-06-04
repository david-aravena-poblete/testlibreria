import "@tefi/design-system/styles.css";
import "./globals.css";

export const metadata = {
  title: "Test Librería",
  description: "Sandbox para validar el Design System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}