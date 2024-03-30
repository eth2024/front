import "@/styles/globals.css";
import { Providers } from "@/providers/providers";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-pretendard">
        <Providers>{children}</Providers>;
      </body>
    </html>
  );
}
