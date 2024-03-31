"use client";

import { useState, type ReactNode, useEffect } from "react";
import { WagmiProvider, useAccount } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { config } from "./wagmi";
import { useGetUser, useRegisterUser } from "@/state/react-query/user";

export function Providers(props: { children: ReactNode }) {
  const [queryClient] = useState<QueryClient>(() => new QueryClient());

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <AuthChecker />
        {props.children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}

const AuthChecker = () => {
  const { address } = useAccount();
  const { data: user, isError, refetch } = useGetUser(address);
  const { mutate: registerUser } = useRegisterUser(isError);

  useEffect(() => {
    if (address && !user) {
      registerUser(address);
      refetch();
    }
  }, [address, refetch, registerUser, user]);

  return null;
};
