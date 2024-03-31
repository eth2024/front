// import { http, createConfig } from "wagmi";
// import { mainnet } from "wagmi/chains";
// import { walletConnect } from "@wagmi/connectors";

// export const config = createConfig({
//   chains: [mainnet],
//   connectors: [
//     walletConnect({
//       isNewChainsStale: false,
//       projectId: "1caa5f0d39088ab8cd67ad3e0a91cae1",
//       showQrModal: true,
//     }),
//   ],
//   ssr: true,
//   transports: {
//     [mainnet.id]: http(),
//   },
// });

// declare module "wagmi" {
//   interface Register {
//     config: typeof config;
//   }
// }
