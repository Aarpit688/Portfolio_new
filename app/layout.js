import "./globals.css";

export const metadata = {
  title: "Portfolio - Arpit Agarwal",
  description: "Arpit is a Full Stack Web Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`font-outfit antialiased leading-8 overflow-x-hidden theme-dark:bg-darkTheme theme-dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
