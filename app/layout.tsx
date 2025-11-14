import "./globals.css";

export const metadata = {
  title: "Gerador de Frases pra Ayumi 💘",
  description: "Um site fofo feito pelo Giovanny pra Ayumi ❤️‍🩹",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="pt-br">
      <body className="bg-gradient-to-br from-pink-200 via-pink-100 to-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
