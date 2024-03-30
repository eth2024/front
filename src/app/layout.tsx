import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Providers } from "@/providers/providers";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-black w-screen font-pretendard h-screen">
        <Providers>
          <div className="h-full flex w-full flex-col">
            <div className="flex w-full flex-grow">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
