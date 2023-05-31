import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x959953770D2B93334B536b2713621a70e370ddC5"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/XY00pG4vFMcboUI6fVNXyAqIdLTjzcnx",
  },
};
