import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  connectedAccount: "",
});

export { useGlobalState, setGlobalState, getGlobalState };
