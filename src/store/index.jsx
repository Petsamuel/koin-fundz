import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  connectedAccount: "",
  projectData: {
    title: "",
    description: "",
    organizationType: "Profit",
    goal: "",
    expiresAt: "",
    email: "",
    country: "",
    state: "",
    imageUrl: "",
  },
  projects: [],
  stats: null,
});

export { useGlobalState, setGlobalState, getGlobalState };
