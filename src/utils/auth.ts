const walletKey = "FILL_WALLET_KEY";

export const getWalletAuthKey = () => {
  if (!window) return;

  const walletAuthKey = window.localStorage.getItem(walletKey);

  if (walletAuthKey) {
    return JSON.parse(walletAuthKey)?.accountId;
  }
};
