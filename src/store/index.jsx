import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  connectedAccount: "",
  isWalletModalOpen: false,
});

export { useGlobalState, setGlobalState, getGlobalState };
