import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  connectedAccount: "",
  isWalletModalOpen: true,
});

export { useGlobalState, setGlobalState, getGlobalState };
