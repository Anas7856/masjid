// app/layout.js
import "bootstrap/dist/css/bootstrap.min.css";
import ClientBootstrap from "./ClientBootstrap";
import "../app/main.css";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const metadata = {
  title: "My App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <ClientBootstrap />
        {children}
      </body>
    </html>
  );
}
