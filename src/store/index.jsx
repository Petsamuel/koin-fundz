import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  connectedAccount: "",
  projectData: {
    title: "",
    description: "",
    goal: "",
    expiresAt: "",
    organizationType: "Profit",
    companyName: "",
    email: "",
    address: "",
    country: "",
    state: "",
    website: "",
  },
});

export { useGlobalState, setGlobalState, getGlobalState };
