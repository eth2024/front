import { http, createConfig } from "wagmi";
import { astar, astarZkEVM } from "wagmi/chains";
import { injected } from "wagmi/connectors";

export const config = createConfig({
  chains: [astar, astarZkEVM],
  connectors: [injected()],
  ssr: true,
  transports: {
    [astar.id]: http(),
    [astarZkEVM.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
