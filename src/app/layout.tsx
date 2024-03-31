import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Web3ModalProvider } from "@/providers/providers";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-black w-screen font-pretendard h-screen">
        <Web3ModalProvider>
          <div className="h-full flex w-full flex-col">
            <div className="flex w-full flex-grow">{children}</div>
          </div>
        </Web3ModalProvider>
      </body>
    </html>
  );
}
