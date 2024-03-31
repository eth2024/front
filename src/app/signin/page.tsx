"use client";

import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAccount } from "wagmi";

import { useWeb3Modal } from "@web3modal/wagmi/react";

const SignIn = () => {
  const { open } = useWeb3Modal();
  const { isConnected } = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (isConnected) {
      router.replace("/");
    }
  }, [isConnected, router]);
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen p-5 gap-20 bg-main">
      <div className="flex flex-col items-center justify-center gap-34 w-full px-20">
        <div className="w-150 h-150  flex items-center justify-center">
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <h2 className="text-white font-bold text-24">Picademy</h2>
        <Button
          label="Connect to wallet"
          onClick={() => {
            // connect({ connector: connectors[0] });
            open();
          }}
          style={{ backgroundColor: "white", color: "#F042BC" }}
        />
      </div>
    </div>
  );
};

export default SignIn;
