import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAccount } from "wagmi";

const useCheckAccount = (isAuth?: boolean) => {
  const router = useRouter();
  const { isConnected, address } = useAccount();

  useEffect(() => {
    if (!isConnected && isAuth) {
      router.replace("/signin");
    }
  }, [isAuth, isConnected, router]);

  return {
    isConnected,
    address,
  };
};

export default useCheckAccount;
