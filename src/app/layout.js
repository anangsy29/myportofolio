import "./globals.css";

export const metadata = {
  title: "Firjatullah Anang Setiawan | Web Developer & Software Engineer",
  description: "Portofolio Firjatullah Anang Setiawan - Lulusan D3 Teknik Informatika Politeknik Negeri Batam (IPK 3.79). Web Developer & Junior Software Engineer berpengalaman dalam Laravel, Next.js, Flutter, dan IoT.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body
        className="antialiased min-h-screen bg-[#070b14] text-[#f1f5f9] selection:bg-[#ea580c] selection:text-white dark:selection:bg-[#38bdf8] dark:selection:text-[#070b14]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
