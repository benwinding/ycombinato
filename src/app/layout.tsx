import "./globals.css";
import { Header } from "@/components/Header";

export default function RootLayout(props: React.PropsWithChildren<{}>) {
  return (
    <html lang="en" className="flex justify-center bg-white">
      <body className="max-w-3xl w-full">
        <Header />
        <div style={{ background: "#f6f6ef" }}>{props.children}</div>
      </body>
    </html>
  );
}
