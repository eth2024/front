import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useAccount } from "wagmi";

const useCheckAccount = () => {
  const router = useRouter();
  const { isConnected } = useAccount();

  useEffect(() => {
    if (!isConnected) {
      router.replace("/signin");
    }
  }, [isConnected, router]);
};

export default useCheckAccount;
